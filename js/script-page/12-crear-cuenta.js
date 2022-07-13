// Validacion de campo de numero
let form = $("#form-crear-cuenta");
form.validate({
    rules:{
        'usuario':{
            required:true
        },
        'password':{
            required:true
        },
        'password_confirm':{
            required:true,
            equalTo:'#password'
        },
        'email':{
            required:true,
            email: true
        }
    },
    messages:{
        'name':{
            required:icon_warning+ 'Este campo es requerido.'
        },
        'password':{
            required:icon_warning+ 'Este campo es requerido.',
        },
        'password_confirm':{
            required:icon_warning+ 'Este campo es requerido.',
            equalTo : icon_warning+ 'Las contraseñas no coinciden.'
        },
        'email':{
            required:icon_warning+ 'Este campo es requerido.',
            email: icon_warning+ 'Debe ser un email valido.'
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
    if(form.valid()){
        $('.continuar-btn').removeAttr("disabled");
    }else {
        $('.continuar-btn').attr("disabled", true);
    }
});