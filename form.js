var inputs = document.getElementsByClassName('formulario_input');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        // Valida que el label contenga texto escrito por el Usuario.
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        }
        else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}