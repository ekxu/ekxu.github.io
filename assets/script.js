document.querySelectorAll('.project img').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.src.replace('.png', '-hover.png'); // Assumes your hover image is named with "-hover"

    img.addEventListener('mouseenter', () => {
        img.src = hoverSrc; // Change to hover image on mouse enter
    });

    img.addEventListener('mouseleave', () => {
        img.src = originalSrc; // Change back to original image on mouse leave
    });
});