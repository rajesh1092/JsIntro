function sum(parameter){
    let myFunc = num => Number(num);
    var num3 = Array.from(String(parameter), myFunc);
    sum1 = num3.reduce((partialSum, a) => partialSum + a, 0);
return sum1;
}

