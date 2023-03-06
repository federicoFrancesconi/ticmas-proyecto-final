const nav = document.querySelector('nav');
const iconoMenu = document.querySelector('#icono_menu');
const iconoCruz = document.querySelector('#icono_cruz');

document.getElementById('menu').onclick = () => {
    desplegarMenu();
}

document.getElementById('cruz').onclick = () => {
    ocultarMenu();
}

//Al tocar cualquier parte del nav se cierra el menu,
//pero solo debe ocurrir cuando la pantalla es menor a 992px de ancho,
//es decir, cuando el nav se accede mediante menu y no esta visible en el header.
nav.addEventListener('click', function() {
    if (window.innerWidth <= 992) {
        ocultarMenu();
    }
});

/*Cuando la pantalla es muy pequeña, los iconos se ven pequeños,
y al agrandarse, los iconos cambian de tamaño.
Esto no puede lograrse mediante CSS, sino que hay que modificar la clase
del elemento icono con JavaScript*/
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