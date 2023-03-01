var modoActual = 0;

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

    //Cambio el color de fuente de los links ancla
    const linksAncla = document.querySelectorAll('nav ul li a');
    
    for(let i = 0; i < linksAncla.length; i++) {
        linksAncla[i].style.color = 'white';
    }

    //Cambio los colores del boton
    document.getElementById('ver_cv').style.backgroundColor = 'grey';
    document.getElementById('ver_cv').style.color = '#e3e3e3';

    //Cambio el borde de la foto
    document.getElementById('foto_perfil').style.borderColor = 'grey';

    //Cambio el color de los iconos
    const iconos = document.getElementsByTagName('i');
    for(let i = 0; i < iconos.length; i++) {
        iconos[i].style.color = 'white';
    }
    
    //Cambio el color del footer
    const footers = document.getElementsByTagName('footer');
    footers[0].style.backgroundColor = 'dark_grey';
    footers[0].style.color = 'black';

    /*Cambio el color de los separadores para cada seccion*/
    const secciones = document.getElementsByTagName('section');

    for(let i = 0; i < secciones.length; i++) {
        secciones[i].style.borderTopColor = 'white';
    }

    //Cambio el color de los cuadros para las inputs
    const inputs = document.getElementsByTagName('input');
    
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = '#bfbfbf';
    }

    document.getElementById('mensaje_contacto').style.backgroundColor = '#bfbfbf';

    //Cambio el color del link de github
    document.getElementById('link_github').style.color = '#a300c4';

    //Cambio el texto y los colores del boton para cambiar de modo
    let botonCambio = document.getElementById('cambio_modo');
    botonCambio.innerHTML = '<i class="fa-sharp fa-solid fa-sun"></i> Modo Claro';
    botonCambio.style.backgroundColor = '#e2dfe8';
    botonCambio.style.color = '#2f2f30';
}

function modoClaro() {
    //Una opcion es recargar la pagina, pero se borra el contenido de los input.
    window.location.reload();
}