function socios() {

    const centralBody = document.getElementById("central-body");
    const textoBotonSocios = `
    <head>
        <script src="js/menuUsuarios.js"></script>
    </head>
    
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
    </div>

    <script>
        const botonLoguearse = document.getElementById('register-button');
        botonLoguearse.addEventListener('click', menuUsuarios);
    </script>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonSocios;
}