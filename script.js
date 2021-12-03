let selection = '';

const display = document.querySelector('#display');
const btnReset = document.querySelector('#reset')
const btnResize = document.querySelector('#resize')
const btnDraw = document.querySelector('#draw').addEventListener('click' , e => selection = 'draw');
const btnShade = document.querySelector('#shade').addEventListener('click' , e => selection = 'shade');
const btnRGB= document.querySelector('#rgb').addEventListener('click' , e => selection = 'rgb');
const btnErase = document.querySelector('#eraser').addEventListener('click' , e => selection = 'eraser');

function createGrid(rows, columns) {
    for(let i = 0; i < (rows * columns); i++) {
            let newCell = document.createElement('div');
            newCell.classList.add('cell');
            display.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            display.style.gridTemplateRows = `repeat(${rows}, 1fr)`
            display.appendChild(newCell);
}}
createGrid(16, 16);

function game() {
let cells = document.querySelectorAll('.cell');
cells.forEach(cells => {
    cells.addEventListener('mouseover' , function(e) {
        if (selection === 'draw') {
            cells.style.opacity = '1';
        } else if (selection === 'shade') {
            cells.style.opacity = (parseFloat(cells.style.opacity) || 0 ) + 0.1;
        } else if (selection === 'eraser') {
            cells.style.opacity = '0';
        } else if (selection === 'rgb') {
            cells.style.opacity = '1'
            let random = '#'+Math.floor(Math.random() * 16777215).toString(16);
            cells.style.background = random;
}})})}
game()

btnResize.addEventListener('click' , resize)
function resize() {
    let userChoice = prompt('What size would you like the grid to be?');
    if (userChoice === null || userChoice < 1 || userChoice > 100) {
        createGrid(16,16);
        game()
    } else {
        display.innerHTML = '';
        createGrid(userChoice, userChoice)
        game();
}}

btnReset.addEventListener('click' , reset)
function reset() {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach((allCells) => {
        allCells.style.opacity = '0';
})}  
