document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.top-up-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
});