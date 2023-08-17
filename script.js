let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let genNew = document.querySelector(".genNew");


// pick color for gradient

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

// generate random color

function setNew() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor() {
    color1.value = setNew();
    color2.value = setNew();
    setGradient();
  }

// EventListener

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

genNew.addEventListener("click", setRandomColor)

