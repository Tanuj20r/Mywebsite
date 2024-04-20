// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.nextElementSibling.classList.toggle('show');
        });
    });
});
