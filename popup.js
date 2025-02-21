const translations = {
  ja: {
    languageSetting: "🌍 言語設定",
    narratorSetting: "🎙️ ナレーター設定",
    saveButton: "💾 保存",
    saved: "✅ 設定完了",
    reloadMessage: "設定はリロード後に反映されます。",
  },
  en: {
    languageSetting: "🌍 Language Settings",
    narratorSetting: "🎙️ Narrator Settings",
    saveButton: "💾 Save",
    saved: "✅ Settings Saved",
    reloadMessage: "Settings will apply after reload.",
  },
  fr: {
    languageSetting: "🌍 Paramètres de langue",
    narratorSetting: "🎙️ Paramètres du narrateur",
    saveButton: "💾 Sauvegarder",
    saved: "✅ Paramètres enregistrés",
    reloadMessage: "Les paramètres seront appliqués après le rechargement.",
  },
  de: {
    languageSetting: "🌍 Spracheinstellungen",
    narratorSetting: "🎙️ Erzähler-Einstellungen",
    saveButton: "💾 Speichern",
    saved: "✅ Einstellungen gespeichert",
    reloadMessage: "Einstellungen werden nach dem Neuladen übernommen.",
  },
  "zh-CN": {
    languageSetting: "🌍 语言设置 (简体)",
    narratorSetting: "🎙️ 旁白设置",
    saveButton: "💾 保存",
    saved: "✅ 设置已保存",
    reloadMessage: "设置将在重新加载后生效。",
  },
  "zh-TW": {
    languageSetting: "🌍 語言設置 (繁體)",
    narratorSetting: "🎙️ 旁白設置",
    saveButton: "💾 保存",
    saved: "✅ 設置已保存",
    reloadMessage: "設置將在重新加載後生效。",
  },
  ko: {
    languageSetting: "🌍 언어 설정",
    narratorSetting: "🎙️ 내레이터 설정",
    saveButton: "💾 저장",
    saved: "✅ 설정 완료",
    reloadMessage: "설정은 새로고침 후에 적용됩니다.",
  },
  es: {
    languageSetting: "🌍 Configuración de idioma",
    narratorSetting: "🎙️ Configuración de narrador",
    saveButton: "💾 Guardar",
    saved: "✅ Configuración guardada",
    reloadMessage: "La configuración se aplicará después de recargar.",
  },
  pt: {
    languageSetting: "🌍 Configuração de idioma",
    narratorSetting: "🎙️ Configuração do narrador",
    saveButton: "💾 Salvar",
    saved: "✅ Configuração salva",
    reloadMessage: "As configurações serão aplicadas após o recarregamento.",
  },
  ru: {
    languageSetting: "🌍 Настройки языка",
    narratorSetting: "🎙️ Настройки диктора",
    saveButton: "💾 Сохранить",
    saved: "✅ Настройки сохранены",
    reloadMessage: "Настройки будут применены после перезагрузки.",
  },
  it: {
    languageSetting: "🌍 Impostazioni lingua",
    narratorSetting: "🎙️ Impostazioni del narratore",
    saveButton: "💾 Salva",
    saved: "✅ Impostazioni salvate",
    reloadMessage: "Le impostazioni verranno applicate dopo il riavvio.",
  },
  nl: {
    languageSetting: "🌍 Taalinstellingen",
    narratorSetting: "🎙️ Instellingen voor verteller",
    saveButton: "💾 Opslaan",
    saved: "✅ Instellingen opgeslagen",
    reloadMessage: "Instellingen worden toegepast na het herladen.",
  },
  tr: {
    languageSetting: "🌍 Dil Ayarları",
    narratorSetting: "🎙️ Anlatıcı Ayarları",
    saveButton: "💾 Kaydet",
    saved: "✅ Ayarlar Kaydedildi",
    reloadMessage: "Ayarlar yeniden yüklendikten sonra uygulanacaktır.",
  },
  ar: {
    languageSetting: "🌍 إعدادات اللغة",
    narratorSetting: "🎙️ إعدادات الراوي",
    saveButton: "💾 حفظ",
    saved: "✅ تم حفظ الإعدادات",
    reloadMessage: "سيتم تطبيق الإعدادات بعد إعادة التحميل.",
  },
  vi: {
    languageSetting: "🌍 Cài đặt ngôn ngữ",
    narratorSetting: "🎙️ Cài đặt người đọc",
    saveButton: "💾 Lưu",
    saved: "✅ Đã lưu cài đặt",
    reloadMessage: "Cài đặt sẽ được áp dụng sau khi tải lại.",
  },
  hi: {
    languageSetting: "🌍 भाषा सेटिंग",
    narratorSetting: "🎙️ कथावाचक सेटिंग्स",
    saveButton: "💾 सहेजें",
    saved: "✅ सेटिंग सहेजी गई",
    reloadMessage: "सेटिंग पुनः लोड करने के बाद लागू होगी।",
  },
  th: {
    languageSetting: "🌍 การตั้งค่าภาษา",
    narratorSetting: "🎙️ การตั้งค่าผู้บรรยาย",
    saveButton: "💾 บันทึก",
    saved: "✅ การตั้งค่าถูกบันทึกแล้ว",
    reloadMessage: "การตั้งค่าจะถูกนำไปใช้หลังจากรีโหลด.",
  },
  id: {
    languageSetting: "🌍 Pengaturan Bahasa",
    narratorSetting: "🎙️ Pengaturan Narator",
    saveButton: "💾 Simpan",
    saved: "✅ Pengaturan Disimpan",
    reloadMessage: "Pengaturan akan diterapkan setelah dimuat ulang.",
  },
  sv: {
    languageSetting: "🌍 Språkinställningar",
    narratorSetting: "🎙️ Berättarinställningar",
    saveButton: "💾 Spara",
    saved: "✅ Inställningar sparade",
    reloadMessage: "Inställningar tillämpas efter omladdning.",
  },
  pl: {
    languageSetting: "🌍 Ustawienia języka",
    narratorSetting: "🎙️ Ustawienia lektora",
    saveButton: "💾 Zapisz",
    saved: "✅ Ustawienia zapisane",
    reloadMessage: "Ustawienia zostaną zastosowane po przeładowaniu.",
  },
};



// 🌍 UIのテキストを更新する関数
function updateUIText(languageCode) {
  const translation = translations[languageCode] || translations["en"];

  document.getElementById("languagetitle").textContent = translation.languageSetting;
  document.getElementById("voicetitle").textContent = translation.narratorSetting;
  document.getElementById("saveButton").textContent = translation.saveButton;
  document.getElementById("statusMessage").textContent = ""; // 初期化
}



document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("languageSelect");
  const voiceSelect = document.getElementById("voiceSelect");
  const saveButton = document.getElementById("saveButton");
  const statusMessage = document.getElementById("statusMessage");

  let allVoices = [];

  // 🎙️ 利用可能な音声エンジンを取得
  function populateVoiceList(selectedLanguage) {
    allVoices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // 初期化

    // 🎯 言語ごとにナレーターをフィルター
    const filteredVoices = allVoices.filter((voice) => voice.lang.startsWith(selectedLanguage));

    filteredVoices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });

    // 🔄 前回の設定を復元
    chrome.storage.sync.get(["selectedVoice", "selectedLanguage"], (data) => {
      const language = data.selectedLanguage || "en";
      languageSelect.value = language;
      updateUIText(language); // 🌍 UIテキストを更新

      if (data.selectedVoice) {
        voiceSelect.value = data.selectedVoice;
      }
    });
  }

  // 🔄 言語変更時にナレーターリストを更新 + UI更新
  languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;
    chrome.storage.sync.set({ selectedLanguage }, () => {
      console.log(`🌍 言語設定が変更されました: ${selectedLanguage}`);
      populateVoiceList(selectedLanguage); // ナレーターリストを更新
      updateUIText(selectedLanguage); // UIのテキストも更新
      resetSaveButton(); // ボタンを元に戻す
    });
  });
  voiceSelect.addEventListener("change",()=>{
    resetSaveButton()
  })

  // 🔄 音声リストの初期化
  speechSynthesis.onvoiceschanged = () => {
    chrome.storage.sync.get("selectedLanguage", (data) => {
      const savedLanguage = data.selectedLanguage || navigator.language.split("-")[0] || "en";
      languageSelect.value = savedLanguage;
      updateUIText(savedLanguage); // 🌍 UIテキストを初期化
      populateVoiceList(savedLanguage);
    });
  };

  // 💾 設定を保存
  saveButton.addEventListener("click", () => {
    const selectedVoice = voiceSelect.value;
    const selectedLanguage = languageSelect.value;

    chrome.storage.sync.set({ selectedVoice, selectedLanguage }, () => {
      console.log(`✅ 設定が保存されました: ナレーター - ${selectedVoice}, 言語 - ${selectedLanguage}`);

      // 🔒 保存ボタンをグレーアウト
      saveButton.textContent = translations[selectedLanguage].saved;
      saveButton.disabled = true;
      saveButton.style.backgroundColor = "#ccc";

      // 📢 メッセージを表示
      statusMessage.textContent = translations[selectedLanguage].reloadMessage;
    });
  });

  // 🔄 設定が変更されたときにボタンを元に戻す
  function resetSaveButton() {
    const selectedLanguage = languageSelect.value;
    saveButton.disabled = false;
    saveButton.textContent = translations[selectedLanguage].saveButton;
    saveButton.style.backgroundColor = "";
    statusMessage.textContent = ""; // メッセージをリセット
  }
});
