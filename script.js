// Array of 30 colors to toggle through
const colors = [
    'blue', 'yellow', 'gold', 'green', 'orange', 'red', 'black', 'purple', 'white', 
    'pink', 'cyan', 'magenta', 'lime', 'maroon', 'navy', 'olive', 'teal', 'aqua', 
    'coral', 'fuchsia', 'indigo', 'khaki', 'lavender', 'plum', 'salmon', 'sienna', 
    'silver', 'tan', 'tomato', 'violet'
];

// Select the button and color name element
const toggleColorBtn = document.getElementById('toggle-color-btn');
const colorName = document.createElement('div');
colorName.id = 'color-name';
document.querySelector('.container').appendChild(colorName);

// Function to get a random color from the array
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Function to play a sound
function playSound() {
    const audio = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3');
    audio.play();
}

// Function to toggle the background color
function toggleColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorName.textContent = `Current Color: ${randomColor}`;
    colorName.style.opacity = 1;

    playSound();
}

// Event listener for the button click
toggleColorBtn.addEventListener('click', toggleColor);
