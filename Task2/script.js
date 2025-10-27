const navLinks = document.querySelectorAll('.nav-link');
const slides = document.querySelectorAll('.slide');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetSlide = parseInt(link.getAttribute('data-slide'));

        slides.forEach((slide, index) => {
            if(index === targetSlide) {
                slide.classList.add('active-slide');
            } else {
                slide.classList.remove('active-slide');
            }
        });

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
