var volume = document.querySelector('#volume');
volume.addEventListener('change', function(e){
    volume = e.currentTarget.value / 100;
});