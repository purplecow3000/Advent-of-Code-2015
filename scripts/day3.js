let pos = {
  x: 1,
  y: 1
};

let testArray = [
  [0,0,0],
  [0,1,0],
  [0,0,0]
];

// Find position of the house

const findPos = position => {
  let {x, y} = position;
  let row = testArray[y];
  // console.log(row);
  let house = row[x];
  // console.log(house);
  return {x, y, row, house};
}

// findPos(pos);

// Deliver present to the house

const deliverPresent = position => {
  let {x, y, row, house} = findPos(position);
  house += 1;
  row[x] = house;
  // console.log(row);
  testArray[y] = row;
  // console.log(testArray);
};

// deliverPresent(pos);

/* Go right on the infinite grid,
  Deliver a present,
  Then add a column of undelivered houses
*/

const goRight = position => {
  let {x, y, row} = findPos(position);
  // console.log(row[x + 1]);

  x++;
  deliverPresent({x, y});

  if (row[x] === 1) {
    testArray.forEach(street => street.push(0));
  };

  const tempArray = testArray.map(row => row.map(house => house));
  console.log(tempArray);

  return {x, y};
};

pos = goRight(pos);
console.log(pos);

/* Go down on the infinite grid,
  Deliver a present,
  Then add a column of undelivered houses
*/

const goDown = position => {
  let {x, y, row} = findPos(position);

  let rowSum = 0
  testArray[y+1].forEach(presents => rowSum += presents);
  // console.log(rowSum);

  if (rowSum === 0) {
    let ave = row.map(item => 0);
    // console.log(ave);

    testArray.push(ave);
  }

  y++;
  deliverPresent({x, y});

  const tempArray = testArray.map(row => row.map(house => house));
  console.log(tempArray);

  return {x, y};
};

pos = goDown(pos);
console.log(pos);

/* Go left on the infinite grid,
  Deliver a present,
  Then add a column of undelivered houses
*/

const goLeft = position => {
  let {x, y, row} = findPos(position);

  x--;
  deliverPresent({x, y});

  if (row[x] === row[row.length-1]) {
    testArray.forEach(street => street.splice(0, 0, 0));
  };

  const tempArray = testArray.map(row => row.map(house => house));
  console.log(tempArray);

  return {x, y};
};

pos = goLeft(pos);
console.log(pos);

const goUp = position => {
  let {x, y, row} = findPos(position);

  let rowSum = 0
  testArray[y-1].forEach(presents => rowSum += presents);
  console.log(rowSum);

  if (rowSum === 0) {
    let ave = row.map(item => 1);
    // console.log(ave);

    testArray.splice(0,0,ave);
    y++;
  }

  y--;
  deliverPresent({x, y});

  const tempArray = testArray.map(row => row.map(house => house));
  console.log(tempArray);

  return {x, y};
};

pos = goUp(pos);
console.log(pos);