function createGrid(divClassName) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const grid = document.querySelector(`.${divClassName}`);
  for (let i = 0; i < 10; i++) {
    let xAxisDiv = document.createElement('div');
    xAxisDiv.classList.add(`xGroup`);
    xAxisDiv.classList.add(`${i}`);
    grid.appendChild(xAxisDiv);
    for (let j = 0; j < 10; j++) {
      let square = document.createElement('button');
      square.textContent = `${alphabet.charAt(i)}${j}`;
      square.classList.add('square');
      square.id = `${divClassName}${i}${j}`;
      xAxisDiv.appendChild(square);
    }
  }
}

function renderShips(gameboard, divClassName) {
  for (let ship of gameboard.ships) {
    let color;
    switch (ship.name) {
      case 'Carrier':
        color = 'red';
        break;
      case 'Battleship':
        color = 'blue';
        break;
      case 'Cruiser':
        color = 'green';
        break;
      case 'Submarine':
        color = 'yellow';
        break;
      case 'Destroyer':
        color = 'purple';
        break;
    }
    for (let coord of ship.coords) {
      let square = document.getElementById(`${divClassName}${coord}`);
      square.style.backgroundColor = color;
    }
  }
}

function renderShots(gameboard, divClassName) {
  for (let attack of gameboard.receivedAttacks) {
    let square = document.getElementById(`${divClassName}${attack}`);
    let x = document.createElement('div');
    x.textContent = 'X';
    x.style = 'color: black; position: absolute;font-size: 1.5rem;';
    square.appendChild(x);
  }
}

export { createGrid, renderShips, renderShots };
