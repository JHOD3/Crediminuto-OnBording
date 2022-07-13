
// Validacion de campo de numero
let form = $("#form-datos-contacto");
form.validate({
    rules:{
        'celular1':{
            required:true,
            unique:true
        },
        'email':{
            required:true,
            email: true
        }

    },
    messages:{
        'cedular1':{
            required:icon_warning+ 'Este campo es requerido.',
            unique: icon_warning+ 'Este campo debe ser unico.',
        },
        'email':{
            email:icon_warning+ 'Debe tener formato de email'
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

$('input').on('keyup', function (event){
    let estado = [];
    $('input').each(function(index, element) {
        if (this.value == '' && $(this).attr('name') != 'celular2' && $(this).attr('name') != 'email'){
            estado[index] = false;
        }
    });
    if (jQuery.inArray(false, estado) == -1){
        $('.continuar-btn').removeAttr("disabled");
        return true;
    }
    $('.continuar-btn').attr("disabled", true);
    return false;
});