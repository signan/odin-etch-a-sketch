const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-btn');

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        container.appendChild(rowContainer);

        for (j = 0; j < gridSize; j++) {
            let div = document.createElement('div');
            div.classList.add('pixel');
            div.addEventListener("mouseover", addHoverClass);
            rowContainer.appendChild(div);
        }
    }
}

function addHoverClass(event) {
    event.currentTarget.classList.add('hover');
}

function removeDivs() {
    divs = document.querySelectorAll('.row')
    for (let i = 0; i < divs.length; i++) {
        container.removeChild(divs.item(i));
    }
}

function resetBoard() {
    gridSize = prompt('what size of gird do you want?');
    if (gridSize > 100) {
        gridSize = 100;
    }
    removeDivs();
    createGrid(gridSize);
}


resetBtn.addEventListener("click", resetBoard);

createGrid(50);