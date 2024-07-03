function totalApples(arr){
    let chan = 0;
    for(let i = 0; i < arr.length;i++){
       chan = chan += arr[i].Price / arr.length;
    } return chan;
}
console.log(totalApples([{"name":"Apple",
                           "Price": 1},
                         {"name":"Banana",
                            "Price": 2
                         },
                         {"name":"Cheery",
                            "Price":3
                         }]))