// Validacion de campo de numero
let form_item_1 = $("#form-preguntas-seguridad-2");
form_item_1.validate({
    rules:{
        'pregunta-1':{
            required:true
        }
    },
    messages:{
        'pregunta-1':{
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
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).prev().removeClass('text-warning');
    },
    submitHandler: function(form) {

    }
});
$('input').on('keyup change', function (event) {
    if(form_item_1.valid()){
        $('.continuar-btn').removeAttr("disabled");
    }else {
        $('.continuar-btn').attr("disabled", true);
    }
});