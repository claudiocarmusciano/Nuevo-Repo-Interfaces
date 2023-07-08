// Galería de imágenes varias 

function galeria() {
    
    const centralBody = document.getElementById("central-body");
    const textoBotonGaleria = `
    <div class="titulo">Galería de fotos</div>
    <div class="sector-galeria">
        <div class="images">
            <img src="images/galeria/img01.jpg" alt="">
            <img src="images/galeria/img02.jpg" alt="">
            <img src="images/galeria/img03.jpg" alt="">
            <img src="images/galeria/img04.jpg" alt="">
            <img src="images/galeria/img05.jpg" alt="">
            <img src="images/galeria/img06.jpg" alt="">
            <img src="images/galeria/img07.jpg" alt="">
            <img src="images/galeria/img08.jpg" alt="">
            <img src="images/galeria/img09.jpg" alt="">
            <img src="images/galeria/img10.jpg" alt="">
        </div>
    </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonGaleria;

    centralBody.classList.remove("home-section");

}