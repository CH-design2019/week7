// script.js
// Demonstrates scope, parameters, return values, and animation triggers

// Global scope variable
let isAnimating = false;

// Function with parameter and return value
function calculateSquare(num) {
  // Local scope variable inside function
  let square = num * num;
  return square; // Returning result
}

// Function to trigger animation on the box
function startAnimation() {
  const box = document.getElementById('box');

  if (isAnimating) return; // Prevent multiple clicks during animation

  isAnimating = true;
  // Apply keyframe animation for 2 seconds
  box.style.animation = 'moveAndColor 2s ease-in-out';

  // When animation ends, reset styles and flag
  box.addEventListener('animationend', () => {
    box.style.animation = '';
    isAnimating = false;
  }, { once: true });
}

// Event listener for animation button
document.getElementById('startAnimationBtn').addEventListener('click', startAnimation);

// Event listener for calculation button that shows returned value
document.getElementById('calcBtn').addEventListener('click', () => {
  // Prompt user for input
  const input = prompt('Enter a number to calculate its square:');
  const num = Number(input);

  if (isNaN(num)) {
    alert('Please enter a valid number.');
    return;
  }

  // Call function with parameter and get return value
  const result = calculateSquare(num);

  // Display result on page
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `The square of ${num} is ${result}.`;
});
