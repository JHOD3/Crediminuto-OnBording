$('#descargar').on('click', function (event) {
    event.preventDefault();
    // Aqui hacer el llamado mediante ajax al backed para buscar el archivo a descargar en storage
    // Despues de eso se habilita el boton continuar con esta linea de abajo
    $('.continuar-btn').removeAttr("disabled");
})