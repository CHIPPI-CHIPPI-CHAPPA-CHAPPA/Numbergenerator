document.addEventListener("DOMContentLoaded", function() {
    const min = 1;
    const max = 1037;
    const button = document.getElementById("btn");
    const text = document.getElementById("headerh1");

    let rando;

    button.onclick = function() {
        rando = Math.floor(Math.random() * max) + min;
        text.textContent = rando;
    };
});
