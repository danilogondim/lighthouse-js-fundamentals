// a function that evaluates the best vegetable in a given category

const judgeVegetable = function (vegetables, metric) {

  let winner = vegetables[0][metric];
  let winnerIndex = 0;

  vegetables.forEach (function(element, index) {
    if (element[metric] > winner) {
      winner = element[metric];
      winnerIndex = index;  
    }
  });
  
  return vegetables[winnerIndex].submitter;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));