// 1. take output from the slider
// 2. given that output, passing a mouse should assign a respective css class
// 3. the css class should be unique for each div (before it changes)

// slider functionality:

let slider = document.getElementsByClassName("slider")[0];
let output = document.getElementsByClassName("px")[0];
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = slider.value;
  removeDivs();
  countDivs();
  paintBlack();
}

// color choice functionality:
let element = document.createElement("style"),
sheet;

// Append style element to head
document.head.appendChild(element);

// Reference to the stylesheet
let dynamicStyle = document.querySelector("style");

let n = 0;

let getColor = document.getElementsByClassName("color")[0];
getColor.oninput = function() {
  console.log(this.value);
  ;
}

function colorfy(){
  dynamicStyle.innerHTML += `.divBlockColored${n++} { background-color: ${getColor.value}; }`;
  element.classList.add(`divBlockColored${n}`)
}

// first iteration for the whiteboard:

countDivs();
paintBlack();

// function painting them with black class:

function paintBlack(){
let divBlock = document.getElementsByClassName("divBlock");
Array.from(divBlock).forEach(function(element) {
    element.addEventListener("mouseover", colorfy());
  });
}