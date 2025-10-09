// Find position of the house

export const findPos = (position, array) => {
  let {x, y} = position;
  let row = array[y];
  // console.log(row);
  let house = row[x];
  // console.log(house);
  return [x, y, row, house];
}

// findPos(pos, houseArray);

// Deliver present to the house

export const deliverPresent = (position, array) => {
  let [x, y, row, house] = findPos(position, array);
  house += 1;
  row[x] = house;
  // console.log(row);
  array[y] = row;
  // console.log(array);
};

// deliverPresent(pos, houseArray);
