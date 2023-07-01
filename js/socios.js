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

    function menuUsuarios() {
        const centralBody = document.getElementById("central-body");
        const textoMenuUsuarios = `
            <div class="titulo">Socios</div>
            <div class="sidebar2">
                <div><button id="btnCuotas" class="normal">Cuotas</button></div>
                <div><button id="btnBeneficios" class="normal">Beneficios</button></div>
                <div><button id="btnSugerencias" class="normal">Sugerencias</button></div>
            </div>
        `;
    
        centralBody.innerHTML = "";
        centralBody.innerHTML = textoMenuUsuarios;

        const btnCuotas = document.getElementById('btnCuotas');
        btnCuotas.addEventListener('click', function (e) {
            e.preventDefault();
            cuotas();
        });

        const btnBeneficios = document.getElementById('btnBeneficios');
        btnBeneficios.addEventListener('click', function (e) {
            e.preventDefault();
            mostrarBeneficios();
        });

        const btnSugerencias = document.getElementById('btnSugerencias');
        btnSugerencias.addEventListener('click', function (e) {
            e.preventDefault();
            mostrarSugerencias();
        });
    }

}

function cuotas() {
    const centralBody = document.getElementById("central-body");
    const textoMenuCuotas = `
        <div class="center">
            <div class="titulo">Socios - Cuotas</div>
            <div id="info-container">
                <h2 class="titulo-informacion">Información de las cuotas del socio:</h2>
                <table class="tabla-informacion">
                    <thead>
                        <tr>
                            <th class="encabezado-tabla">Nro. Cuota</th>
                            <th class="encabezado-tabla">Mes</th>
                            <th class="encabezado-tabla">Monto</th>
                            <th class="encabezado-tabla">Fecha de Vencimiento</th>
                            <th class="encabezado-tabla">Fecha de Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="dato-tabla">1</td>
                            <td class="dato-tabla">Enero 2023</td>
                            <td class="dato-tabla">$100</td>
                            <td class="dato-tabla">10 de febrero de 2023</td>
                            <td class="dato-tabla">05 de febrero de 2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">2</td>
                            <td class="dato-tabla">Febrero 2023</td>
                            <td class="dato-tabla">$100</td>
                            <td class="dato-tabla">10 de marzo de 2023</td>
                            <td class="dato-tabla">10 de marzo de 2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">3</td>
                            <td class="dato-tabla">Marzo 2023</td>
                            <td class="dato-tabla">$100</td>
                            <td class="dato-tabla">10 de abril de 2023</td>
                            <td class="dato-tabla">04 de abril de 2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">4</td>
                            <td class="dato-tabla">Abril 2023</td>
                            <td class="dato-tabla">$100</td>
                            <td class="dato-tabla">10 de mayo de 2023</td>
                            <td class="dato-tabla">09 de mayo de 2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">5</td>
                            <td class="dato-tabla">Mayo 2023</td>
                            <td class="dato-tabla">$100</td>
                            <td class="dato-tabla">10 de junio de 2023</td>
                            <td class="dato-tabla">05 de junio de 2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">6</td>
                            <td class="dato-tabla">Junio 2023</td>
                            <td class="dato-tabla">$100</td>
                            <td class="dato-tabla">10 de julio de 2023</td>
                            <td class="dato-tabla">Aún no pagada</td>
                        </tr>
                    </tbody>
                </table>
                <p class="texto-informacion">Estado: Al día</p>
                <p class="texto-informacion">Próximo vencimiento de la cuota: 10 de agosto de 2023</p>
            </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoMenuCuotas;
}

function mostrarBeneficios() {
    const centralBody = document.getElementById("central-body");
    const textoMenuBeneficios = `
    <div class="center">
            <div class="titulo">Socios - Beneficios</div>
            <div id="info-container" class="contenedor-informacion">
                <h2 class="titulo-informacion">Beneficios para socios:</h2>
                <ul class="lista-beneficios">
                    <strong>Descuentos en tiendas</strong> 
                    <p>Obtén descuentos exclusivos al realizar compras en las tiendas sponsor que incluyen artículos deportivos, ropa, accesorios y más.</p>
                    <strong>Acceso a áreas exclusivas del club</strong> 
                    <p>Disfruta del acceso a áreas exclusivas del club, como el salón de reuniones, pileta y canchas, donde podrás divertirte y disfrutar.</p>
                    <strong>Participación en eventos y torneos especiales</strong> 
                    <p>Tendrás la oportunidad de participar en eventos y torneos especiales organizados por el club en diversas disciplinas deportivas.</p>
                    <strong>Ofertas especiales en actividades deportivas</strong> 
                    <p>Descuentos y promociones exclusivas en actividades como clases de tenis, natación, yoga, pilates, gimnasia aeróbica, entre otras.</p>
                    <strong>Descuentos en entradas para espectáculos</strong> 
                    <p>Disfruta de entradas para espectáculos, obras de teatro y eventos culturales que se realicen en el club o en asociación con él.</p>
                </ul>
            </div>
        </div>
    `;
    centralBody.innerHTML = "";
    centralBody.innerHTML = textoMenuBeneficios;
}

function mostrarSugerencias() {
    const centralBody = document.getElementById("central-body");
    const textoMenuSugerencias = `
    <div class="center">
            <div class="titulo">Socios - Sugerencias</div>
            <div id="info-container" class="contenedor-informacion">
                <h2 class="titulo-informacion">Sugerencias</h2>
                <h4>Escribe tu sugerencia:</h4>
                <div class="sugerencias-container">
                    <textarea id="sugerencia" name="sugerencia" rows="15" cols="100"></textarea>
                    <button id="enviar-sugerencia">Enviar</button>
                </div>
            </div>
    </div>
    `;
    centralBody.innerHTML = "";
    centralBody.innerHTML = textoMenuSugerencias;
}
