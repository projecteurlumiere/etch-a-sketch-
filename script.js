// various variables

let customButton = document.getElementsByClassName("paintCustomButton")[0];
let randomButton = document.getElementsByClassName("paintRandomButton")[0];
let eraserButton = document.getElementsByClassName("eraser")[0];

// loop for making squared divs and initial board:

let container = document.getElementsByClassName("largeContainer")[0];

function countDivs(){
  for (let i = 0; i < slider.value; i++) {
      let divContainer = document.createElement("div");
      divContainer.classList.add("divContainer");
      for (let i = 0; i < slider.value; i++) {
          let divBlock = document.createElement("div");
          divBlock.classList.add("divBlock", "colorFalse");
          divContainer.appendChild(divBlock);
      }
      container.appendChild(divContainer);
  }
  Array.from(document.getElementsByClassName("divBlock")).forEach(e => e.style.cssText = `background-color: ${getColorBackground.value};`)
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

// currentColor or assign custom color

let getColor = document.getElementsByClassName("color")[0];
let currentColor = getColor.value;
getColor.oninput = () => { assignCustomColor() };
customButton.onclick = () => { assignCustomColor() };

function assignCustomColor() {
  console.log("button pressed");
  stopRandomColor()
  highlightButton(customButton);
  return currentColor = getColor.value;
}

// randomColor
let intervalId

randomButton.onclick = () => { 
  console.log("random clicked");
  stopRandomColor()
  intervalId = setInterval(() => {
    currentColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    getColor.value = currentColor;
  }, 50);
  highlightButton(randomButton);
}

function stopRandomColor() {
  clearInterval(intervalId);
}

// colorfy: 

function giveColorClass(div) {
  if (currentColor != getColorBackground.value) {
  div.classList.remove("colorFalse");
  div.classList.add("colorTrue")}
  else {
  div.classList.add("colorFalse");
  div.classList.remove("colorTrue")}
}

function colorfy(){
  let largeContainer = document.querySelector(".largeContainer");
  let MDOWN = false;
  ["mousedown", "mouseup"].forEach(eventName => largeContainer.addEventListener(eventName, () => MDOWN = !MDOWN));
  document.addEventListener("mouseup", () => MDOWN = false);
  
  largeContainer.onclick = function(event) {
    let target = event.target;
    console.log(target);
    if (!"divBlock") return;
    target.style.cssText = `background-color: ${currentColor};`;
    giveColorClass(target);
  }
  largeContainer.onmouseover = function(event) {
    if (MDOWN) {
      let target = event.target;
      if (!"divBlock") return;
      target.style.cssText = `background-color: ${currentColor};`;
      giveColorClass(target)
    }
  }
}

// previous colorfy or how not to do it (event delegation > assigning eventListeners to every single node)

/* function colorfy(){
  let divBlock = document.getElementsByClassName("divBlock");
  let MDOWN = false;
  Array.from(divBlock).forEach(function(element) {
      ["mousedown", "mouseup"].forEach(eventName => element.addEventListener(eventName, () => MDOWN = !MDOWN));
      element.onclick = function() {
        element.style.cssText = `background-color: ${currentColor};`; 
        giveColorClass(element)}
      document.addEventListener("mouseup", () => MDOWN = false); // fix for keep drawing when mouseup outside of the window
      element.addEventListener("mouseover", () => { 
        if (MDOWN) {
        element.style.cssText = `background-color: ${currentColor};`;
        giveColorClass(element)}
        }
      );
  });
}
*/

// currentColorBackground:

let getColorBackground = document.getElementsByClassName("colorBackground")[0];
getColorBackground.oninput = function() {
  let colorFalseDivs = document.getElementsByClassName("colorFalse");
  let currentColorBackground = getColorBackground.value
  Array.from(colorFalseDivs).forEach(function(e) {
      e.style.cssText = `background-color: ${currentColorBackground};`;
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

eraserButton.onclick = function(){
  console.log("reset pressed")
  stopRandomColor()
  highlightButton(eraserButton);
  currentColor = getColorBackground.value;
  getColorBackground.addEventListener("change", () => currentColor = getColorBackground.value);
  getColor.addEventListener("click", () => getColorBackground.removeEventListener)
}

// drag fix:
let largeContainer = document.querySelector(".largeContainer")
largeContainer.ondragstart = () => { return false };

// color a button (color, random, eraser) and decolor others


// eraser button is defined as eraserButton in button eraser section

function highlightButton(button) {
  button.classList.add("buttonActive");
  restButtons = [customButton, randomButton, eraserButton].filter(function(e) { return e !== button});
  restButtons.forEach(e => e.classList.remove("buttonActive"));
}

// first iteration: 

countDivs();
colorfy();
