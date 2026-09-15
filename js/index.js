document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-interactive');
  const iframe = document.getElementById('visor-iframe');
  const visorTitulo = document.getElementById('visor-titulo');
  const btnRedirigir = document.getElementById('btn-redirigir');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const targetUrl = card.getAttribute('data-target');
      if (targetUrl && iframe) {
        iframe.src = targetUrl;
        if (visorTitulo) visorTitulo.textContent = targetUrl;
        if (btnRedirigir) btnRedirigir.href = targetUrl;
      }
    });
  });
});