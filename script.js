// JavaScript to handle the interactive flowchart

const flowSteps = document.querySelectorAll('.flow-step');
const descriptionBox = document.getElementById('descriptionBox');
const descriptionText = document.getElementById('descriptionText');

// Event listeners for each flow step
flowSteps.forEach(step => {
    step.addEventListener('mouseenter', () => {
        const description = step.getAttribute('data-description');
        descriptionText.textContent = description;
        descriptionBox.style.display = 'block';
    });
    step.addEventListener('mouseleave', () => {
        descriptionBox.style.display = 'none';
    });
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    this.reset(); // Clears the input field after submitting
});
