function contacto() {
    
    const centralBody = document.getElementById("central-body");
    const textoBotonContacto = `
        <div class="titulo">Contacto</div>
        <div class="sector-contacto">
            <div class="textos-sector-contacto">
                <h2 class="textoH3"> CONTACTANOS </h2><br>
                <h4> Dirección: </h4>
                <p> Av Sarmiento 3093, Olavarría, Provincia de Buenos Aires </p><br>

                <h4> Teléfono: </h4>
                <p> 02284 41-1682 </p><br>
                
                <h4> Whatsapp: </h4>
                <p> 02284 59-3021 </p> <br>
                
                <h4> Mail: </h4>
                <p> sfmarianomoreno@gmail.com </p>
            </div>
        </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonContacto;
}