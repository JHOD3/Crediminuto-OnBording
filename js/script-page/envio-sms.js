// Validacion de campo de numero
$("#form-validate-code").validate({
    rules:{
        'code_1':{
            required:true,
            maxlength: 1
        },
        'code_2':{
            required:true,
            maxlength: 1
        },
        'code_3':{
            required:true,
            maxlength: 1
        },
        'code_4':{
            required:true,
            maxlength: 1
        }
    },
    messages:{
        'code_1':{
            required:'',
            maxlength: ''
        },
        'code_2':{
            required:'',
            maxlength: ''
        },
        'code_3':{
            required:'',
            maxlength: ''
        },
        'code_4':{
            required:'',
            maxlength: ''
        }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback pl-16-px-md pl-10-px aling-items-center d-flex mt-10-px-md mt-10-px');
        element.closest('.form-group').append(error);
        $(element).parent().append(error);
        $(element).prev().addClass('text-warning');
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
        $('.continuar-btn').prop("disabled", true);
        $(element).prev().addClass('text-warning');
        $('#check-code').addClass('d-none');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $('.continuar-btn').removeAttr("disabled");
        $(element).prev().removeClass('text-warning');
        if ($("#form-validate-code").validate()){
            // Vefico que el codigo existe mediante una funcion para colocar el check verde
            $('#check-code').removeClass('d-none'); //Hago visible el check verde si el codigo insertado fue el enviado. esto debe estar dentro del done de la funciona que verifica el codigoqw
        }

    },
    submitHandler: function(form) {

    }
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
        }
    });
}