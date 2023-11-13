function tempConvert() {
    var input = document.getElementById('temp');
    var output = document.getElementById('res');
    var temp = parseInt(input.value);

    if (!isNaN(temp)) {
        if (input.placeholder.toLowerCase() === "celsius") {
            output.value = "=" + ((temp * 1.8) + 32);
        } else {
            output.value = "=" + ((temp - 32) * 5 / 9);
        }
    } else {
        output.value = "Invalid input";
    }
}

function swapPlaceholders() {
    var input = document.getElementById('temp');
    var output = document.getElementById('res');

    input.value = "";
    output.value = "";

    if (input.placeholder.toLowerCase() === "celsius") {
        input.setAttribute('placeholder', 'Fahrenheit');
        output.setAttribute('placeholder', 'Celsius');
    } else {
        input.setAttribute('placeholder', 'Celsius');
        output.setAttribute('placeholder', 'Fahrenheit');
    }
}