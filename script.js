const container = document.querySelector('.container');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener("mouseover", () => addHoverClass(div));
        div.textContent = `${i+1}`;
        container.appendChild(div);
    }
}

function addHoverClass(element) {
    element.classList.add('hover');
}

createGrid()