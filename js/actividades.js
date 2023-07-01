function actividades() {

    const centralBody = document.getElementById("central-body");
    const textoBotonActividades = `         
    <div class="box_actividad">

    <div class="titulo" "box_actividad">Actividades</div>
        <div class="sector">
            
            <button onclick="acrobacia()"><img src="images/actividades/acrobacia.jpg" alt="" class="image_actividad"></button>


            <a href="actividades/acrobacia.js">
                <img src="images/actividades/acrobacia.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/ajedrez.html">
                <img src="images/actividades/ajedrez.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/badminton.html">
                <img src="images/actividades/badminton.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/baileGym.html">
                <img src="images/actividades/baileGym.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/basquet.html">
                <img src="images/actividades/basquet.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/deportiva.html">
                <img src="images/actividades/deportiva.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/folklore.html">
                <img src="images/actividades/folklore.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/gymAdultos.html">
                <img src="images/actividades/gymAdultos.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/infantil.html">
                <img src="images/actividades/infantil.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/taekwondo.html">
                <img src="images/actividades/taekwondo.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/voley.html">
                <img src="images/actividades/voley.jpg" alt="" class="image_actividad"></a>
            <a href="actividades/zumba.html">
                <img src="images/actividades/zumba.jpg" alt="" class="image_actividad"></a>

        </div>    
    </div>`;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonActividades;
}

function acrobacia() {

    const centralBody = document.getElementById("central-body");
    const textoBotonAcrobacia = `
    <div class = "box_actividad" >
        <div class = "image_actividad_container" >
            <img src = "../images/actividades/acrobacia.jpg" alt = "" >
        </div>
    
    </div>`;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonAcrobacia;
}