var matrix = [
    [1, 3, 9, 4],
    [9, 5, 7, 7],
    [3, 6, 9, 7],
    [1, 2, 2, 2],
  ];
var i = 0;
var j = 0;
var a = true;


for(var n=0; n <= 6 ; n++){
for (var i = 0; i < matrix.length; i++) {
    rows = matrix.length;
    cols = matrix[i].length;
    if (rows != cols) {
        console.log("Not a square matrix");
        a = false;
        break;
    }
    for (var j = 0; j < matrix.length; j++) {
        
        if( i+j == n){ 
            //console.log(matrix[j][i]);
            a = matrix[j][i];
            if(a)
            console.log(a);
        }
    }
}
console.log("\n");
}