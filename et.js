function canvas() {
  const canvasElement = document.getElementById('myCanvas');
  
  if (canvasElement.getContext) {
    const ctx = canvasElement.getContext('2d');

    // Draw a circle
    ctx.beginPath();
    ctx.arc(250, 250, 50, 0, Math.PI * 2, false); // Center (250, 250) with a radius of 50
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke(); // Outline the circle
  } else {
    console.error('Canvas is not supported in this browser.');
  }
}

canvas();
