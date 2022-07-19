// Validacion de campo de numero
let form = $("#form-monto-accesorio");
form.validate({
    onkeyup:function (element,e) {
        let digit = 3;

        if ($(element).val().length > digit) {
            $(element).valid();
        }
    },
    rules:{
        'monto':{
            required:true,
            minlength:3
        }
    },
    messages:{
        'monto':{
            required:icon_warning+ 'Este campo es requerido.',
            minlength:icon_warning+ 'Debe tener al menos {0} digitos'
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
        $('.continuar-btn').attr("disabled",true);
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid').addClass('is-valid');
        $(element).prev().removeClass('text-warning');
        $('.continuar-btn').removeAttr("disabled");
    },
    submitHandler: function(form) {

    }
});
