// letters
let letters = "abcdefghijklmnopqrstuvwxyz";

// get array
let lettesArray = Array.from(letters);

// sellect letters container
let lettersContainer = document.querySelector(".letters");

// generate letters
lettesArray.forEach((letter) => {
  // creaat span
  let span = document.createElement("span");
  //   creat letter text node
  let Theletter = document.createTextNode(letter);

  //   APPEN LETTER TO SPAN
  span.appendChild(Theletter);
  //   add class to span
  span.className = "letter-box";
  //   append span to Theletters container
  lettersContainer.appendChild(span);
});

// OBJECT OF WORDS + CATEGORIES

const words = {
  programing: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "prestige",
    "inception",
    "parasite",
    "intersteller",
    "whiplash",
    "memento",
    "coco",
    "up",
  ],
  people: [
    "albert einshtein",
    "hitchcoc",
    "alexander",
    "cleopatra",
    "mahtma ghandi",
  ],
  countries: ["syria", "palastine", "yemen", "Egypt", "Bahrin", "Qatar"],
};

// get random probiorty

let allkeys = Object.keys(words);

// random number depend on keys length

let randomprobnumber = Math.floor(Math.random() * allkeys.length);

// category

let randomprobname = allkeys[randomprobnumber];

// category words
let randomprobvalue = words[randomprobname];

// random number depend on words

let randomvaluenumber = Math.floor(Math.random() * randomprobvalue.length);

//

let randomvaluevalue = randomprobvalue[randomvaluenumber];

// set category info
document.querySelector(".game-info .category span").innerHTML = randomprobname;

// select  letters  guess element

let lettersguesscontainer = document.querySelector(".letters-guess");

// convert choosen word to array
let lettersAndspace = Array.from(randomvaluevalue);

// creat spans depends on word
lettersAndspace.forEach((letter) => {
  let emptyspan = document.createElement("span");
  // if letter is space
  if (letter == " ") {
    // add class to span
    emptyspan.className = "with-space";
  }
  // append span to letter guess container
  lettersguesscontainer.appendChild(emptyspan);
});

// select guess span
let guessSpans = document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttempts = 0;

// select the drow element
let thedrow = document.querySelector(".hangman-drow");

// handle clicking on letters
document.addEventListener("click", (e) => {
  // set the choose status
  let thestatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("Clicked");

    // get clicked letter
    let theclickedliteer = e.target.innerHTML.toLowerCase();
    // the choosen word
    let thechoosenword = Array.from(randomvaluevalue.toLowerCase());
    thechoosenword.forEach((wordletter, wordindex) => {
      // if the ckicked litter  === one of the choosen word letter
      if (theclickedliteer === wordletter) {
        //  set status to correct
        thestatus = true;
        // loop on all guess spans
        guessSpans.forEach((span, spanIndex) => {
          if (wordindex === spanIndex) {
            span.innerHTML = theclickedliteer;
          }
        });
      }
    });
    // outside loop
    // if letter is wrong
    if (thestatus !== true) {
      // increase the wrongAttempt
      wrongAttempts++;

      // add class wrong on the drow element
      thedrow.classList.add(`wrong-${wrongAttempts}`);
      // play fail sound
      document.getElementById("fail").play();
      if (wrongAttempts === 8) {
        endgame();
        lettersContainer.classList.add("finished");
      }
    } else {
      document.getElementById("sucsess").play();
    }
  }
});

function endgame() {
  // creat popup
  let div = document.createElement("div");

  // creat Text
  let divText = document.createTextNode(
    `Game Over , The Word Is "${randomvaluevalue}"`
  );

  // append text to div
  div.appendChild(divText);

  // add class to div
  div.className = "popup";

  // append to the body
  document.body.appendChild(div);
}
