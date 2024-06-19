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
        // fetch(`https://cestnytr.github.io/CV-2/src/assets/json/${language}.json`)
        fetch(`http://127.0.0.1:3000/src/assets/json/${language}.json`)
            .then(response => response.json())
            .then(data => {
                translations[language] = data;
                translationLoaded[language] = true;
                setLanguage(language);  // Set the loaded language
            })
            .catch(error => console.error(`Error loading ${language}.json:`, error));
    } else {
        setLanguage(language);  // Language already loaded
    }
}

// Function to set language
function setLanguage(language) {
    if (translations[language]) {
        localStorage.setItem('preferredLanguage', language);  // Save the language to localStorage
        translatePage(translations[language]);
    } else {
        console.error(`Translations for ${language} not loaded.`);
    }
}

// Function to translate the page
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

// Set language based on localStorage or default to 'en'
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    loadTranslation(preferredLanguage);
});

// Button event listeners to change language
document.getElementById('lang-en').addEventListener('click', () => loadTranslation('en'));
document.getElementById('lang-tr').addEventListener('click', () => loadTranslation('tr'));
document.getElementById('lang-fr').addEventListener('click', () => loadTranslation('fr'));
document.getElementById('lang-ru').addEventListener('click', () => loadTranslation('ru'));
document.getElementById('lang-it').addEventListener('click', () => loadTranslation('it'));
