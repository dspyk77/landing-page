var cardGameDisplayBox = document.querySelector("#card-game-display-box");
var playerGifBox = document.querySelector("#player-gif-box");
var displayPlayerCard = document.querySelector("#display-player-card");
var cpuGifBox = document.querySelector("#cpu-gif-box");
var displayCpuCard = document.querySelector("#display-cpu-card");
var displayPlayerCardName = document.querySelector("#display-player-card-name");
var displayCpuCardName = document.querySelector("#display-cpu-card-name");
var wonLostMessage = document.querySelector("#won-lost-msg");
var displayPlayerCardTopName = document.querySelector("#player-card-top-name");
var displayPlayerCardBottomName = document.querySelector("#player-card-bottom-name");
var displayCpuCardTopName = document.querySelector("#cpu-card-top-name");
var displayCpuCardBottomName = document.querySelector("#cpu-card-bottom-name");
var displayPlayerSuit = document.querySelector("#player-suit-display");
var displayCpuSuit = document.querySelector("#cpu-suit-display");
var displayResultsBlock = document.querySelector("#results-block")
var lightSummarySection = document.querySelector("#light-summary-section")
var cardDisplaySection = document.querySelector("#card-display-section")
var displayAllDoneSection = document.querySelector("#all-done-section")
var cardGameSection = document.querySelector("#card-game-section")
var drawCardBtn = document.querySelector("#draw-card-btn")
var drawAgainBtn = document.querySelector("#draw-again-btn")
var allDoneBtn = document.querySelector("#all-done-btn")
var lastDrawCardBtn = document.querySelector("#last-draw-card-btn")

var cpuDrawnGifTime = null
var clearCpuGifBoxTime = null
var cardDisplayCycleTime = null
var cpuGifFuncTime = null
var displayResultsTime = null

// see ./assets/card-generation.js
var cardDeck = genCardDeck();

// on click drawn card btn
// one way
drawCardBtn.addEventListener("click", playGame);
// another way 
lastDrawCardBtn.addEventListener("click", () => {
  playGame()
});

allDoneBtn.addEventListener("click", () => {
  doneWithGame() 
});

drawAgainBtn.addEventListener("click", () => {
  playAgain() 
});

function playGame() {
  // if user wants to play again after clicking "all done" btn 
  hideCardDisplaySection()
  
  cardDisplaySection.className = "d-block"
  displayAllDoneSection.className = "d-none"
  
  // clear all boxs 
  clearAllBox();
  stopTime();
  
  // index random card 
  var playerCardIndex = getRandomInt(0, 51);
  var cpuCardIndex = getRandomInt(0, 51);
  var playerCard =  cardDeck[playerCardIndex]
  var cpuCard =  cardDeck[cpuCardIndex]

  // display player card 
  playerCardDisplayCycle(playerCard)
  
  // then player GIF
  displayPlayerGifFunc(playerCard)

  displayTimeout(playerCard, cpuCard)
}



function displayTimeout(playerCard, cpuCard) {
  // cpu draw gif
  cpuDrawnGifTime = setTimeout(displayCpuDrawGifFunc, 2000)

  // then CPU card 
  clearCpuGifBoxTime = setTimeout(clearCpuGifBox, 8000)

  // then CPU card 
  cardDisplayCycleTime = setTimeout(cpuCardDisplayCycle, 8200, cpuCard)

  // then cpu Gif
  cpuGifFuncTime = setTimeout(displayCpuGifFunc, 8400, playerCard, cpuCard)
  
  // player won/lost 
  displayResultsTime = setTimeout(displayResults, 10400, playerCard, cpuCard)
}

function stopTime() {
  clearTimeout(cpuDrawnGifTime)
  clearTimeout(clearCpuGifBoxTime)
  clearTimeout(cardDisplayCycleTime)
  clearTimeout(cpuGifFuncTime)
  clearTimeout(displayResultsTime)
}

function displayResults(playerCard, cpuCard) {
  displayResultsBlock.className = "d-block mt-4 mb-4"
  if (playerCard.value > cpuCard.value) {
    wonLostMessage.insertAdjacentHTML("beforeend",`
      <img src="./assets/gifs/the_office_party.gif">
      <p class="fs-3">${playerCard.name} of ${playerCard.suit} is higher than ${cpuCard.name} of ${cpuCard.suit}, you won!</p>
    `);
  } else if (playerCard.value < cpuCard.value) {
    wonLostMessage.insertAdjacentHTML("beforeend",`
      <img src="./assets/gifs/the_office_no.webp">
      <p class="fs-3">${playerCard.name} of ${playerCard.suit} is lower than ${cpuCard.name} of ${cpuCard.suit}, tough luck!!</p>
    `);
  } else {
    wonLostMessage.insertAdjacentHTML("beforeend",`
      <img src="./assets/gifs/tie-gif.webp">
      <p class="fs-3">${playerCard.name} of ${playerCard.suit} has the same value as ${cpuCard.name} of ${cpuCard.suit}</p>
      <p class="fw-semibold">It's a Draw! You're saying to yourself, "I know thats kind of the point, we're drawing cards" I mean your cards are the same.. 
      well the value is the same, not neccesaraly the same exact card, the suit might be different... whatever you get it just draw again</p>
    `);
  }
  
  cpuGifBox.scrollIntoView()
}

function displayCpuGifFunc(playerCard, cpuCard) {
  if (playerCard.value < cpuCard.value) {
    cpuGifBox.insertAdjacentHTML(
      "beforeend", `<img src="./assets/gifs/robot_dance-gif.webp">`
    );
  } else {
    cpuGifBox.insertAdjacentHTML(
      "beforeend", `<img src="./assets/gifs/robot_lost-gif.webp">`
    );
  }
  // cpuGifBox.scrollIntoView()
}

function cpuCardDisplayCycle(cpuCard) {

  if (cpuCard.color == "Black") {
    displayCpuCard.className =
      "col-2 border rounded bg-dark text-bg-dark fw-bold";
  } else {
    displayCpuCard.className = "col-2 border rounded bg-danger fw-bold";
  }

  displayCpuCardTopName.insertAdjacentHTML("beforeend", `<p>${cpuCard.displayName}</p>`);

  displayCpuSuit.insertAdjacentHTML("beforeend", cpuCard.displaySuit);

  displayCpuCardBottomName.insertAdjacentHTML("beforeend", `<p>${cpuCard.displayName}</p>`);

  displayCpuCardName.insertAdjacentHTML("beforeend",`<p class="fs-3">${cpuCard.name} of ${cpuCard.suit}</p>`);

  // displayCpuCard.scrollIntoView()
}

function displayCpuDrawGifFunc() {
  // this forces the browser to GET the GIF for every drawn btn click. If user draws before the timed display finishes the draw GIF now fully resets
  
  cpuGifBox.insertAdjacentHTML(
    "beforeend", `<img src="./assets/gifs/cpu_draw_card-gif.webp?thingy=${performance.now()}">`
  );
  displayCpuCard.scrollIntoView()
}

function playerCardDisplayCycle(playerCard) {
  if (playerCard.color == "Black") {
    displayPlayerCard.className =
      "col-2 border rounded bg-dark text-bg-dark fw-bold";
  } else {
    displayPlayerCard.className = "col-2 border rounded bg-danger fw-bold";
  }

  displayPlayerCardTopName.insertAdjacentHTML("beforeend", `<p>${playerCard.displayName}</p>`);

  displayPlayerSuit.insertAdjacentHTML("beforeend", playerCard.displaySuit);

  displayPlayerCardBottomName.insertAdjacentHTML("beforeend", `<p>${playerCard.displayName}</p>`);

  displayPlayerCardName.insertAdjacentHTML("beforeend",`<p class="fs-3">${playerCard.name} of ${playerCard.suit}</p>`);

  cardDisplaySection.scrollIntoView()
}

function displayPlayerGifFunc(playerCard){
  
  if (playerCard.value <= 3) {
    playerGifBox.insertAdjacentHTML("beforeend", `<img src="./assets/gifs/sweating-gif.webp">`
    );
  } else if (playerCard.value >= 3 && playerCard.value <= 7) {
    playerGifBox.insertAdjacentHTML("beforeend", `<img src="./assets/gifs/really-gif.webp">`
    );
  } else if (playerCard.value >= 7 && playerCard.value <= 10) {
    playerGifBox.insertAdjacentHTML("beforeend", `<img src="./assets/gifs/so_so-gif.webp">`
    );
  } else if (playerCard.value >= 10 && playerCard.value <= 13) {
    playerGifBox.insertAdjacentHTML("beforeend", `<img src="./assets/gifs/spongebob_smile-gif.webp">`
    );
  } else if (playerCard.value == 14) {
    playerGifBox.insertAdjacentHTML("beforeend", `<img src="./assets/gifs/king-gif.webp">`
    );
  } 
}

function clearAllBox() {
  wonLostMessage.innerHTML = "";
  displayPlayerCardTopName.innerHTML = "";
  displayPlayerCardBottomName.innerHTML = "";
  displayCpuCardTopName.innerHTML = "";
  displayCpuCardBottomName.innerHTML = "";
  displayPlayerCardName.innerHTML = "";
  displayCpuCardName.innerHTML = "";
  displayPlayerSuit.innerHTML = "";
  displayCpuSuit.innerHTML = "";
  displayPlayerCard.className = "";
  displayCpuCard.className = "";
  playerGifBox.innerHTML = "";
  cpuGifBox.innerHTML = "";
}

function clearCpuGifBox() {
  cpuGifBox.innerHTML = "";
}

function hideCardDisplaySection() {
  cardDisplaySection.className = "d-none"
  displayResultsBlock.className = "d-none"
}

function doneWithGame() {
  hideCardDisplaySection()

  displayAllDoneSection.className = "bg-light pb-5 px-5 rounded"
  displayAllDoneSection.scrollIntoView()
}

function playAgain() {
  cardGameSection.scrollIntoView()

  setTimeout(playGame, 800)
}

function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
