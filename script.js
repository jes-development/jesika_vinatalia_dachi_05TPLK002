// Add event listener to accordion buttons
document.querySelectorAll('.accordion-button ').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle accordion collapse
        button.ariaExpanded = !button.ariaExpanded;
    });
});