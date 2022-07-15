
const imgInput = document.getElementById('capture-camera');
const imgEl = document.getElementById('capture-preview');
imgInput.addEventListener('change', () => {
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader()
        var extension = imgInput.files[0].name.split('.').pop().toLowerCase();
        reader.onload = (e) => {
            if (extension == 'png' || extension == 'jpg') {
                $('#pdf-name').addClass('d-none');
                $('#capture-preview').removeClass('d-none');
                imgEl.src = e.target.result;
            }
            if(extension == 'pdf'){
                $('#pdf-name').removeClass('d-none');
                $('#capture-preview').addClass('d-none');
                $('#pdf-name').text(imgInput.files[0].name);
            }
        }
        $('#capture-preview').removeClass('d-none');
        reader.readAsDataURL(imgInput.files[0]);
        $('#btn-option').removeClass('d-none');
        $('#btn-submit').removeAttr('disabled');

    }
});


