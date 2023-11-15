let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

//I did some online research and browsing for this fonction
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

//I did some online research and browsing for this fonction
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
