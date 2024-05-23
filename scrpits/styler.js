function updateGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function updateColorPeriodically() {
    updateGradient();
    setTimeout(updateColorPeriodically, 5000);
}

updateColorPeriodically();