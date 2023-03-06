//Simplemente muestro un mensaje cuando el usuario completa el form correctamente y lo envia.
const form = document.querySelector('form');

form.onsubmit = () => {
    console.log('Evento capturado')
    alert("Gracias por comunicarse!");
};