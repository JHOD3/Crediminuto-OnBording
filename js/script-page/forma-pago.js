$('input[name="frecuencia"]').on('change', function (event) {
   $('.plazo').toggle();
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
