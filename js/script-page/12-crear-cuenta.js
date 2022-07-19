// Validacion de campo de numero
let form = $("#form-crear-cuenta");
form.validate({
    onkeyup:function (element,e) {
        if (e.keyCode == 8){
            $(element).valid();
        }
        if($(element).val().length > 4) {
            $(element).valid();
        }

        let val = true;
        $('input').each(function (index, element) {
            if ($(element).val()==''){
                val = false;
            }
        });
        if (val == false){
            $('.continuar-btn').attr("disabled",true);
        }else{
            $('.continuar-btn').removeAttr("disabled");
        }
    },
    onfocusout:false,
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
;
