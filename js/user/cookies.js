/*function acceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
}

function rejectCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
}
*/
// Mostrar el banner solo si no hay decisión guardada en sessionStorage
window.addEventListener('DOMContentLoaded', function () {
  if (!sessionStorage.getItem('cookies-decision')) {
    document.getElementById('cookie-banner').style.display = 'block';
  }
});

function acceptCookies() {
  sessionStorage.setItem('cookies-decision', 'aceptadas');
  document.getElementById('cookie-banner').style.display = 'none';
}

function rejectCookies() {
  sessionStorage.setItem('cookies-decision', 'rechazadas');
  document.getElementById('cookie-banner').style.display = 'none';
}


window.addEventListener("load", () => {
  if (!sessionStorage.getItem("cookies-popupMostrado")) {
    document.getElementById("cookie-banner").style.display = "block";
    sessionStorage.setItem("cookies-popupMostrado", "true");
  }
});