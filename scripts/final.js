function changeBackgroundColor() {
    let colors = ["red","orange", "yellow", "green", "blue", "purple" ]; // Array of colors
    let randomColor = colors[Math.floor(Math.random() * colors.length)]; // Get a random color from the array
    document.body.style.backgroundColor = randomColor; // Set the background color of the body
  }