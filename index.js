document.addEventListener("DOMContentLoaded", function() {
    const min = 1;
    const max = 1045;
    const button = document.getElementById("btn");
    const text = document.getElementById("headerh1");
    const text2 = document.getElementById("headerh2");

    let rando;

    button.onclick = function() {
        rando = Math.floor(Math.random() * max) + min;
        text.textContent = rando;
        console.log("Random Number Generated:", rando);
        taylorswift();
    };

    function taylorswift() {
        console.log("Text Content:", '"' + text.textContent + '"');
        console.log("Parsed Int:", parseInt(text.textContent, 10));

        // Use loose equality (==) to handle type conversion
        if (text.textContent == "13") {
            text2.textContent = "TAYLOR SWIFT";
        } else {
            text2.textContent = ""; // Clear the text if it's not 13
        }
    }
});
