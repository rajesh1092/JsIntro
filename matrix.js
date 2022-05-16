var matrix = [
  [1, 0, 0 ,0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];
var a = true;
for (var i = 0; i < matrix.length; i++) {
  rows = matrix.length;
  cols = matrix[i].length;

  if (rows != cols) {
    console.log("Not a square matrix");
    a = false;
    break;
  }
  console.log(i+ "i");
  for (var j = 0; j < matrix.length; j++) {
    
    console.log(j+ "j");

    if (matrix[i][j] !== 1 && i === j || matrix[i][j] && i !== j) {
      console.log(matrix[i][j]);
      console.log(" Not an identity matrix");
      a = false;
      break;
    }
  }
}
if (a){
    console.log("Identity matrix");
}
