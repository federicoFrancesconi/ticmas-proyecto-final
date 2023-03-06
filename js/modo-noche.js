const body = document.querySelector('body');
const boton = document.querySelector('#boton_cambio_modo');

const textoBotonClaro = '<i id="sol" class="fa-sharp fa-solid fa-sun"></i> Modo Claro';
const textoBotonOscuro = '<i id="luna" class="fa-solid fa-moon"></i> Modo Oscuro';

let estado;

boton.addEventListener('click', function() {
    //Si la clase estaba agregada la quito, y si no lo estaba la agrego
    body.classList.toggle('darkmode');

    //Guardo el estado actual en una constante
    const estado = body.classList.contains('darkmode');

    //Tambien lo guardo en localstorage
    localStorage.setItem('modo', estado);

    //Hago el cambio del texto del boton que no me permite CSS
    boton.innerHTML = estado ? textoBotonClaro : textoBotonOscuro;
});

//Cada vez que cargue la pagina, buscara el modo almacenado en localStorage,
//y agregara los estilos de dicho modo a la pagina.
window.onload = () => {
    let modoActual = localStorage.getItem('modo') || 0;
    
    if (modoActual == 'true') {
        body.classList.add('darkmode');
        boton.innerHTML = textoBotonClaro;
    }

    body.classList.remove('hidden');
}