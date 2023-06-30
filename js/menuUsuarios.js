function menuUsuarios() {

    const centralBody = document.getElementById("central-body");
    const textoMenuUsuarios = `
    <div class="sidebar2">
        <div><button id="btnCuotas" class="normal">Cuotas</button></div>
        <div><button id="btnBeneficios" class="normal">Beneficios</button></div>
        <div><button id="btnSugerencias" class="normal">Sugerencias</button></div>
    </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoMenuUsuarios;
}