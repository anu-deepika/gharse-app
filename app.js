// app.js - GharSe Application

// Simple function to greet users
function greetUser(name) {
    console.log(`Welcome to GharSe, ${name}!`);
}

// Function to start the application
function startApp() {
    const userName = prompt("Please enter your name:");
    greetUser(userName);
}

// Start the application
startApp();