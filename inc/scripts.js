//Selecting importent tags
const msg = document.querySelector(".msg");
const guessBox = document.querySelector(".guess-box");
const btn = document.querySelector(".btn");
const currentScore = document.querySelector(".currentScore");
const lives = document.querySelector(".lives");

//Importent variables
let play = false;
const scrWords = [
  "complete",
  "suffle",
  "scramble",
  "water",
  "bat",
  "ball",
  "monkey",
  "programmer",
  "programming",
  "angle",
  "degree",
  "human",
  "man",
  "men",
  "woman",
  "women",
  "bangladesh",
  "primary",
  "first",
  "cry",
  "laugh",
  "leaf",
  "live",
  "life",
  "problem",
  "output",
  "input",
  "script",
  "style",
  "language",
  "bangla",
  "english",
  "international",
  "national",
  "nation",
];
let scrWord = "";
let randWord = "";
let life = 3;
let score = 0;
//Function
const wordGenerate = () => {
  const randNum = Math.floor(Math.random() * scrWords.length);
  return scrWords[randNum];
};
const scramble = (arrWord) => {
  for (i = arrWord.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = arrWord[i];
    arrWord[i] = arrWord[j];
    arrWord[j] = temp;
  }
  return arrWord;
};
const playGame = () => {
  if (!play) {
    play = true;
    lives.innerHTML = life;
    guessBox.classList.toggle("hide");
    btn.innerHTML = "Guess";
    randWord = wordGenerate();
    scrWord = scramble(randWord.split(""));
    msg.innerHTML = `Guess the word: ${scrWord.join("")}`;
    guessBox.focus();
  } else {
    const userInput = guessBox.value;
    if (userInput === randWord) {
      play = false;
      currentScore.innerHTML = ++score;
      msg.innerHTML = "Your answer is correct";
      btn.innerHTML = "Guess again";
      guessBox.classList.toggle("hide");
      guessBox.value = "";
    } else {
      msg.innerHTML = `Sorry! your guess is wrong. Please try again: ${scrWord.join(
        ""
      )}`;
      btn.innerHTML = "Try again";
      lives.innerHTML = --life;
      if (life === 0) {
        play = false;
        score = 0;
        life = 3;
        currentScore.innerHTML = score;
        msg.innerHTML = "Game Over!";
        guessBox.value = "";
        guessBox.classList.toggle("hide");
        btn.innerHTML = "Start Again";
      }
    }
  }
};

//Eventlistener
btn.addEventListener("click", playGame);
document.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    playGame();
  }
});
