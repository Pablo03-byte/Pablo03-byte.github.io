function closeNewsletterPopup() {
  document.getElementById('newsletter-popup').style.display = 'none';
  document.getElementById("newsletter-popup-overlay").style.display = "none";
}

// Mostrar el pop-up al cargar la página

window.addEventListener("load",  function() {
    if (!sessionStorage.getItem("newsletter-popupMostrado")) {
            setTimeout(() => {
              document.getElementById("newsletter-popup-overlay").style.display = "flex";
              sessionStorage.setItem("newsletter-popupMostrado", "true"); // Marquem que ja s’ha mostrat
              }, 2000);
    };
} );

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

