const main = [1, 1, 2, 4, 3, 3];
var a1 = [];
var a2 = [];
if (main.length % 2== 0){
    for (i = 0; i <= main.length - 1; i++) {
        if (!a1.includes(main[i]) & (a1.length !== main.length / 2)) {
             a1.push(main[i]);
             } 
             else {
                a2.push(main[i]);
                }
    }
    for(i=0;i < a1.length; i++){
        if(!a1.includes(a2[i])){
            n=a1[i];
            a1[i]=a2[i];            
            a2[i]=n;   
            n=0;
            console.log(n);        
         }
    }
        console.log(a1, a2);
}
else{
    console.log("[]");
}
