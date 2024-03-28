function getRandomColor() {
    const colors = ['red', 'green'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function predictColor(prediction) {
    const colorBox = document.getElementById('colorBox');
    const resultMessage = document.getElementById('result');

    // Generate a random color for the box
    const actualColor = getRandomColor();

    // Update the color box
    colorBox.style.backgroundColor = actualColor;

    // Check if the prediction matches the actual color
    if (prediction === actualColor) {
        resultMessage.textContent = alert("You Win!");
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = alert("You Loss. Try Again!");
        resultMessage.style.color = 'red';
    }
}