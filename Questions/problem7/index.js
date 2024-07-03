function totalDistance(val){
    let a = 0;
    for(let i = 0; i < val.length;i++){
       a = a += val[i];
    } return a;
}
console.log(totalDistance([5, 10,15]))