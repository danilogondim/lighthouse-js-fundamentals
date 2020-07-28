// a function that begins at [0, 0] and returns the
//final position according to the moves that are passed

// //switch case version:
// const finalPosition = function (moves) {
//   const position = [0, 0];
//   for (let move of moves) {
//     switch(move) {
//       case 'north':
//         position[1]++;
//         break;
//       case 'south':
//         position[1]--;
//         break;
//       case 'west':
//         position[0]--;
//         break;
//       case 'east':
//         position[0]++;
//         break;
//     }
//   }
//   return position;
// }

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// console.log(finalPosition(moves));



//if version:
const finalPosition = function (moves) {
  const position = [0, 0];
  for (let move of moves) {
    if(move === 'north') {
      position[1]++;
    } else if(move === 'south') {
      position[1]--;
    } else if(move === 'west') {
      position[0]--;
    } else if(move === 'east') {
      position[0]++;
    }
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));