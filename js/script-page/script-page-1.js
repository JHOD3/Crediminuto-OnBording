// Validacion de campo de numero    
$("#form-page-register").validate({
    rules:{
        'tel-number':{
            required:true,
            phoneUS:true,
            pattern: '[0-9]*'
        },
        'term':{
            required:true
        },
        'policy':{
            required:true
        },
        'policy-dato':{
            required:true
        }
    },
    messages:{
        'tel-number':{
            required:'Este campo es requerido.',
            phoneUS:icon_warning+ 'Debe tener un formato valido.',
            pattern: 'Formato Invalido'
        },
        'term':{
            required:icon_warning+ 'Este campo es requerido.',
        },
        'policy':{
            required:icon_warning+ 'Este campo es requerido.',
        },
        'policy-dato':{
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
