function totalApples(arr, num) {
  let ar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Price > num) {
      ar.push({ name: `${arr[i].name}`, price: `${arr[i].Price}` });
    }
  }
  return ar;
}
console.log(
  totalApples(
    [
      { name: "Apple", Price: 1 },
      { name: "Banana", Price: 6 },
      { name: "Cheery", Price: 5 },
    ],
    3
  )
);
