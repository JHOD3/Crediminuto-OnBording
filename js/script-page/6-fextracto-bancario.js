

$.validator.setDefaults({
    ignore: [],
    // any other default options and/or rules
});
let form = $("#upload-estracto");
form.validate({
    rules:{
        'estracto':{
            required:true,
            extension: "png|jpg|pdf"
        }
    },
    messages:{
        'estracto':{
            required:icon_warning+'Este campo es requerido.',
            extension: icon_warning+'El archivo debe ser png, jpg o pdf'
        }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback ps-3 aling-items-center d-flex mt-10-px-md mt-10-px');
        if (element.attr('type') != 'file') {
            element.closest('.form-group').append(error);
            $(element).parent().append(error);
            $(element).prev().addClass('text-warning');
        }else{
            $('#capture-preview').next().append(error);
        }
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


const imgInput = document.getElementById('capture-camera');
const imgEl = document.getElementById('capture-preview');
imgInput.addEventListener('change', () => {
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imgEl.src = e.target.result;
        }
        $('#capture-preview').removeClass('d-none');
        reader.readAsDataURL(imgInput.files[0]);
        $('#btn-option').removeClass('d-none');

    }
});

