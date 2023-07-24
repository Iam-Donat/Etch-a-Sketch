console.log('The Script is running 🫱🏾‍🫲🏾');

// Get HTML Elements 
const board = document.querySelector('.board');

// Getting button values
const toogleSize = document.querySelector('input[name="size"]');
const colorChoice = document.querySelector('input[name="color"]');

// initialize variables
let size = toogleSize.value; // store the default grids in the board
console.log(size);
let color = '' // store the default color value of the mouseover event;
console.log(color);
// Functions
function createGrids() { // ===> to create Grids === //
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let totalGrids = size * size;

    for (let i = 0; i < totalGrids; i++) {
        const grid = document.createElement('div');

        grid.style.outline = '1px solid black';
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = color;
        });
        board.insertAdjacentElement('beforeend', grid);

    }
}

function colorValue() {
    color = this.value
    console.log(color);
}
function defaultGrid(size) { // default Grid sizes
    color = colorChoice.value;
    createGrids(size)

}

function toogleGridSize() { // toogle Grid size 
    size = this.value;

    color
    createGrids(size);
}

// Events Listeners
window.addEventListener('load', defaultGrid);
toogleSize.addEventListener('change', toogleGridSize)
colorChoice.addEventListener('click', colorValue)

// === get Current Year === //
const getCurrentYear = new Date().getFullYear();

const currentYear = document.querySelector('.year');

currentYear.textContent = getCurrentYear