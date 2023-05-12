// loop for making squared divs and initial board:

let container = document.getElementsByClassName("largeContainer")[0];

function countDivs(){
  for (let i = 0; i < slider.value; i++) {
      let divContainer = document.createElement("div");
      divContainer.classList.add("divContainer");
      for (let i = 0; i < slider.value; i++) {
          let divBlock = document.createElement("div");
          divBlock.classList.add("divBlock");
          divContainer.appendChild(divBlock);
      }
      container.appendChild(divContainer);
  }
}

// slider

let slider = document.getElementsByClassName("slider")[0];
let output = document.getElementsByClassName("px")[0];
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = slider.value;
  removeDivs();
  countDivs();
  colorfy();
}

// currentColor:

let getColor = document.getElementsByClassName("color")[0];
let currentColor = getColor.value;
getColor.oninput = function() {
  return currentColor = getColor.value;
}

// colorfy: 

function colorfy(){
  let divBlock = document.getElementsByClassName("divBlock");
  let MDOWN = false;
  Array.from(divBlock).forEach(function(element) {
      ["mousedown", "mouseup"].forEach(eventName => element.addEventListener(eventName, () => MDOWN = !MDOWN));
      element.onclick = function() {element.style.cssText = `background-color: ${currentColor};`}
      document.addEventListener("mouseup", () => MDOWN = false); // fix for keep drawing when mouseup outside of the window
      element.addEventListener("mouseover", e => { 
        if (MDOWN) {
          element.style.cssText = `background-color: ${currentColor};`
        }});
    });
  }


// function for removing:

function removeDivs() {
let elementsRemove = document.getElementsByClassName("divContainer");
  Array.from(elementsRemove).forEach(function(element) {
    element.remove();
  })
}

// button reset

let resetScreen = document.getElementsByClassName("reset")[0];
resetScreen.onclick = function(){
  removeDivs();
  countDivs();
  colorfy();
}

// button eraser

let eraserButton = document.getElementsByClassName("eraser")[0];
eraserButton.onclick = function(){
  currentColor = "#FFFFFF"
}

// drag fix:
let largeContainer = document.querySelector(".largeContainer")
largeContainer.ondragstart = () => { return false };

// first iteration: 

countDivs();
colorfy();
