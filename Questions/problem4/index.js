function totalApples(arr){
    let chan = 0;
    for(let i = 0; i < arr.length;i++){
       chan = chan += arr[i] / arr.length;
       
    } return chan;
}
console.log(totalApples([10,30,30]))