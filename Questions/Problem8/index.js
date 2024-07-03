function countBooks(obj) {
    let ar = [];
    for (let i = 0; i < obj.length; i++) {        
        if (ar[obj[i].genre]) {
            ar[obj[i].genre]++;
        } else {
            ar[obj[i].genre] = 0;
        }
    }
    return ar;
  }
console.log(
    countBooks([
    { title: "Apple", genre: "fiction" },
    { title: "Banana", genre: "Non-fiction" },
    { title: "Cheery", genre: "fiction" },
  ])
);
