let form = $('#form-fecha-pago');
form.validate({
    onclick:function (element,e) {
        $(element).valid();
    },
    onfocusout:false,
    rules:{
        'fecha-pago':{
            required:true,
        }
    },
    messages:{
        'fecha-pago':{
            required:icon_warning+ 'Este campo es requerido.',
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

$('select').on('change', function (e) {
    let valor = $(this).val();

    let monthNames = ["01", "02", "03", "04", "05", "06",
        "07", "08", "09", "10", "11", "12"
    ];
    let mes = monthNames[new Date ().getMonth()].substring(0,2);
    let year = new Date().getFullYear();
    let cuotas = "<div class='mt-md-3'>Cuota 01 <span class='text-primary ms-4'>"+valor+"/"+mes+"/"+year+"</span></div><input type='hidden' name='fecha' value='"+valor+"/"+mes+"/"+year+"' >"
    $('#cuotas').html(cuotas);
});