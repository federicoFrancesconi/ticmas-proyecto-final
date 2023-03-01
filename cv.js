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
    document.body.style.backgroundColor = 'black';
    document.getElementById('header').style.backgroundColor
    document.getElementById('header_logo_nombre').style.backgroundColor = 'black';
    document.getElements.style.backgroundColor = 'black';
    document.getElementById('ver_cv').style.backgroundColor = 'black';
    document.getElementById('ver_cv').style.color = 'black';
    document.getElementById('foto_perfil').style.border = 'black';
    document.getElementsByTagName('i').style.color = 'black';
    document.getElementsByTagName('footer').style.backgroundColor = 'black';
    document.getElementsByTagName('section').style.borderTop = 'black';
}

function modoClaro() {
    document.body.style.backgroundColor = rgb(250, 249, 232);
    document.getElementById('header').style.backgroundColor = rgb(234, 210, 178);
    document.getElementById('header_logo_nombre').style.backgroundColor = rgb(90, 30, 0);
    document.getElementById('ver_cv').style.backgroundColor = rgb(244, 170, 91);
    document.getElementById('ver_cv').style.color = 'black';
    document.getElementById('foto_perfil').style.border = '3px solid rgb(90, 30, 0)';
    document.getElementsByTagName('i').style.color = 'black';
    document.getElementsByTagName('footer').style.backgroundColor = 'darkgrey';
    //document.getElementsByTagName('section').style.borderTop = '2px black solid';
}