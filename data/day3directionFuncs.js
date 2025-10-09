import {findPos, deliverPresent} from '../data/day3positionFuncs.js';

/* Go right on the infinite grid,
  Deliver a present,
  Then add a column of undelivered houses to the east if needed
*/

export const goRight = (position, array) => {
  let [x, y, row] = findPos(position, array);
  // console.log(row[x + 1]);

  x++;
  deliverPresent({x, y}, array);

  // console.log(row[x+1]);

  if (row[x] === 1  && row[x+1] === undefined) {
    array.forEach(street => street.push(0));
  };

  // const tempArray = array.map(row => row.map(house => house));
  // console.log(tempArray);

  return [{x, y}, array];
};

// [pos, houseArray] = goRight(pos, houseArray);
// console.log(pos);
// console.log(houseArray);

// /* Go down on the infinite grid,
//   Deliver a present,
//   Then add a row of undelivered houses to the south if needed
// */

export const goDown = (position, array) => {
  let [x, y, row] = findPos(position,array);

  let rowSum = 0
  array[y+1].forEach(presents => rowSum += presents);
  // console.log(rowSum);

  if (rowSum === 0) {
    let ave = row.map(item => 0);
    // console.log(ave);

    array.push(ave);
  };

  y++;
  deliverPresent({x, y}, array);

  // const tempArray = array.map(row => row.map(house => house));
  // console.log(tempArray);

  return [{x, y}, array];
};

// [pos, houseArray] = goDown(pos, houseArray);
// console.log(pos);
// console.log(houseArray);

// /* Go left on the infinite grid,
//   Deliver a present,
//   Then add a column of undelivered houses to the west if needed
// */

export const goLeft = (position, array) => {
  let [x, y, row] = findPos(position, array);

  x--;
  deliverPresent({x, y}, array);

  // console.log(row[x-1]);

  if (row[x] === 1 && row[x-1] === undefined) {
    array.forEach(street => street.splice(0, 0, 0));
  };

  // const tempArray = array.map(row => row.map(house => house));
  // console.log(tempArray);

  return [{x, y}, array];
};

// [pos, houseArray] = goLeft(pos, houseArray);
// console.log(pos);
// console.log(houseArray);

// /* Go down on the infinite grid,
//   Deliver a present,
//   Then add a row of undelivered houses to the north if needed
// */

export const goUp = (position, array) => {
  let [x, y, row] = findPos(position, array);

  let rowSum = 0
  array[y-1].forEach(presents => rowSum += presents);
  // console.log(rowSum);

  if (rowSum === 0) {
    let ave = row.map(item => 0);
    // console.log(ave);

    array.splice(0,0,ave);
    y++;
  }

  y--;
  deliverPresent({x, y}, array);

  // const tempArray = array.map(row => row.map(house => house));
  // console.log(tempArray);

  return [{x, y}, array];
};

// [pos, houseArray] = goUp(pos, houseArray);
// console.log(pos);
// console.log(houseArray);