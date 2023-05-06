// loop for making squared divs:

let container = document.getElementsByClassName("largeContainer")[0];

for (let i = 0; i < 100; i++) {
    let divContainer = document.createElement("div");
    divContainer.classList.add("divContainer");
    for (let i = 0; i < 100; i++) {
        let divBlock = document.createElement("div");
        divBlock.classList.add("divBlock");
        divContainer.appendChild(divBlock);
    }
    container.appendChild(divContainer);
}

// painting them with black class:

let divBlock = document.getElementsByClassName("divBlock");

Array.from(divBlock).forEach(function(element) {
    element.addEventListener("mouseover", e => element.classList.add("divBlockColored"));
  });

// slider functionality:

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
