function validarForm() {
    let nombre = obtenerValorInput('nombre_contacto');
    let telefono = obtenerValorInput('telefono_contacto');
    let mail = obtenerValorInput('mail_contacto');
    let mensaje = obtenerValorInput('mensaje_contacto');
    
    if (noHayCamposVacios(nombre, telefono, mail, mensaje)) {
        alert("Gracias por comunicarse!");
    } else {
        alert("Complete los campos vacios");
    }
}

function obtenerValorInput (idInput) {
    return document.getElementById(idInput).value;
}

function noHayCamposVacios (nombre, telefono, mail, mensaje) {
    return nombre != '' && telefono != '' && mail != '' && mensaje != '';
}