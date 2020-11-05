import * as UI from './interfaz.js';

class API{
    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){

        
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => {
                if (resultado.lyrics) {
                    const { lyrics } = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                    UI.formularioBuscar.reset();
                } else {
                    this.limpiarPagina();
                    UI.divMensajes.textContent = 'La canción no existe, prueba otra vez';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();
                         
                    }, 2000);
                }
            }) 
    }

    limpiarPagina(){
        
        UI.divResultado.textContent = '';
        UI.headingResultado.textContent = '';    
    }

}

export default API;