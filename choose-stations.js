// defining a function that returns stations that have a capacity of at least 20
// and that are either a school or a community centre.

const chooseStations = function (stations) {
  const chosenStations = [];
  for (let station of stations) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      chosenStations.push(station[0])
    }
  }
  return chosenStations;
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));