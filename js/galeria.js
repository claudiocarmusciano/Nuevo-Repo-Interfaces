function galeria() {
    
    const centralBody = document.getElementById("central-body");
    const textoBotonGaleria = `
    <div class="titulo">Galería de fotos</div>
    <div class="sector">
        <div class="images">
            <img src="images/galeria/img01.jpg" alt="">
  
        </div>
    </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonGaleria;
}