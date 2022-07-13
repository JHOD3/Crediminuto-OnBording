// Validacion de campo de numero
let form = $("#form-envio-sms");
form.validate({
    rules:{
        'phone':{
            required:true,
            minlength: 10
        }
    },
    messages:{
        'phone':{
            required:icon_warning+' Este campo es requerido.',
            minlength:icon_warning+'Minimo 10 digitos.'
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
        $(element).prev().addClass('text-warning');
        $('#check-code').addClass('d-none');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).prev().removeClass('text-warning');
        if ($("#form-validate-code").validate()){
            // Vefico que el codigo existe mediante una funcion para colocar el check verde
            $('#check-code').removeClass('d-none'); //Hago visible el check verde si el codigo insertado fue el enviado. esto debe estar dentro del done de la funciona que verifica el codigoqw
        }

    },
    submitHandler: function(form) {

    }
});
$('input').on('keyup change', function (event) {
    if(form.valid()){
        $('.continuar-btn').removeAttr("disabled");
    }else {
        $('.continuar-btn').attr("disabled", true);
    }
});