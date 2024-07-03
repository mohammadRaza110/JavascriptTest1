function countPositive(arr){
    let total = 0;
    for(let i = 0; i < arr.length;i++){
        if (arr[i] > 0){
            total++
        }
    } return total
}
console.log(countPositive([1,-1,-2,-3]))


