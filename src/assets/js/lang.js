const translations = {
    en: null,
    tr: null,
    fr: null,
    ru: null,
    it: null
};

let translationLoaded = {
    en: false,
    tr: false,
    fr: false,
    ru: false,
    it: false
};

function loadTranslation(language) {
    if (translations[language] === null) {
        fetch(`https://cestnytr.github.io/CV/src/assets/json/${language}.json`)
            .then(response => response.json())
            .then(data => {
                translations[language] = data;
                translationLoaded[language] = true;
                setLanguage(language);
            })
            .catch(error => console.error(`Error loading ${language}.json:`, error));
    } else {
        setLanguage(language);
    }
}

function setLanguage(language) {
    if (translations[language]) {
        localStorage.setItem('preferredLanguage', language);
        translatePage(translations[language]);
    } else {
        console.error(`Translations for ${language} not loaded.`);
    }
}

function translatePage(languageData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = languageData;

        keys.forEach(k => {
            if (value[k] !== undefined) {
                value = value[k];
            }
        });

        if (value !== languageData) {
            element.innerHTML = value;
        } else {
            console.error(`Translation key "${key}" not found.`);
        }
    });
}

// Set language based on browser language or localStorage
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || navigator.language.split('-')[0] || 'en';
    const supportedLanguages = Object.keys(translations);
    
    // Check if the preferred language is supported, otherwise fall back to 'en'
    const languageToLoad = supportedLanguages.includes(preferredLanguage) ? preferredLanguage : 'en';
    loadTranslation(languageToLoad);
});

// Button event listeners to change language
document.getElementById('lang-en').addEventListener('click', () => loadTranslation('en'));
document.getElementById('lang-tr').addEventListener('click', () => loadTranslation('tr'));
document.getElementById('lang-fr').addEventListener('click', () => loadTranslation('fr'));
document.getElementById('lang-ru').addEventListener('click', () => loadTranslation('ru'));
document.getElementById('lang-it').addEventListener('click', () => loadTranslation('it'));
