const hamb = document.querySelector('.hamburger'); 
const nav = document.querySelector('.nav'); 
const navLinks = document.querySelectorAll('.nav a'); 


hamb.addEventListener('click', () => {
    nav.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); 
    });
});