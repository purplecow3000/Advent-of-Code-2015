import {adventArray} from '../data/day2prisms.js';

// REMINDER: ADD useful comments

const dimArray = dimensions => dimensions.split('x').map(str => Number(str));

const findPaperArea = (sides) => {
  let array = dimArray(sides);
  //console.log(array);
  let length = array[0];
  let width = array[1];
  let height = array[2];

  let lw = length * width;
  let wh = width * height;
  let hl = height * length;
  //console.log(lw, wh, hl);
  
  let slack = (lw <= wh) ? ((hl <= lw) ? hl : lw) : ((hl <= wh) ? hl : wh);
  //console.log(slack);

  let paperArea = 2 * (lw + wh + hl) + slack;
  //console.log(paperArea);
  return paperArea;
};

const findRibbonArea = (sides) => {
  let array = dimArray(sides);
  //console.log(array);
  let length = array[0];
  let width = array[1];
  let height = array[2];

  let lwPerim = (length + width) * 2;
  let whPerim = (width + height) * 2;
  let hlPerim = (height + length) * 2;
  //console.log(lwPerim, whPerim, hlPerim);
  
  let perimeter = (lwPerim <= whPerim) ? ((hlPerim <= lwPerim) ? hlPerim : lwPerim) : ((hlPerim <= whPerim) ? hlPerim : whPerim);
  //console.log(perimeter);

  let bow = length * width * height;
  //console.log(bow);

  let ribbonArea = perimeter + bow;
  //console.log(ribbonArea);
  return ribbonArea;
};

findRibbonArea('2x3x4');

const calculateTotalArea = prisms => {
  let paperAreaTotal = 0;
  let ribbonAreaTotal = 0;

  for (let prism in prisms) {
    paperAreaTotal += findPaperArea(prisms[prism]);
    ribbonAreaTotal += findRibbonArea(prisms[prism]);
    //console.log(paperAreaTotal, ribbonAreaTotal);
  };

  return {paperAreaTotal, ribbonAreaTotal};
}

console.log(calculateTotalArea(adventArray));
