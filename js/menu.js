const nav = document.querySelector('nav');

document.getElementById('menu').onclick = () => {
    desplegarMenu();
}

document.getElementById('cruz').onclick = () => {
    ocultarMenu();
}

nav.addEventListener('click', function() {
    if (window.innerWidth <= 600) {
        ocultarMenu();
    }
});

window.onresize = () => {
    if (window.innerWidth > 600) {
        desplegarMenu();
    } else {
        ocultarMenu();
    }
}

function desplegarMenu() {
    nav.style.display = 'block';
}

function ocultarMenu() {
    nav.style.display = 'none';
}