lucide.createIcons();

const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    lucide.createIcons();
});

lucide.createIcons();

const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');


if (savedTheme) {
    body.className = savedTheme;
}

themeBtn.addEventListener('click', () => {
    // Alterna as classes
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }

    lucide.createIcons();
});

const langContainer = document.querySelector('.lang-container');
const langCurrentText = document.querySelector('.lang-current span');
const langOptions = document.querySelectorAll('.lang-dropdown a');

langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o reload da página por enquanto
        const selectedLang = option.innerText.split('(')[1].replace(')', '');
        langCurrentText.innerText = selectedLang;
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        console.log(`Idioma alterado para: ${selectedLang}`);

    });
});

function toggleModal() {
    const modal = document.getElementById('contact-modal');
    const display = modal.style.display;

    if (display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// Fechar o modal se o usuário clicar fora do card branco
window.onclick = function(event) {
    const modal = document.getElementById('contact-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleMenu() {
    const menu = document.querySelector(".header-utilitarios");
    const btn = document.querySelector(".menu-toggle");

    menu.classList.toggle("active");
    btn.classList.toggle("active");
}