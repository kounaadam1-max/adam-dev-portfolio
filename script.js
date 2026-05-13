
const modeIcon = document.querySelector('.mode-icon');

modeIcon.addEventListener('click', () => {
    if (modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        modeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

document.querySelector('.btn-primary').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.skills').offsetTop,
        behavior: 'smooth'
    });
});
const scrollTop = document.querySelector('.scroll-top');

scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

