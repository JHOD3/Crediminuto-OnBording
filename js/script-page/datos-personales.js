// Validacion de campo de numero
$("#form-datos-personales").validate({
    rules:{
        'name':{
            required:true
        },
        'last_name':{
            required:true
        },
        'document':{
            required:true
        }
    },
    messages:{
        'name':{
            required:icon_warning+ 'Este campo es requerido.'
        },
        'last_name':{
            required:icon_warning+ 'Este campo es requerido.',
        },
        'document':{
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
