function noticias() {

    const centralBody = document.getElementById("central-body");
    const textoBotonNoticias = `
    <div class="titulo">Noticias</div>
    <div class="sector">
        <h3 class="textoH3"> Nueva fecha de Intermedia </h3>
        <h5> En los gimnasios de Racing y Mariano Moreno se completó la doble fecha de vóleibol. </h5>

        <img class="imgNoticia1" src="../images/noticia1.jpg"> 
        <p>
            Este fin de semana la categoría Intermedia también completó otra doble fecha en los gimnasios de Racing y 
            Mariano Moreno y Racing Azul y Estudiantes son líderes completando cuatro fechas. <br>
            <br>
            RESULTADOS <br>
            Barracas 2 – 0 Racing Blanco (25/14 y 25/11)<br>
            Racing Azul 2 – 1 Estudiantes (25/22 23/25 y 15/10)<br>
            Mariano Moreno 2 – 0 Racing Blanco (25/11 y 28/26)<br>
            Mariano Moreno 1 – 2 Independiente Tandil (25/20 17/25 y 10/15)<br>
            Costa Sud 2 – 0 Independiente VAF Rojo (25/20 y 25/19)<br>
            Hinojo 2 – 0 Independiente Tandil (25/13 y 27/25)<br>
            Costa Sud 2 – 0 Independiente VAF Negro (25/16 y 25/18)<br>
            Municipalidad Benito Juárez 2 – 1 Independiente VAF Negro (23/25 25/16 y 15/6)
        </p>
    </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonNoticias;
}