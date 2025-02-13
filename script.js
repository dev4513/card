function openEnvelope() {
    document.querySelector('.envelope').classList.toggle('open');
  }
  
  // Create floating shapes
  function createFloatingShape() {
    const shape = document.createElement('div');
    shape.classList.add('floating-shape');
  
    // Randomize size and position
    const size = Math.random() * 50 + 20; // Between 20px and 70px
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.left = Math.random() * 100 + 'vw';
    shape.style.animationDuration = Math.random() * 3 + 3 + 's';
  
    document.body.appendChild(shape);
  
    setTimeout(() => {
      shape.remove();
    }, 5000);
  }
  
  setInterval(createFloatingShape, 1000);