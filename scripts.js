document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const clickSound = document.getElementById('click-sound');
    const hoverSound = document.getElementById('hover-sound');
    
    // To avoid multiple hover sounds playing, keep track of the last played icon
    let lastHoveredIcon = null;

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            clickSound.play();
        });

        icon.addEventListener('mouseenter', () => {
            // Only play the hover sound if the icon is different from the last hovered one
            if (icon !== lastHoveredIcon) {
                hoverSound.currentTime = 0;
                hoverSound.play();
                lastHoveredIcon = icon;
            }
        });

        // Reset lastHoveredIcon on mouse leave
        icon.addEventListener('mouseleave', () => {
            lastHoveredIcon = null;
        });
    });
});
