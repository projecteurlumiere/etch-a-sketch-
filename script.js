let container = document.getElementsByClassName("largeContainer")[0];

for (let i = 0; i < 16; i++) {
    let divContainer = document.createElement("div");
    divContainer.classList.add("divContainer");
    for (let i = 0; i < 16; i++) {
        let divBlock = document.createElement("div");
        divBlock.classList.add("divBlock");
        divContainer.appendChild(divBlock);
    }
    container.appendChild(divContainer);
}

let divBlock = document.getElementsByClassName("divBlock");

Array.from(divBlock).forEach(function(element) {
    element.addEventListener("mouseover", e => element.classList.add("divBlockColored"));
  });