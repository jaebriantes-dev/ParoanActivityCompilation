var images = [
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "7.JPG",
    "8.JPG"
];

var num = 0;

// Nilagyan ko lang po nito Sir para po alam po kung ano pong number na ng image
function updateSlider() {
    var slider = document.getElementById("slider");
    var counter = document.getElementById("Count");

    slider.src = images[num];
    counter.textContent = "Image " + (num + 1) + " of " + images.length;
}

function next() {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    updateSlider();
}

function prev() {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    updateSlider();
}

updateSlider();
