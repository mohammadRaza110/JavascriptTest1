function totalApples(arr){
    let chan = 0;
    for(let i = 0; i < arr.length;i++){
       chan = chan += arr[i];
    } return chan;
}
console.log(totalApples([]))