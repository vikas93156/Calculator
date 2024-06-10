function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let currentDisplay = document.getElementById("result").value;
    document.getElementById("result").value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    let currentDisplay = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(currentDisplay);
    } catch {
        document.getElementById("result").value = "Error";
    }
}
