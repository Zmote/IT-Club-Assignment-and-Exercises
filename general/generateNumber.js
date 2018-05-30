function generateRandomBetween(from, to) {
    return from + (Math.floor(Math.random() * (to - from)));
}

function executeNumberGeneration() {
    let firstNumber = +document.getElementById("firstValue").value;
    let secondNumber = +document.getElementById("secondValue").value;
    document.getElementById('outputId').innerHTML = generateRandomBetween(firstNumber, secondNumber);
}

document.getElementById('generateButton').addEventListener('click', executeNumberGeneration);