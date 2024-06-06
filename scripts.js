document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const clickSound = document.getElementById('click-sound');

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            clickSound.play();
        });
    });
});
