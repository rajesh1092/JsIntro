const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const findDiagonalOrder = (arr = []) => {
  if(!arr.length){
     return [];
  }
  let ind = 0;
  let colBegin = 0, rowBegin = 0;
  let rowMax = arr.length, colMax = arr[0].length;
  const res = [], stack = [];
  while(rowBegin< rowMax || colBegin<colMax) {
     for(let row = rowBegin, col = colBegin; row < rowMax && col >=0 ;
     row++,col--){
      if(ind%2 === 0){
             
        stack.push((arr[row][col]));
       // console.log(row,col);
        console.log ("stack" +stack+ "\n");
     }else{
        res.push(arr[row][col]);
        
        console.log("res:"+res);
     }
  }