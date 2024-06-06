document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const clickSound = document.getElementById('click-sound');
    const hoverSound = document.getElementById('hover-sound');

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            clickSound.play();
        });

        icon.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });
});
