    const container = document.getElementById('grid-container');

function createPad(size){
const totalSqr = size * size;
  let squares = container.querySelectorAll('div');
squares.forEach((div) => {
    div.remove();
});
  for(i = 0; i < totalSqr; i++){
    const cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
       cell.style.backgroundColor = 'black';
    });
    cell.classList.add('grid-item');
    container.appendChild(cell);

  };
}
createPad(16);

const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    size = parseInt(window.prompt('Set grid size', ''));

    if(size === null) return;

    if(isNaN(size) || size <= 0 || size > 100){
      alert('Enter reasonable input');
      return;
    }

    createPad(size);
});




