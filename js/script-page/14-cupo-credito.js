// Validacion de campo de numero
let form = $("#form-cupo-credito");
form.validate({
    onkeyup:function (element,e) {
        if (e.keyCode == 8){
            $(element).valid();
        }
        let digit = 8;
        if ($(element).val().length >= digit) {
            $(element).valid();
        }
    },
    rules:{
        'codigo':{
            minlength:8,
            required:true
        }
    },
    messages:{
        'codigo':{
            minlength:icon_warning+ 'Minimo {0} caracteres.',
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
        $(element).addClass('is-invalid').removeClass('is-valid');
        $(element).prev().addClass('text-warning');
        $('.continuar-btn').attr("disabled", true);
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid').addClass('is-valid');
        $(element).prev().removeClass('text-warning');
        $('.continuar-btn').removeAttr("disabled");
    },
    submitHandler: function(form) {

    }
});
