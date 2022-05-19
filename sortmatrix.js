const arr = [
    [1, 3, 9, 4],
    [9, 5, 7, 7],
    [3, 6, 9, 7],
    [1, 2, 2, 2],
  ];

const findDiagonalOrder = (arr = []) => {
    if(!arr.length){
       return [];
    }
    let ind = 0;
    let i = 0, j = 0;
    let rowMax = arr.length, colMax = arr[0].length;
    const res = [], stack = [];
    while(i< rowMax || j<colMax) {
       for(let row = i, col = j; col < colMax && row >=0 ;
       col++,row--){
           //console.log(ind);
          if(ind%2 === 0){
             
             stack.push((arr[row][col]));
             console.log(row,col);
             //console.log ("stack" +stack+ "\n");
          }else{
             stack.push(arr[row][col]);
             console.log("row"+ row,"col"+col);
             
             //console.log("res:"+res+ "\n");
          }
       }
       
        stack.sort();
        stack.reverse();
        console.log ("stack" +stack+ "\n");
        while(stack.length){
            res.push(stack.pop());
        }       
        console.log("res:"+res);       
        ind++;
        i++
        if(i> rowMax-1 && j < colMax){
          i = rowMax-1
          j++
       }
       
    }
    return res   
};
 console.log(findDiagonalOrder(arr));