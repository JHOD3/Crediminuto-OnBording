$(".view-datalle").on('click', function (event) {
    event.preventDefault();
    $(".detalle").toggle();
    $(this).toggle();
})