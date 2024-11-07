document.querySelectorAll('.project img').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.src.replace('.png', '-hover.png');

    img.addEventListener('mouseenter', () => {
        img.src = hoverSrc; 
    });

    img.addEventListener('mouseleave', () => {
        img.src = originalSrc; 
    });
});