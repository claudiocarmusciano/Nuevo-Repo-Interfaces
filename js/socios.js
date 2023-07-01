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
            <div>
                <p class="texto_registro">No estás registrado? <a href="registro.html">¡Regístrate aquí!</a></p>
            </div>
            <div class="ventajas">
                <p> Averiguá las ventajas de hacerte Socio haciendo click <a href="registro.html">aquí</a> </p>
            <div>
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
            <div id="info-container" class="info-container"></div>
        `;
    
        centralBody.innerHTML = "";
        centralBody.innerHTML = textoMenuUsuarios;

        const infoContainer = document.getElementById('info-container');

        const btnCuotas = document.getElementById('btnCuotas');
        btnCuotas.addEventListener('click', function (e) {
            e.preventDefault();
            infoContainer.style.display = 'block';
            cuotas();
        });

        const btnBeneficios = document.getElementById('btnBeneficios');
        btnBeneficios.addEventListener('click', function (e) {
            e.preventDefault();
            infoContainer.style.display = 'block';
            mostrarBeneficios();
        });

        const btnSugerencias = document.getElementById('btnSugerencias');
        btnSugerencias.addEventListener('click', function (e) {
            e.preventDefault();
            infoContainer.style.display = 'block';
            mostrarSugerencias();
        });
    }

}

function cuotas() {
    const centralBody = document.getElementById("info-container");
    const textoMenuCuotas = `
        <div class="center">
            <div id="info-container" class="contenedor-informacion">
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
                            <td class="dato-tabla-monto">$ 1.000</td>
                            <td class="dato-tabla">10/02/2023</td>
                            <td class="dato-tabla">05/02/2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">2</td>
                            <td class="dato-tabla">Febrero 2023</td>
                            <td class="dato-tabla-monto">$ 1.000</td>
                            <td class="dato-tabla">10/03/2023</td>
                            <td class="dato-tabla">10/03/2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">3</td>
                            <td class="dato-tabla">Marzo 2023</td>
                            <td class="dato-tabla-monto">$ 1.000</td>
                            <td class="dato-tabla">10/04/2023</td>
                            <td class="dato-tabla">04/04/2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">4</td>
                            <td class="dato-tabla">Abril 2023</td>
                            <td class="dato-tabla-monto">$ 1.000</td>
                            <td class="dato-tabla">10/05/2023</td>
                            <td class="dato-tabla">09/05/2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">5</td>
                            <td class="dato-tabla">Mayo 2023</td>
                            <td class="dato-tabla-monto">$ 1.000</td>
                            <td class="dato-tabla">10/06/2023</td>
                            <td class="dato-tabla">05/06/2023</td>
                        </tr>
                        <tr>
                            <td class="dato-tabla">6</td>
                            <td class="dato-tabla">Junio 2023</td>
                            <td class="dato-tabla-monto">$ 1.000</td>
                            <td class="dato-tabla">10/07/2023</td>
                            <td class="dato-tabla">Aún no pagada</td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <p class="texto-informacion">Estado: Al día</p>
                <p class="texto-informacion">Próximo vencimiento de la cuota: 10/08/2023</p>
            </div>
           
    `;
    
    centralBody.innerHTML = "";
    centralBody.innerHTML = textoMenuCuotas;
}

function mostrarBeneficios() {
    const centralBody = document.getElementById("info-container");
    const textoMenuBeneficios = `
    <div class="center">
            <div id="info-container" class="contenedor-informacion">
                <h2 class="titulo-informacion">Beneficios para socios:</h2>
                <ul class="lista-beneficios">
                    <strong>Descuentos en tiendas y espectaculos</strong> 
                    <p>Obtén descuentos exclusivos al realizar compras en las tiendas sponsor y disfruta de entradas para espectáculos, obras de teatro y eventos culturales que se realicen en el club.</p>
                    <br>
                    <strong>Acceso a áreas exclusivas del club</strong> 
                    <p>Disfruta del acceso a áreas exclusivas del club, como el salón de reuniones, pileta y canchas, donde podrás divertirte y disfrutar.</p>
                    <br>
                    <strong>Participación en eventos y torneos especiales</strong> 
                    <p>Tendrás la oportunidad de participar en eventos y torneos especiales organizados por el club en diversas disciplinas deportivas.</p>
                    <br>
                    <strong>Ofertas especiales en actividades deportivas</strong> 
                    <p>Descuentos y promociones exclusivas en actividades como clases de tenis, natación, yoga, pilates, gimnasia aeróbica, entre otras.</p>
                    <br>
                </ul>
            </div>
        </div>
        
    `;
    centralBody.innerHTML = "";
    centralBody.innerHTML = textoMenuBeneficios;
}

function mostrarSugerencias() {
    const centralBody = document.getElementById("info-container");
    const textoMenuSugerencias = `
    <div class="center">
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
