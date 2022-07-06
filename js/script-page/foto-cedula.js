
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
        $('#btn-submit').removeClass('d-none');
        $('#btn-validate').addClass('d-none');

        // A modo de ejemplo, mustro error de imagen invalidad
        if ($('#foto_invalida')) {
            $('#foto_invalida').removeClass('d-none');
        }
    }
});

