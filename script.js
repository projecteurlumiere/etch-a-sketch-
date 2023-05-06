// slider functionality:

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  removeDivs();
  countDivs();
  paintBlack();
}

// loop for making squared divs and initial board:

let container = document.getElementsByClassName("largeContainer")[0];

countDivs();
paintBlack();

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
// painting them with black class:

function paintBlack(){
let divBlock = document.getElementsByClassName("divBlock");
Array.from(divBlock).forEach(function(element) {
    element.addEventListener("mouseover", e => element.classList.add("divBlockColored"));
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
  paintBlack();
}