// JS que limpia la pantalla cada vez que se presione Home en el menú principal.

function home() {

    const centralBody = document.getElementById("central-body");
    const textoBotonHome = '';

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonHome;

    centralBody.classList.add("home-section");

}
