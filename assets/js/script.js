
// Mode jour/nuit
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
};

// Effet terminal pour textes avec data-terminal attribute
function typeWriter() {
    const elements = document.querySelectorAll('[data-terminal]');
    elements.forEach(el => {
        const text = el.innerHTML;
        el.innerHTML = '';
        let i = 0;
        const speed = 50;
        const type = () => {
            if(i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    });
}
window.addEventListener('DOMContentLoaded', typeWriter);

// Scroll reveal simple
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 50){
            el.classList.add('active');
        }
    });
});
