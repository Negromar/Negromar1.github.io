const redesSociales = document.querySelector('.redes-sociales');

redesSociales.addEventListener('mouseover', e => {
  if (e.target.tagName === 'IMG') {
    e.target.style.opacity = '0.5';
  }
});

redesSociales.addEventListener('mouseout', e => {
  if (e.target.tagName === 'IMG') {
    e.target.style.opacity = '1';
  }
});
