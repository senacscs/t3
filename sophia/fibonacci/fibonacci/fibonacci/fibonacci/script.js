function getRandomColor() {
    const colors = [
      {
        text: "#0c819a",
        background: "#d4f8ff",
      },
      {
        text: "#0a8329",
        background: "#bcffcd",
      },
      {
        text: "#824707",
        background: "#ffdcb7",
      },
      {
        text: "#8e0855",
        background: "#ffc4e6",
      },
      {
        text: "#910707",
        background: "#ffc6c6",
      },
    ];
  
    // Generate a random index number between 0 and the length of the array
    const randomIndex = Math.floor(Math.random() * colors.length);
  
    return colors[randomIndex];
  }
  const accentColor = getRandomColor();

 const divs = document.querySelectorAll('.square');

 divs.forEach((div) => {
    div.style.backgroundColor = accentColor.background

    let divAnimation = false;
    let divAnimationDegrees = 0;


    function animateDiv() {
        anchorAnimationDegrees += 3;
        div.style.filter = `hue-rotate(${anchorAnimationDegrees}deg)`;
        requestAnimationFrame(animateDiv);
      }
    
      // Setups the animation when hovering with the mouse
      div.addEventListener("mouseover", (e) => {
        anchorAnimation = true;
        animateDiv();
      });
      div.addEventListener("mouseout", (e) => {
        anchorAnimation = false;
      });
 })