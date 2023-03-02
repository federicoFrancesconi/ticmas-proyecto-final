//Variable que guarda si esta en modo claro u oscuro. (0 = claro, 1 = oscuro)
let modoActual;

document.getElementById('cambio_modo').onclick = () => {
    cambioModo();
}

window.onload = () => {
    modoActual = localStorage.getItem('modo_actual') || 0;
    modoActual == 0 ? modoClaro() : modoOscuro();
}

/* Cambia de modo oscuro a claro, o viceversa*/
function cambioModo() {
    console.log('Captura el evento, modoActual = ' + modoActual);

    if (modoActual == 0) {
        modoActual = 1;
        modoOscuro();
    } else {
        modoActual = 0;
        modoClaro();
    }
    localStorage.setItem('modo_actual', modoActual)
}

function modoClaro() {
        //Cambio el fondo
        document.body.style.backgroundColor = 'rgb(250, 249, 232)';

        //Cambio el color de fuente de todo a negro
        document.body.style.color = 'black';
    
        //Cambio el fondo del header
        document.getElementById('header').style.backgroundColor = 'rgb(234, 210, 178)';
    
        //Cambio el color de fuente del logo
        document.getElementById('header_logo_nombre').style.color = 'rgb(90, 30, 0)';
    
        cambiarFuenteLinksAncla('brown');
    
        //Cambio los colores del boton
        document.getElementById('ver_cv').style.backgroundColor = 'rgb(244, 170, 91)';
        document.getElementById('ver_cv').style.color = 'black';
    
        //Cambio el borde de la foto
        document.getElementById('foto_perfil').style.borderColor = 'black';
    
        cambiarColorDeLosIconos('black');
        cambiarColorDelFooter('black', 'darkgrey');
        cambiarEstiloBotonModo('white', 'rgba(34, 31, 31, 0.766)', '<i id="icono_luna" class="fa-solid fa-moon"></i>', 'Modo Oscuro');
        cambiarColorSeparadoresSecciones('black');
    
        //Cambio el color de los cuadros para las inputs
        const inputs = document.getElementsByTagName('input');
        
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = 'white';
        }
    
        document.getElementById('mensaje_contacto').style.backgroundColor = 'white';
    
        //Cambio el color del link de github
        document.getElementById('link_github').style.color = 'orange';
}

function modoOscuro() {
    //Cambio el fondo
    document.body.style.backgroundColor = 'black';

    //Cambio el color de fuente de todo a blanco
    document.body.style.color = 'white';

    //Cambio el fondo del header
    document.getElementById('header').style.backgroundColor = '#4d4d4d';

    //Cambio el color de fuente del logo
    document.getElementById('header_logo_nombre').style.color = 'grey';

    cambiarFuenteLinksAncla('white');

    //Cambio los colores del boton
    document.getElementById('ver_cv').style.backgroundColor = 'grey';
    document.getElementById('ver_cv').style.color = '#e3e3e3';

    //Cambio el borde de la foto
    document.getElementById('foto_perfil').style.borderColor = 'grey';

    cambiarColorDeLosIconos('white');
    cambiarColorDelFooter('black', 'darkgrey');
    cambiarEstiloBotonModo('#2f2f30', '#e2dfe8', '<i class="fa-sharp fa-solid fa-sun"></i>', 'Modo Claro');
    cambiarColorSeparadoresSecciones('white');

    //Cambio el color de los cuadros para las inputs
    const inputs = document.getElementsByTagName('input');
    
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = '#bfbfbf';
    }

    document.getElementById('mensaje_contacto').style.backgroundColor = '#bfbfbf';

    //Cambio el color del link de github
    document.getElementById('link_github').style.color = '#a300c4';
}

function cambiarColorSeparadoresSecciones (color) {
    /*Cambio el color de los separadores para cada seccion*/
    const secciones = document.getElementsByTagName('section');

    for(let i = 0; i < secciones.length; i++) {
        secciones[i].style.borderTopColor = color;
    }
}

function cambiarFuenteLinksAncla(color) {
    //Cambio el color de fuente de los links ancla
    const linksAncla = document.querySelectorAll('nav ul li a');
    
    for(let i = 0; i < linksAncla.length; i++) {
        linksAncla[i].style.color = color;
    }
}

function cambiarColorDeLosIconos(color) {
    //Cambio el color de los iconos
    const iconos = document.getElementsByTagName('i');

    for(let i = 0; i < iconos.length; i++) {
        iconos[i].style.color = color;
    }
}

function cambiarColorDelFooter (colorFuente, colorBackground) {
    //Cambio el color del footer
    const footers = document.getElementsByTagName('footer');
    footers[0].style.backgroundColor = colorBackground;
    footers[0].style.color = colorFuente;
}

function cambiarEstiloBotonModo (colorFuente, colorBackground, icono, texto) {
    //Cambio el texto y los colores del boton para cambiar de modo
    let botonCambio = document.getElementById('cambio_modo');
    botonCambio.innerHTML = icono + ' ' + texto;
    botonCambio.style.backgroundColor = colorBackground;
    botonCambio.style.color = colorFuente;
}