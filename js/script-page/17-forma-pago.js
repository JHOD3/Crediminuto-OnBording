$('input[name="frecuencia"]').on('change', function (event) {
   if($(this).val() == 'quincenal'){
      $('#' + $(this).val()).css('display', 'block');
      $('#mensual').css('display', 'none');
   }else{
      $('#' + $(this).val()).css('display', 'block');
      $('#quincenal').css('display', 'none');
   }
});
let myModal = new bootstrap.Modal(document.getElementById("modalProcesandoSolicitud"), {});
let intervalId = null;
let varCounter = 0;
$('.continuar-btn').on('click', function (event) {
   event.preventDefault();
   myModal.show();
   varCounter = 0;
   intervalId = setInterval(progresEfect, 50);
});


let  progresEfect = () => {
   if(varCounter <= 100) {
      varCounter++;
      $('#progressBar').css('width',varCounter+'%');
   }else{
      clearInterval(intervalId);
      myModal.hide();
   }
}

// Validacion de campo de numero
let form = $("#form-forma-pago");
form.validate({
   rules:{
      'frecuencia':{
         required:true
      },
      'plazo':{
         required:true
      }
   },
   messages:{
      'frecuencia':{
         required:icon_warning+ 'Este campo es requerido.'
      },
      'plazo':{
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
   },
   unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
      $(element).prev().removeClass('text-warning');
   },
   submitHandler: function(form) {

   }
});
$('input').on('change', function (event){
   let estado = [];
   $('input').each(function(index, element) {
      if (this.value == ''){
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