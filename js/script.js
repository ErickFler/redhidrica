function iniciarSesion() {
  const password = document.getElementById('password').value;

  if (password.trim() === "") {
    alert("Por favor ingresa la contraseña.");
  } else {
    // En un futuro aquí iría el backend. Por ahora, solo redirigimos.
    window.location.href = "dashboard.html";
  }
}

function procesarReporte(event) {
  event.preventDefault();

  // Aquí normalmente se enviaría a un servidor, pero lo simulamos
  document.getElementById('mensaje-exito').style.display = 'block';

  // Opcional: limpiar formulario
  event.target.reset();
}

function exportarRecibo() {
  alert("🧾 Función de exportar recibo simulada. En versión real, descargaría un PDF.");
}

function mostrarLogin() {
  document.getElementById('login-box').classList.remove('oculto');
}

function iniciarSesion() {
  const password = document.getElementById('password').value;
  if (password.trim() === "") {
    alert("Por favor ingresa la contraseña.");
  } else {
    window.location.href = "dashboard.html";
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('dropdownToggle');
  const menu = document.getElementById('dropdownMenu');

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && e.target !== toggle) {
      menu.classList.remove('show');
    }
  });
});

