document.addEventListener("DOMContentLoaded", async () => {
    const languageSelect = document.getElementById("languageSelect");
    const voiceSelect = document.getElementById("voiceSelect");
    const speedSlider = document.getElementById("speedSlider");
    const speedValue = document.getElementById("speedValue");
    const testButton = document.getElementById("testButton");
  
    // 言語別デフォルト発話速度
    const defaultSpeeds = {
      "ja-JP": 2.5,
      "en-US": 5.0,
      "en-GB": 4.5,
      "fr-FR": 4.0,
      "zh-CN": 3.5,
      "de-DE": 4.0,
      "ko-KR": 3.0
    };
  
    const testMessages = {
      "ja-JP": "これは日本語のテストメッセージです。",
      "en-US": "This is a test message in English.",
      "en-GB": "This is a test message in British English.",
      "fr-FR": "Ceci est un message de test en français.",
      "zh-CN": "这是一个中文测试消息。",
      "de-DE": "Dies ist eine Testnachricht auf Deutsch。",
      "ko-KR": "이것은 한국어 테스트 메시지입니다。"
    };
  
    let voices = [];
  
    // 🔍 利用可能な音声エンジンを言語ごとに分類
    function populateLanguageList() {
      voices = speechSynthesis.getVoices();
      const languages = {};
  
      voices.forEach((voice) => {
        if (!languages[voice.lang]) {
          languages[voice.lang] = [];
        }
        languages[voice.lang].push(voice);
      });
  
      languageSelect.innerHTML = "";
  
      Object.keys(languages).forEach((lang) => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
      });
  
      // 🔄 前回選択した言語を復元
      chrome.storage.sync.get("selectedLanguage", (data) => {
        if (data.selectedLanguage) {
          languageSelect.value = data.selectedLanguage;
          updateVoiceList(data.selectedLanguage);
        }
      });
    }
  
    // 🔄 言語選択に応じてナレーターを更新
    function updateVoiceList(language) {
      voiceSelect.innerHTML = "";
  
      const filteredVoices = voices.filter((voice) => voice.lang === language);
  
      filteredVoices.forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} ${voice.localService ? "🖥️ ローカル" : "☁️ オンライン"}`;
        voiceSelect.appendChild(option);
      });
  
      // デフォルトの発話速度を設定
      const defaultSpeed = defaultSpeeds[language] || 2.5;
      speedSlider.value = defaultSpeed;
      speedValue.textContent = defaultSpeed;
      chrome.storage.sync.set({ selectedVoice: voiceSelect.value, selectedSpeed: defaultSpeed });
    }
  
    // 🔄 言語が変更された場合
    languageSelect.addEventListener("change", () => {
      const selectedLanguage = languageSelect.value;
      chrome.storage.sync.set({ selectedLanguage });
      updateVoiceList(selectedLanguage);
    });
  
    // 🔄 ナレーターが変更された場合
    voiceSelect.addEventListener("change", () => {
      const selectedVoice = voiceSelect.value;
      chrome.storage.sync.set({ selectedVoice });
    });
  
    // 🔄 スライダーで速度を調整
    speedSlider.addEventListener("input", () => {
      const selectedSpeed = speedSlider.value;
      speedValue.textContent = selectedSpeed;
      chrome.storage.sync.set({ selectedSpeed });
    });
  
    // 🔊 テスト再生
    testButton.addEventListener("click", () => {
      const selectedVoiceName = voiceSelect.value;
      const selectedLanguage = languageSelect.value;
      const selectedSpeed = parseFloat(speedSlider.value);
      const selectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
  
      if (selectedVoice) {
        const message = testMessages[selectedLanguage] || "This is a test message.";
        const utterance = new SpeechSynthesisUtterance(message);
  
        utterance.voice = selectedVoice;
        utterance.lang = selectedLanguage;
        utterance.rate = selectedSpeed;
        speechSynthesis.speak(utterance);
      }
    });
  
    // ページ読み込み時に音声リストを更新
    speechSynthesis.onvoiceschanged = populateLanguageList;
    populateLanguageList();
  });