/* script.js */
function redirectToNextPage() {
    window.location.href = "next-page.html";
}

function moveButton() {
    const button = document.getElementById("noButton");
    const container = document.querySelector(".container");

    // Get container's bounding box
    const containerRect = container.getBoundingClientRect();
    
    // Define limits within the container
    const maxX = containerRect.width - button.clientWidth - 20; // Prevent overflow
    const maxY = containerRect.height - button.clientHeight - 20;

    // Generate random position within the container
    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    // Apply the new position within the container
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Play sound effect
    playSound();
}

function playSound() {
    const audio = new Audio("sounds/cartoon-jump-6462.mp3");
    audio.play();
}

// Attach the function to the "No" button
document.getElementById("noButton").addEventListener("mouseenter", moveButton);

