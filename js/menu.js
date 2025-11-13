const menuBtn = document.querySelector('.menu-btn');
const body = document.body;

menuBtn.addEventListener('click', () => {
  body.classList.toggle('menuVisible');
});
//  Cierra el menú al hacer clic en cualquier link
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('menuVisible');
  });
});