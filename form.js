// Selecciono todos los elementos con name class formulario_input y los almaceno en un array, vector.
var inputs = document.getElementsByClassName('formulario_input');

// Recorro el array de elementos input (Nombre, Apellido, E-mail, Teléfono. Mensaje)
for (var i = 0; i < inputs.length; i++) {
    // Escucha el evento KEYUP y llama a la función cuando se suelte la tecla.
    inputs[i].addEventListener('keyup', function () {
        // Valida que el label contenga texto escrito por el Usuario.
        if (this.value.length >= 1) {
            // Si tiene texto, el Nombre del Label no realiza la transición, quedando fijo sobre la caja del label.
            // con esto se evita que pise el texto ingresado por el Usuario.
            // Llama a la Clase fijar, que se encuentra dentro del .css.
            // Aplica el formato al elemento siguiente de la etiqueta input, osea al label.
            this.nextElementSibling.classList.add('fijar');
        }
        else {
            // Elimina la Clase "fijar" al elemento Label en caso que no tenga txt ingresado por el Usuario.
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}