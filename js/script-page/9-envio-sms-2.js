// Validacion de campo de numero
let form = $("#form-validate-code");
form.validate({
    onkeyup:function (element) {
        $(element).valid();
    },
    focusInvalid: function (element) {
        console.log(element)
    },
    onfocusout: false,
    rules:{
        'code_1':{
            required:true
        },
        'code_2':{
            required:true
        },
        'code_3':{
            required:true
        },
        'code_4':{
            required:true
        }
    },
    messages:{
        'code_1':{
            required:icon_warning+'Todos los campos son requeridos',
            maxlength: icon_warning+'Maximo un digito.'
        },
        'code_2':{
            required:icon_warning+'Todos los campos son requeridos',
            maxlength: icon_warning+'Maximo un digito.'
        },
        'code_3':{
            required:icon_warning+'Todos los campos son requeridos',
            maxlength: icon_warning+'Maximo un digito.'
        },
        'code_4':{
            required:icon_warning+'Todos los campos son requeridos',
            maxlength: icon_warning+'Maximo un digito.'
        }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback pl-16-px-md pl-10-px aling-items-center d-flex mt-10-px-md mt-10-px');
        $('#error').html(error);

    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
        $(element).prev().addClass('text-warning');

        $('#check-code').addClass('d-none');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).prev().removeClass('text-warning');


     },
    submitHandler: function(form) {

    }
});

$('input[type="text"]').on('keyup', function (event){
    let estado = [];
    $('input[type="text"]').each(function(index, element) {
       if (this.value == ''){
           estado[index] = false;
       }
    });
    if (jQuery.inArray(false, estado) == -1){
        $('.continuar-btn').removeAttr("disabled");
        $('#check-code').removeClass('d-none');
        return true;
    }
    $('.continuar-btn').attr("disabled", true);
    $('#check-code').addClass('d-none');
    return false;
});


countBack();

$('#resend-code').on('click', function (event) {
    event.preventDefault();
    // Ejecutar funcion que se encargue de renovar el codigo en el backend


    countBack(); //Reiniciomos el cod
});

function countBack() {
    var fiveSeconds = new Date().getTime() + 59000;
    $('#time-code').countdown(fiveSeconds, {elapse: true})
    .on('update.countdown', function(event) {
        var $this = $(this);
        if (!event.elapsed) {
            $this.html(event.strftime('<span>El código enviado vence en: %M:%S</span>'));
        }

        if (event.offset.seconds == 0){
            // EL TIEMPO TERMINO LLAMAR A FUNCIONA PARA VALIDAR QUE TERMINO EL TIEMPO CON EL BACKEND
            $('#time-code').countdown('stop');
            $('#resend-code').removeAttr('disabled'); // Habilitamos el boton de reenviar codigo
        }
    });
}