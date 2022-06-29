// Validacion de campo de numero
$("#form-enrolar-equipo").validate({
    rules:{
        'imei':{
            required:true
        },
        'sincad':{
            required:true
        },
        'number_phone':{
            required:true
        }
    },
    messages:{
        'imei':{
            required:'Este campo es requerido.',
        },
        'sincad':{
            required:icon_warning+ 'Este campo es requerido.',
        },
        'number_phone':{
            required:icon_warning+ 'Este campo es requerido.',
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
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $('.continuar-btn').removeAttr("disabled");
        $(element).prev().removeClass('text-warning');
    },
    submitHandler: function(form) {

    }
});
