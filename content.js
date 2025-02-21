let cachedSubtitles = [];
let tlang = "ja";




// when the page is loaded,caching the subtitles
window.addEventListener("load", async () => {
    const { ttsEnabled } = await new Promise((resolve) => {
        chrome.storage.sync.get("ttsEnabled", (data) => {
            resolve(data);
        });
    });

    if (!ttsEnabled) {
        console.log("extension is disabled")
        return;
    }
    console.log("✅ YouTube動画が検出されました。字幕データをキャッシュします。");
    cachedSubtitles = await getSubtitles();
    playSubtitlesWithTTS(cachedSubtitles);
    console.debug(cachedSubtitles);
    observeVideoChanges();
});

// when the video is changed,reload the page
function observeVideoChanges() {
    let currentUrl = location.href;
    const observer = new MutationObserver(async () => {
        if (currentUrl !== location.href) {
            currentUrl = location.href;
            window.location.reload();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

async function getSubtitles() {
    // find and extract request url from script tag
    const { selectedLanguage } = await new Promise((resolve) => {
        chrome.storage.sync.get("selectedLanguage", (data) => {
            resolve(data);
        });
    });

    const tlang = selectedLanguage || "ja"; // 設定されていない場合は日本語にデフォルト設定
    const extracted = [...document.querySelectorAll("script")].map(s => s.innerText).find(text => text.includes("timedtext")).match(/https:\/\/www\.youtube\.com\/api\/timedtext\?[^"]+/).toString().replace(/\\u0026/g, "&");
    const regex = /[?&]([^=]+)=([^&]+)/g;
    console.debug([...document.querySelectorAll("script")].map(s => s.innerText).find(text => text.includes("timedtext")).match(/https:\/\/www\.youtube\.com\/api\/timedtext\?[^"]+/).toString());
    if (!extracted) {
        console.error("❌ 字幕リクエストURLが見つかりません！");
        return
    }
    // add params from extracted url
    const params = {};
    while ((match = regex.exec(extracted)) !== null) {
        params[match[1]] = match[2];
    }

    params["fmt"] = "json3";
    params["xorb"] = "2";
    params["xobt"] = "3";
    params["xovt"] = "3";
    params["tlang"] = tlang;

    // generate request url
    const requestUrl = `https://www.youtube.com/api/timedtext?${new URLSearchParams(params)}`;

    // request subtitles
    const response = await fetch(requestUrl);
    const data = await response.json();
    if (!data || !data.events) {
        console.error("❌ 字幕データが取得できません！");
        return
    }
    // process subtitles
    const subtitles = data.events
        .filter((event) => event.tStartMs && event.segs)
        .map((event, index, array) => {
            const start_time = event.tStartMs / 1000;
            const next_start = (array[index + 1]?.tStartMs ?? (event.tStartMs + event.dDurationMs)) / 1000;
            const duration = next_start - start_time;
            const text = event.segs.map((seg) => seg.utf8).join("");
            return { start_time, duration, text };
        });

    return subtitles;
}


async function playSubtitlesWithTTS(subtitles) {
    const video = document.querySelector("video");
    let currentSubtitleIndex = 0; // 現在読み上げている字幕のインデックス
    // 動画の再生時間を監視して、字幕と同期
    setInterval(() => {
        const currentTime = video.currentTime;

        // 全字幕が再生されたら終了
        if (currentSubtitleIndex >= subtitles.length) {
            console.log("全ての字幕を読み上げました。");
            return;
        }

        const { start_time, duration, text } = subtitles[currentSubtitleIndex];

        // 新しい字幕のタイミングに達したら発話を開始
        if (currentTime >= start_time) {
            // 空白・改行・タブだけの字幕はスキップ
            if (text.replace(/\s/g, "") !== "") {
                // 🔥 前回の発話をキャンセル
                if (speechSynthesis.speaking) {
                    console.log("🛑 前の発話をキャンセルしました。");
                    speechSynthesis.cancel();
                }

                // 🔥 空白チェック後にTTSを再生
                speakText(text, duration);
            } else {
                console.log("⏭️ 空白・改行のみの字幕をスキップしました。");
            }

            currentSubtitleIndex++; // 次の字幕に進む
        }
    }, 200); // 0.2秒ごとにチェック
}


async function speakText(text, duration) {
    const { ttsEnabled } = await new Promise((resolve) => {
        chrome.storage.sync.get("ttsEnabled", (data) => {
            resolve(data);
        });
    });
    if(!ttsEnabled){
        return;
    }
    if (speechSynthesis.speaking) {
        console.log("🚫 現在の発話が終了していません。読み上げをスキップします。");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    chrome.storage.sync.get("selectedVoice", (data) => {
        const voices = speechSynthesis.getVoices();
        const selectedVoice = voices.find((voice) => voice.name === data.selectedVoice);

        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log(`🗣️ 選択された音声エンジン: ${selectedVoice.name}`);
        } else {
            // 🔄 デフォルトの日本語ナレーターを使用
            const japaneseVoice = voices.find((voice) => voice.lang === "ja-JP");
            if (japaneseVoice) {
                utterance.voice = japaneseVoice;
                console.log(`🗣️ デフォルト音声エンジン: ${japaneseVoice.name}`);
            }
        }

        utterance.lang = "ja-JP";
        utterance.rate = calculateSpeechRate(text, duration);
        utterance.volume = 1.0;
        utterance.pitch = 1.0;

        speechSynthesis.speak(utterance);
    });
}

// ⚡ 発話速度を調整
function calculateSpeechRate(text, availableDuration) {
    const avgCharPerSec = 5;
    const estimatedTime = text.length / avgCharPerSec;
    let requiredRate = estimatedTime / availableDuration;
    requiredRate = Math.min(10.0, Math.max(0.5, requiredRate));
    console.log(`⚡ 発話速度調整: ${requiredRate.toFixed(2)}x に設定（利用可能時間: ${availableDuration.toFixed(2)}s）`);
    return requiredRate;
}