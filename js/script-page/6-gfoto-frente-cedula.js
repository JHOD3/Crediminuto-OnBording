
$(document).ready(function(){
    $.validator.setDefaults({
        ignore: []
    });
});
let form = $("#upload-frente-cedula");
form.validate({
    ignore: [],
    onfocusout:false,
    rules:{
        'frente-cedula':{
            required:true,
            extension: "png|jpg|pdf"
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
        'frente-cedula':{
            required:icon_warning+'Este campo es requerido.',
            extension: icon_warning+'El archivo debe ser png, jpg o pdf'
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


const imgInput = document.getElementById('capture-camera');
const imgEl = document.getElementById('capture-preview');
imgInput.addEventListener('change', () => {
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        var extension = imgInput.files[0].name.split('.').pop().toLowerCase();
        reader.onload = (e) => {
            if (extension == 'png' || extension == 'jpg') {
                $('#pdf-name').addClass('d-none');
                $('#capture-preview').removeClass('d-none');
                imgEl.src = e.target.result;
                $('#capture-preview').removeClass('d-none');
                $('#btn-option').removeClass('d-none');
            }
            if(extension == 'pdf'){
                $('#pdf-name').removeClass('d-none');
                $('#capture-preview').addClass('d-none');
                $('#pdf-name').text(imgInput.files[0].name);
                $('#capture-preview').removeClass('d-none');
                $('#btn-option').removeClass('d-none');
            }
        }
        reader.readAsDataURL(imgInput.files[0]);
    }
});

$('input').on('change', function (event) {
   let error = form.valid();
   if(error ==false){
       $('.continuar-btn').attr("disabled", true);
   }
});