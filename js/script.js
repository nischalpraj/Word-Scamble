const initgame = () => {
  let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
  let wordsArray = randomObj.word.split(""); // splitting each letter of word
  console.log(wordsArray);
};
initgame();
