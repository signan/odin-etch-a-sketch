const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-btn');

// creates grid of specified size
function createGrid(gridSize) {
    // creates rows which will contain the cells
    for (let i = 0; i < gridSize; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        container.appendChild(rowContainer);

        // creating cells and adding eventListener to react on mouse hover
        for (j = 0; j < gridSize; j++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            div.addEventListener("mouseover", colorCell);
            rowContainer.appendChild(div);
        }
    }
}

// adds 'hover' class to element. it will change bg to black in css
function addHoverClass(event) {
    event.currentTarget.classList.add('hover');
}

// remove the divs with 'row' class which will also delete all cells
function removeDivs() {
    divs = document.querySelectorAll('.row')
    for (let i = 0; i < divs.length; i++) {
        container.removeChild(divs.item(i));
    }
}

// creates a new board with your desired size
function resetBoard() {
    gridSize = prompt('what size of gird do you want?');
    if (gridSize > 100) {
        gridSize = 100;
    }
    if (gridSize < 2) {
        gridSize = 2;
    }
    removeDivs();
    createGrid(gridSize);
}

// changes the div's bg to a random color through inline styling
function colorCell(event) {
    // only color blank cells. this is to prevent recoloring already colored cells
    if (event.currentTarget.style.backgroundColor) {
        return;
    }
    else {
        event.currentTarget.style.backgroundColor = pickRandomColor();
    }
}

// picks a random color
function pickRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}


resetBtn.addEventListener("click", resetBoard);
createGrid(50);