const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

img[0].style.opacity = opacity;

imgs.addEventListener('click', e => {
       img.forEach(img => (img.style.opacity = 1));
       current.src = e.target.src;
       current.classList.add('opaque');
       setTimeout(() => current.classList.remove('opaque'), 500);
       e.target.style.opacity = opacity;
});