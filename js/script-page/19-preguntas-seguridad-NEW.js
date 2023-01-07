// Validacion de campo de numero
let form_item_1 = $("#form-preguntas-seguridad-1");
form_item_1.validate({
    onfocusout:false,
    rules:{
        'pregunta1':{
            required:true
        },
        'pregunta2':{
            required:true
        },
        'pregunta3':{
            required:true
        },
        'pregunta3':{
            required:true
        }
    },
    messages:{
        'pregunta1':{
            required:icon_warning+ 'Este campo es requerido.'
        },
        'pregunta2':{
            required:icon_warning+ 'Este campo es requerido.'
        },
        'pregunta3':{
            required:icon_warning+ 'Este campo es requerido.'
        },
        'pregunta4':{
            required:icon_warning+ 'Este campo es requerido.'
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
        //$('.continuar-btn').attr("disabled", true);
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).prev().removeClass('text-warning');
        //$('.continuar-btn').removeAttr("disabled");
    },
    submitHandler: function(form) {

    }
});

$('select').on('change', function() {
    let disabled = true;
   $('select').each(function(index, element) {
       if ($(element).val().length == 0) {
           disabled = false;
       }
   });
    if (disabled) {
        $('.continuar-btn').removeAttr("disabled");
    }else{
        $('.continuar-btn').attr("disabled", true);
    }
});