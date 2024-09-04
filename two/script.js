document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById('cta-button');
    const popupOverlay = document.getElementById('popup-overlay');
    const closeIcon = document.getElementById('close-icon');
    const getStartedButton = document.getElementById('get-started');

    // Open Popup
    ctaButton.addEventListener('click', () => {
        popupOverlay.classList.remove('hidden');
    });

    // Close Popup on clicking the close icon
    closeIcon.addEventListener('click', () => {
        popupOverlay.classList.add('hidden');
    });

    // Close Popup on clicking outside the popup container
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.add('hidden');
        }
    });

    // Close Popup on clicking the "Let's Get Started" button
    getStartedButton.addEventListener('click', () => {
        popupOverlay.classList.add('hidden');
    });

    // Login Link (No extra JS needed as it's just a redirect)
});
