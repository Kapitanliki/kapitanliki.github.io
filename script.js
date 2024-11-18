// Load content files
async function loadContent() {
    const languages = ['en', 'ja', 'zh'];
    for (const lang of languages) {
        const response = await fetch(`content-${lang}.html`);
        const content = await response.text();
        document.getElementById(`${lang}-content`).innerHTML = content;
    }
}

function switchLang(lang) {
    // Save language preference
    localStorage.setItem('preferredLang', lang);
    
    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update content visibility
    document.querySelectorAll('.lang-content').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById(`${lang}-content`).classList.add('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    switchLang(savedLang);
});
