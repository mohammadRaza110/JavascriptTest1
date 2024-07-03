function vaultCode(sentence) {
  let words = sentence.split(" ");
  console.log(words);
  let ret = "";
  let vowels = "aeiou";
  let num = "0123456789";

  for (let i = 0; i < words.length; i++) {
    let wor = words[i];

    const splitWord = wor.split("");

    const splittedWordsFilter = splitWord.some((a) => vowels.includes(a));
    if (wor.length >= 5 && splittedWordsFilter) {
      for (let j = 0; j < wor.length; j++) {
        if (num.includes(wor[j])) {
          ret += wor[j];
          break;
        }
      }
    }
  }
  if (ret.length === 0) {
    return "No Code Found";
  } else {
    return ret;
  }
}
console.log(
  vaultCode("complex123 problem lot4")
);
