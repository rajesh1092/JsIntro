var  matrix =[
    [1, 3, 9, 4],
    [9, 5, 7, 7],
    [3, 6, 9, 7],
    [1, 2, 2, 2],
  ];
    var len = matrix.length;
    var i = 0;
    var j = 0;
    for (var k = 0; k < len * len;) {
            for (; i >= 0 && j < len; i--, j++ ) {
              //console.log(i,j);
              //console.log(matrix[i][j]);
              //matrix.sort((a, b) => a - b);
              console.log(matrix[i][j]);
                k++;
            }   
            if (i < 0 && j < len) i = 0;            
            if (j === len) i = i + 2, j--;
            

            for (;j >= 0 && i < len; i++, j--) {
             // console.log(i,j);
             console.log(matrix[i][j]);
                k++;
                
            }
            if (j < 0 && i < len) j = 0;
            //console.log(i,j);
            if (i === len) j = j + 2, i--;
            //console.log(i,j);
    }
   
  
   
  

   
