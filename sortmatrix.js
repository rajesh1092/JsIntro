const arr = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];

const findDiagonalOrder = (arr = []) => {
  if (!arr.length) {
    return [];
  }
  let ind = 0;
  let i = 0,
    j = 0;
  let rowMax = arr.length,
    colMax = arr[0].length;
  const res = [],
    stack = [];
  while (i < rowMax || j < colMax) {
    for (let row = i, col = j; col < colMax && row >= 0; col++, row--) {
      //console.log(ind);
      if (ind % 2 === 0) {
        stack.push(arr[row][col]);
        // console.log(row,col);
        //console.log ("stack" +stack+ "\n");
      } else {
        stack.push(arr[row][col]);
        // console.log("row"+ row,"col"+col);

        //console.log("res:"+res+ "\n");
      }
    }

    stack.sort();
    stack.reverse();
    console.log("stack : " + stack + "\n");

    while (stack.length) {
      res.push(stack.pop());
    }

    ind++;
    i++;
    if (i > rowMax - 1 && j < colMax) {
      i = rowMax - 1;
      j++;
    }
  }

  return res;
};
a = findDiagonalOrder(arr);
console.log(a);

let matrix = [
  [1, 9, 9, 7],
  [3, 5, 6, 9],
  [3, 4, 7, 7],
  [1, 2, 2, 2],
];

let array1 = [];
debugger;
for (let i = 0, skip = 1; i < a.length; i++, skip++) {
  if (i === 0) {
    array1.push(a[i]);
  } else {
    debugger;
    i = i + skip;
    array1.push(a[i]);
    
  }
}

console.log("array1...", array1);

//   for (let row_index = 0; row_index < 4; row_index++) {
//     for (let column_index = 0; column_index < 4; column_index++) {
//       console.log(matrix[row_index][column_index] + "   ");
//     }

//     console.log("\n");
//   }
