document.getElementById('menu').onclick = () => {
    desplegarMenu();
}

document.getElementById('cruz').onclick = () => {
    ocultarMenu();
}

window.onresize = () => {
    if (window.innerWidth > 600) {
        desplegarMenu();
    } else {
        ocultarMenu();
    }
}

function desplegarMenu() {
    document.getElementById('nav').style.display = 'block';
}

function ocultarMenu() {
    document.getElementById('nav').style.display = 'none';
}