// La función principal "socios" nos muestra en primera instancia una ventana
// para poder loguearnos. Podemos loguearnos, registrarnos en caso que no esté
// registrado, e incluso acceso a una lista de beneficios a las cuales pueden 
// acceder siendo socios.

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
                <button class="login-button" id="login-button">Loguearse</button>
            </form>
            <div class="registro-container">
                <button class="register-button" id="register-button">No estás registrado?¡Regístrate aquí!</button>
            </div>
            <div class="ventajas">
                <button class="register-button" id="averigua-button">Averiguá las ventajas de hacerte Socio!</button>
            <div>
        </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonSocios;

    const botonLoguearse = document.getElementById('login-button');
    botonLoguearse.addEventListener('click', function (e) {
        e.preventDefault();
        menuUsuarios(); 
    });

    const botonRegistrarse = document.getElementById('register-button');
    botonRegistrarse.addEventListener('click', function (e) {
        e.preventDefault();
        registrarUsuario(); 
    });

    const botonAveriguar = document.getElementById('averigua-button');
    botonAveriguar.addEventListener('click', function (e) {
        e.preventDefault();
        averiguarBeneficios(); 
    });

    // A esta funcion entra una vez logueado:
    function menuUsuarios() {
        const centralBody = document.getElementById("central-body");
        const textoMenuUsuarios = `
            <div class="titulo">Socios</div>
            <div class="sidebar2-infocontainer">
                <div class="sidebar2">
                    <div><button id="btnCuotas" class="normal">Cuotas</button></div>
                    <div><button id="btnBeneficios" class="normal">Beneficios</button></div>
                    <div><button id="btnSugerencias" class="normal">Sugerencias</button></div>
                </div>
                <div id="info-container" class="info-container"></div>
            </div>
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

    // Función para registrar nuevo socio:
    function registrarUsuario() {
        const centralBody = document.getElementById("central-body");
        const textoRegistrarUsuario = `
        <div class="titulo">Socios</div>
        <div class="registro-form"> 
            <form>
                <div class="form-group">
                    <label for="fullname">Apellido y Nombre</label>
                    <input type="text" id="fullname" name="fullname">
                </div>
                <div class="form-group">
                    <label for="address">Dirección</label>
                    <input type="text" id="address" name="address">
                </div>
                <div class="form-group">
                    <label for="dni">DNI</label>
                    <input type="text" id="dni" name="dni">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">
                </div>
                <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input type="text" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="usuario">Usuario</label>
                    <input type="text" id="usuario" name="usuario">
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password">
                </div>
                <button type="submit" class="boton-registrarse">Registrarse</button>
            </form>
        </div>
        `;
    
        centralBody.innerHTML = "";
        centralBody.innerHTML = textoRegistrarUsuario;

    }

    function averiguarBeneficios() {
        const centralBody = document.getElementById("central-body");
        const textoBeneficiosUsuario = `
        <div class="titulo">Socios</div>
        <div class="center-beneficios">
        <div id="info-container" class="contenedor-informacion">
            <h2 class="titulo-beneficios">Beneficios para socios:</h2>
            
                <strong>Descuentos en tiendas y espectaculos</strong> 
                <p class="beneficios">Obtén descuentos exclusivos al realizar compras en las tiendas sponsor y disfruta de entradas para espectáculos, obras de teatro y eventos culturales que se realicen en el club.</p>
                <br>
                <strong>Acceso a áreas exclusivas del club</strong> 
                <p class="beneficios">Disfruta del acceso a áreas exclusivas del club, como el salón de reuniones, pileta y canchas, donde podrás divertirte y disfrutar.</p>
                <br>
                <strong>Participación en eventos y torneos especiales</strong> 
                <p class="beneficios">Tendrás la oportunidad de participar en eventos y torneos especiales organizados por el club en diversas disciplinas deportivas.</p>
                <br>
                <strong>Ofertas especiales en actividades deportivas</strong> 
                <p class="beneficios">Descuentos y promociones exclusivas en actividades como clases de tenis, natación, yoga, pilates, gimnasia aeróbica, entre otras.</p>
            
        </div>
    </div>
        `;
    
        centralBody.innerHTML = "";
        centralBody.innerHTML = textoBeneficiosUsuario;

    }






// Tabla que muestra el estado de las cuotas de un socio loegueado:
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

// Ventana que muestra los beneficios de los socios:
function mostrarBeneficios() {
    const centralBody = document.getElementById("info-container");
    const textoMenuBeneficios = `
    <div class="center">
        <div id="info-container" class="contenedor-informacion">
            <h2 class="titulo-beneficios">Beneficios para socios:</h2>
            
                <strong>Descuentos en tiendas y espectaculos</strong> 
                <h6>Obtén descuentos exclusivos al realizar compras en las tiendas sponsor y disfruta de entradas para espectáculos, obras de teatro y eventos culturales que se realicen en el club.</h6>
                <br>
                <strong>Acceso a áreas exclusivas del club</strong> 
                <h6>Disfruta del acceso a áreas exclusivas del club, como el salón de reuniones, pileta y canchas, donde podrás divertirte y disfrutar.</h6>
                <br>
                <strong>Participación en eventos y torneos especiales</strong> 
                <h6>Tendrás la oportunidad de participar en eventos y torneos especiales organizados por el club en diversas disciplinas deportivas.</h6>
                <br>
                <strong>Ofertas especiales en actividades deportivas</strong> 
                <h6>Descuentos y promociones exclusivas en actividades como clases de tenis, natación, yoga, pilates, gimnasia aeróbica, entre otras.</h6>
                <br>
            
        </div>
    </div>
        
    `;
    centralBody.innerHTML = "";
    centralBody.innerHTML = textoMenuBeneficios;
}

// Ventana de sugerencias para socios logueados:
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
}