document.addEventListener('DOMContentLoaded', function() {
    const buttonModal = document.getElementById('buttonModal');
    buttonModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget; // Button that triggered the modal
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
        const sourceCode = button.getAttribute('data-source-code');

        // Update the modal's content
        const modalTitle = buttonModal.querySelector('.modal-title');
        const modalDescription = buttonModal.querySelector('#buttonDescription');
        const modalSourceCode = buttonModal.querySelector('#buttonSourceCode');

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalSourceCode.textContent = sourceCode;
    });
});


// progress

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.setProperty('--width', value + '%');
    });
});