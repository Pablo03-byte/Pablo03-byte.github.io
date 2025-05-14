function closeNewsletterPopup() {
  document.getElementById('newsletter-popup').style.display = 'none';
}

// Mostrar el pop-up al cargar la página
window.onload = function() {
  document.getElementById('newsletter-popup').style.display = 'flex';
};

// Mostrar mensaje de éxito al suscribirse
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('newsletter-form');
  var successMsg = document.getElementById('newsletter-success');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.style.display = 'none';
    successMsg.style.display = 'block';
  });
});

