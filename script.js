// Get the display and buttons elements
const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('button');
const operators = ['+', '-', '*', '/'];

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === '=') {
            try {
                // Evaluate the expression and update display
                display.value = eval(display.value);
            } catch {
                // Display error if the expression is invalid
                display.value = 'Error';
            }
        } else if (buttonValue === 'AC') {
            // Clear the display
            display.value = '';
        } else if (buttonValue === 'C') {
            // Remove the last character
            display.value = display.value.slice(0, -1);
        } else if (buttonValue === '.') {
            // Append decimal point only if it is not already present in the current number
            if (!display.value.includes('.') || /[+\-*/]/.test(display.value.slice(-1))) {
                display.value += buttonValue;
            }
        } else {
            // Append the button value to the display
            display.value += buttonValue;
        }
    });
});

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key) || operators.includes(key)) {
        // Append number or operator to the display
        display.value += key;
    } else if (key === 'Enter' || key === '=') {
        try {
            // Evaluate the expression and update display
            display.value = eval(display.value);
        } catch {
            // Display error if the expression is invalid
            display.value = 'Error';
        }
    } else if (key === 'Backspace') {
        // Remove last character
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        // Clear the display
        display.value = '';
    } else if (key === '.') {
        // Handle decimal point
        if (!display.value.includes('.') || /[+\-*/]/.test(display.value.slice(-1))) {
            display.value += key;
        }
    }
});
