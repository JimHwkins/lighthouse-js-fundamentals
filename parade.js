const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let coords = [0, 0];
  for (const move of moves) {
    let coord = move;
    

    switch (coord) {
      case 'north':
        coords[1] += 1;
        break;
      case 'south':
        coords[1] -= 1;
        break;
      case 'east':
        coords[0] += 1;
        break;
      case 'west':
        coords[0] -= 1;
        break;
    }
  }
  return coords;
}

console.log(finalPosition(moves));