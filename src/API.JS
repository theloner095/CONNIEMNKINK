window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Calcula el porcentaje de scroll (0 a 1)
  const scrollPercent = scrollY / maxScroll;

  // Oscurece el fondo: entre blanco (#fff) y gris oscuro (#222)
  const shade = Math.floor(255 - scrollPercent * 150); // 255 → 105
  document.body.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
});
