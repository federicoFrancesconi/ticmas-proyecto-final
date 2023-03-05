const nav = document.querySelector('nav');
const iconoMenu = document.querySelector('#icono_menu');
const iconoCruz = document.querySelector('#icono_cruz');

document.getElementById('menu').onclick = () => {
    desplegarMenu();
}

document.getElementById('cruz').onclick = () => {
    ocultarMenu();
}

nav.addEventListener('click', function() {
    if (window.innerWidth <= 992) {
        ocultarMenu();
    }
});

window.onresize = () => {
    if (window.innerWidth > 992) {
        desplegarMenu();
    } else {
        //Agrando el icono del menu entre 992 y 768
        if (window.innerWidth > 768) {
            iconoMenu.classList.add('fa-2x');
            iconoCruz.classList.add('fa-2x');
        } else {
            iconoMenu.classList.remove('fa-2x');
            iconoCruz.classList.remove('fa-2x');
        }
        ocultarMenu();
    }
}

function desplegarMenu() {
    nav.style.display = 'block';
}

function ocultarMenu() {
    nav.style.display = 'none';
}