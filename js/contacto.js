function contacto() {
    
    const centralBody = document.getElementById("central-body");
    const textoBotonContacto = `
        <div class="titulo">Contacto</div>
        <div class="sector">
            <h3> CONTACTANOS </h3><br>
            <h5> Dirección: </h5>
            <p> Av Sarmiento 3093, Olavarría, Provincia de Buenos Aires </p><br>

            <h5> Teléfono: </h5>
            <p> 02284 41-1682 </p><br>
            
            <h5> Whatsapp: </h5>
            <p> 02284 59-3021 </p> <br>
             
            <p> Mail: </p>
            <p> sfmarianomoreno@gmail.com </p>
        </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonContacto;
}