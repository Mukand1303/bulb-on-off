const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');
let isBulbOn = false;

toggleButton.addEventListener('click', function () {
    if (isBulbOn) {
        bulb.src = 'https://www.citypng.com/public/uploads/preview/hd-real-bulb-on-off-png-31626306186eqrwchqohg.png';
        isBulbOn = false;
    } else {
        bulb.src = 'https://www.transparentpng.com/thumb/light-bulb/ZUhahL-light-bulb-free-download-transparent.png';
        isBulbOn = true;
    }
});