// Validacion de campo de numero
let form = $("#form-tipo-credito");
form.validate({
    rules:{
        'tipo-credito':{
            required:true
        }
    },
    messages:{
        'emtipo-creditoail':{
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
        $('.continuar-btn').attr("disabled", true);
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).prev().removeClass('text-warning');
        $('.continuar-btn').removeAttr("disabled");
    },
    submitHandler: function(form) {

    }
});
$('input').on('keyup change', function (event) {
    if(form.valid()){
    }else {
    }
});