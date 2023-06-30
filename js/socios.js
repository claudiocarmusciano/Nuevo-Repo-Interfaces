function socios() {
    const centralBody = document.getElementById("central-body");
    const textoBotonSocios = `
        <div class="titulo">Socios</div>
        <div class="login-form">
            <form>
                <div class="form-group">
                    <label for="username">Usuario</label>
                    <input type="text" id="username" name="username">
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password">
                </div>
                <button class="login-button" id="register-button">Loguearse</button>
            </form>
            <p class="texto_registro">No estás registrado? <a href="registro.html">¡Regístrate aquí!</a></p>
        </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonSocios;

    const botonLoguearse = document.getElementById('register-button');
    botonLoguearse.addEventListener('click', function (e) {
        e.preventDefault();
        menuUsuarios(); 
    });
}


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
