function validarLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
      window.location.href = "menuUsuarios";
      return false; // Evita que el formulario se envíe
    } else {
      return true; // Permite que el formulario se envíe normalmente
    }
  }