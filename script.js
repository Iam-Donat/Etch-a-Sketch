console.log('The Script is running 🫱🏾‍🫲🏾');

// // Get HTML Elements 
// const board = document.querySelector('.board');
// const booardZoom = document.querySelector('.size__value');

// // Getting button values
// const toogleSize = document.querySelector('input[name="size"]');
// const colorChoice = document.querySelector('input[name="color"]');
// const colorChoiceBtn = document.querySelector('#random');
// const randomColorBtn = document.querySelector('#randomColor');
// const eraserBtn = document.querySelector('#eraser');
// const resetBtn = document.querySelector('#reset');


// // initialize variables
// let size = toogleSize.value; // store the default grids in the board
// console.log(size);
// let color = '' // store the default color value of the mouseover event;
// console.log(color);
// // Functions
// function createGrids() { // ===> to create Grids === //
//     board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
//     board.style.gridTemplateRows = `repeat(${size}, 1fr)`
//     let totalGrids = size * size;

//     for (let i = 0; i < totalGrids; i++) {
//         const grid = document.createElement('div');
//         // grid.style.outline = 'solid #7b7b7c';
//         grid.style.cursor = 'grabbing';
//         grid.addEventListener('mouseover', () => {
//             grid.style.backgroundColor = color;
//         });
//         board.insertAdjacentElement('beforeend', grid);
//     }
// }

// function defaultGrid(size) { // default Grid sizes
//     createGrids(size);
// }

// function toogleGridSize() { // toogle Grid size 
//     size = this.value;
//     createGrids(size);
//     booardZoom.textContent = size;
// }

// function colorValue() { // ===> to get color value
//     color = colorChoice.value
// }


// function randomColor() {
//     const colorR = Math.floor(Math.random() * 255);
//     console.log(colorR);
//     const colorG = Math.floor(Math.random() * 255);
//     console.log(colorG);
//     const colorB = Math.floor(Math.random() * 255);
//     console.log(colorB);

//     color = `rgba(${colorR},${colorG},${colorB})`;
//     console.log(color);
// }

// function reset() {
//     const grids = document.querySelectorAll('.board div');
//     grids.forEach(grid => grid.style.backgroundColor = '');
// }

// // Events Listeners
// window.addEventListener('load', defaultGrid);
// toogleSize.addEventListener('change', toogleGridSize);
// colorChoiceBtn.addEventListener('click', colorValue);
// randomColorBtn.addEventListener('click', randomColor);
// resetBtn.addEventListener('click', reset);

// === get Current Year === //
const getCurrentYear = new Date().getFullYear();
const currentYear = document.querySelector('.year');

console.log(getCurrentYear);
currentYear.textContent = getCurrentYear