const logoPerfil = document.getElementById('logoPerfil');
const formularioPerfil = document.getElementById('formularioPerfil');

logoPerfil.addEventListener('click', (e) => {
  e.stopPropagation();
  formularioPerfil.classList.toggle('form-activo');
});

document.addEventListener('click', (e) => {
  if (!formularioPerfil.contains(e.target) && !logoPerfil.contains(e.target)) {
    formularioPerfil.classList.remove('form-activo');
  }
});
