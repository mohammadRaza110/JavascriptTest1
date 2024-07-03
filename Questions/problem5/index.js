function oldestPerson(age) {
  let oldest = age[0];
  let obj = {}
  for (let i = 0; i < age.length; i++) {
    if (age[i].ages > oldest.ages ) {
      obj =  age[i]
    }else {
        obj =  oldest
    }
  };

  return obj
};

console.log('answer',
  oldestPerson([
      { name: "Alice", ages: 30 },
      { name: "Charlie", ages: 25 },
      { name: "Bob", ages: 35 },
  ])
);
