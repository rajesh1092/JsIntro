var str = "abcdefghi";
var count = 0;
for(var i=0;i<str.length-2;i++){
  //  console.log(i+ "i"+"\n");
for(var j=i+1;j<str.length-1;j++){
  //  console.log(j+"j"+"\n");
var a = str.substring(0,i+1);
var b = str.substring(i+1,j+1);
var c = str.substring(j+1,str.length);

console.log(a.length, b.length, c.length +"\n")
if ((a.length == b.length)&&(b.length == c.length)){
    
}
if((a+b != b+c)&&(b+c != c+a)&&(a+b != c+a)){
count++;
}
}
}

console.log("The number of ways to split the string : " +count);