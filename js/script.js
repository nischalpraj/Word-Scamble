const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctwords;
const initgame = () => {
  let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
  let wordsArray = randomObj.word.split(""); // splitting each letter of word
  for (let i = wordsArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // getting random number
    let temp = wordsArray[i];
    wordsArray[i] = wordsArray[j];
    wordsArray[j] = temp;
  }
  wordText.innerText = wordsArray.join(""); //passing shuffled word as word text
  hintText.innerText = randomObj.hint; //passing hint as hint text
  correctwords = randomObj.word.toLocaleLowerCase(); //passing word to correctword variable
  inputField.value = ""; //making input field blank
  inputField.setAttribute("maxlength", correctwords.length); //setting input max length attribute
  console.log(wordsArray, randomObj.word);
};
initgame();

const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase(); //getting user value
  if (!userWord) return alert("Please enter a word to check!");
  if (userWord !== correctwords)
    return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
  initgame();
};

refreshBtn.addEventListener("click", initgame);
checkBtn.addEventListener("click", checkWord);
