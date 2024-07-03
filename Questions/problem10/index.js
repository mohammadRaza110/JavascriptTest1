function totalApples(arr){
    let chan = 0;
    for(let i = 0; i < arr.length;i++){
       chan = chan += arr[i].Price;
    } return chan;
}
console.log(totalApples([{"name":"Apple",
                           "Price": 100},
                         {"name":"Banana",
                            "Price": 200
                         },
                         {"name":"Cheery",
                            "Price":300
                         }]))