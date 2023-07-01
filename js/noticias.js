function noticias() {

    const centralBody = document.getElementById("central-body");
    const textoBotonNoticias = `
    <div class="titulo" id="titulo-noticias">
        <div>
            <p> Noticias </p>
        </div>
        <div class="busqueda"> 
            <label> Buscar texto: </label>
            <input type="text" id="searchInput" placeholder="Buscar...">
        </div>
    </div>
    
    <div class="sector-noticia">
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
        <br>
        <br>

        <h3 class="textoH3"> Entrega de Escrituras en la S. F. Mariano Moreno </h3>
        <h5> Se detalló que se entregarán en total 511 escrituras </h5>

        <img class="imgNoticia1" src="../images/noticia2.jpeg"> 
        <p>
        Desde la Dirección de Casa de Tierras y Regularización Dominial se emitió una citación para más 
        de 500 olavarrienses con motivo de una entrega de escrituras que se llevará a cabo este miércoles 
        en la sede de la Sociedad de Fomento Mariano Moreno, con motivo de un acto que se realizará desde 
        Escribanía General de Gobierno de la Provincia de Buenos Aires.

        Se detalló que se entregarán en total 511 escrituras, de las cuales 213 corresponden al Instituto 
        de la Vivienda, mientras que los 298 restantes se enmarcan en la Ley 10.830.
        </p>
        <br>
        <br>

        <h3 class="textoH3"> La S. F. Mariano Moreno trabaja en su nuevo predio </h3>
        <h5> Veyrand se mostró agradecido con las autoridades del Municipio, pilar importante 
        para la concreción de este proyecto. </h5>

        <img class="imgNoticia1" src="../images/noticia3.jpg"> 
        <p>
        Para la gestión municipal que encabeza el intendente Ezequiel Galli es prioritario el acceso 
        igualitario de la comunidad a la cultura, el deporte y a lugares de esparcimiento al aire libre, 
        pilares que configuran una mejor calidad de vida.

        En este contexto, en la mañana de este martes el intendente Ezequiel Galli, junto al secretario 
        de Desarrollo Humano y Calidad de Vida Diego Robbiani, visitaron el predio donde funcionará un 
        centro recreativo que estará a cargo de la Sociedad de Fomento Mariano Moreno. El presidente de la 
        Comisión Directiva de dicha entidad, José Luis Veyrand, también participó de la recorrida, 
        acompañado por demás integrantes de la misma.
        
        La gestión municipal entregó en comodato el terreno a la Sociedad de Fomento para la futura 
        construcción de dicho Centro Recreativo: un predio de siete hectáreas ubicado al fondo de la 
        Av. Ituzaingó, al lado de Talleres Protegidos.
        </p>
    </div>
    `;

    centralBody.innerHTML = "";
    centralBody.innerHTML = textoBotonNoticias;

    const searchInput = document.getElementById('searchInput');
    const contentDiv = document.getElementById('sector');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const paragraphs = contentDiv.getElementsByTagName('p, h3, h5');
      
        for (let i = 0; i < paragraphs.length; i++) {
          const paragraph = paragraphs[i];
          const text = paragraph.innerText.toLowerCase();
          const words = text.split(' ');
      
          for (let j = 0; j < words.length; j++) {
            const word = words[j];
            const span = document.createElement('span');
            
            if (word.includes(searchTerm)) {
              span.className = 'highlight';
            }
            
            span.innerText = word + ' ';
            paragraph.appendChild(span);
          }
        }
        
        scrollToHighlighted();
      });
      
      function scrollToHighlighted() {
        const highlights = document.getElementsByClassName('highlight');
        
        if (highlights.length > 0) {
          highlights[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
}