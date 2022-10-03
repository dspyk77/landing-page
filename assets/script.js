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
// see ./assets/card-generation.js
var cardDeck = genCardDeck();

// investigate using event listeners for on click and hide/show GIF

// psuedo code
// on click drawn card btn
function playGame() {

  // clear all boxs 
  clearAllBox();
  
  // index random card 
  var playerCardIndex = getRandomInt(0, 51);
  var cpuCardIndex = getRandomInt(0, 51);
  var playerCard =  cardDeck[playerCardIndex]
  var cpuCard =  cardDeck[cpuCardIndex]

  // display player card 
  // var playerCardDrawnNameDisplay = cardDeck[playerCardIndex].displayName;
  // var playerCardDrawnSuitDisplay = cardDeck[playerCardIndex].displaySuit;
  // var playerCardDrawnName = cardDeck[playerCardIndex].name;
  // var playerCardDrawnSuit = cardDeck[playerCardIndex].suit;
  playerCardDisplayCycle(playerCard)

  // then player GIF
  displayPlayerGifFunc(playerCard)

  // cpu draw gif
  setTimeout(displayCpuDrawGifFunc, 2000)

  // then CPU card 
  setTimeout(clearCpuGifBox, 8000)
  setTimeout(cpuCardDisplayCycle, 8200, cpuCard)

  // then cpu Gif
  setTimeout(displayCpuGifFunc, 8400, playerCard, cpuCard)
  
  // player won/lost 
  setTimeout(displayResults, 10400, playerCard, cpuCard)
}


// display CPU drawing GIF function 
  // cpuGifBox insertAdjacentHTM

// display cpu card name and suit function 
  // pass in indexed cards (playerCardIndex, cpuCardIndex)
  // declare cpuCardDrawnNameDisplay - cpuCardDrawnSuitDisplay
  // displayCpuCardTopName, displayCpuCardBottomName and cpuCardDrawnSuitDisplay insertAdjacentHTML

// display card color function 
  // pass in indexed cards (playerCardIndex, cpuCardIndex)
  // check cardDeck[playerCardIndex].color
  // set displayPlayerCard.className acordingly 


    
// display player won/lost string and GIF function
    // pass in indexed cards value (playerCardIndex - cpuCardIndex)
    // declare variable's playerCardDrawnName - playerCardDrawnSuit - cpuCardDrawnName - cpuCardDrawnSuit - playerCardDrawnValue - cpuCardDrawnValue
    // check higher lower value if (playerCardIndex > cpuCardIndex) ext. to display player won/lost string and GIF
    // playerGifBox insertAdjacentHTM


function displayResults(playerCard, cpuCard) {
  if (playerCard.value > cpuCard.value) {
    wonLostMessage.insertAdjacentHTML(
      "beforeend",
      `
      <p>${playerCard.name} of ${playerCard.suit} is higher than ${cpuCard.name} of ${cpuCard.suit}, you won!</p>
      <div style="width:480px"><img allow="fullscreen" frameBorder="0" height="270" src="https://i.giphy.com/G96zgIcQn1L2xpmdxi.gif" width="480"></img></div>
    `
    );
  } else if (playerCard.value < cpuCard.value) {
    wonLostMessage.insertAdjacentHTML(
      "beforeend",
      `
      <p>${playerCard.name} of ${playerCard.suit} is lower than ${cpuCard.name} of ${cpuCard.suit}, tough luck!!</p>
      <img src="./assets/nooo-gif.webp">
    `
    );
  } else {
    wonLostMessage.insertAdjacentHTML(
      "beforeend",
      `
      <p>${playerCard.name} of ${playerCard.suit} has the same value as ${cpuCard.name} of ${cpuCard.suit}</p><br>
      <p>It's a Draw! You're saying to yourself, "I know thats kind of the point, we're drawing cards" I mean your cards are the same.. 
      well the value is the same, not neccesaraly the same exact card, the suit might be different... whatever you get it just draw again</p>
      <iframe src="https://giphy.com/embed/VPevIZhmlNOms" width="384" height="480"></iframe>
    `
    );
  }
  wonLostMessage.scrollIntoView()
}

function displayCpuGifFunc(playerCard, cpuCard) {
  if (playerCard.value < cpuCard.value) {
    cpuGifBox.insertAdjacentHTML(
      "beforeend", `<iframe src="https://giphy.com/embed/tczJoRU7XwBS8" width="480" height="360"></iframe>`
    );
  } else {
    cpuGifBox.insertAdjacentHTML(
      "beforeend", `<iframe src="https://giphy.com/embed/l46CwEYnbFtFfjZNS" width="480" height="472"></iframe>`
    );
  }
  wonLostMessage.scrollIntoView()
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

  displayCpuCardName.insertAdjacentHTML("beforeend",`<p>${cpuCard.name} of ${cpuCard.suit}</p>`);
}

function displayCpuDrawGifFunc() {
  cpuGifBox.insertAdjacentHTML(
    "beforeend", `<iframe src="https://giphy.com/embed/Jk8F8BanWi3Is" width="480" height="480"></iframe>`
  );
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

  displayPlayerCardName.insertAdjacentHTML("beforeend",`<p>${playerCard.name} of ${playerCard.suit}</p>`);

  

   // var playerCard = cardDeck[playerCardIndex]

  // if (playerCard.color == "Black") {
  //   displayPlayerCard.className =
  //     "col-2 border rounded bg-dark text-bg-dark fw-bold";
  // } else {
  //   displayPlayerCard.className = "col-2 border rounded bg-danger fw-bold";
  // }

  // displayPlayerCardTopName.insertAdjacentHTML("beforeend", `<p>${playerCard.displayName}</p>`);

  // displayPlayerSuit.insertAdjacentHTML("beforeend", playerCard.displaySuit);

  // displayPlayerBottomTopName.insertAdjacentHTML("beforeend", `<p>${playerCard.displayName}</p>`);

  // displayPlayerCardName.insertAdjacentHTML("beforeend",`<p>${playerCard.name} of ${playerCard.suit}</p>`);

}

function displayPlayerGifFunc(playerCard){
  if (playerCard.value <= 3) {
    playerGifBox.insertAdjacentHTML(
      "beforeend", `<img src="./assets/sweating-gif.webp">`
    );
  } else if (playerCard.value >= 3 && playerCard.value <= 7) {
    playerGifBox.insertAdjacentHTML(
      "beforeend", `<iframe src="https://giphy.com/embed/5fBH6zf7l8bxukYh74Q" width="480" height="269"></iframe>`
    );
  } else if (playerCard.value >= 7 && playerCard.value <= 10) {
    playerGifBox.insertAdjacentHTML(
      "beforeend", `<iframe src="https://giphy.com/embed/WG3RPgRpOtBt0rzZPW" width="480" height="343"></iframe>`
    );
  } else if (playerCard.value >= 10 && playerCard.value <= 13) {
    playerGifBox.insertAdjacentHTML(
      "beforeend", `<iframe src="https://giphy.com/embed/blFCQZx7vSzKM" width="480" height="360"></iframe>`
    );
  } else if (playerCard.value == 14) {
    playerGifBox.insertAdjacentHTML(
      "beforeend", `<iframe src="https://giphy.com/embed/LfPkNKuEjr9Ju" width="480" height="360"></iframe>`
    );
  } 

  wonLostMessage.scrollIntoView()
   // if (playerCard.value <= 3) {
  //   playerGifBox.insertAdjacentHTML(
  //     "beforeend", `<iframe src="https://giphy.com/embed/32mC2kXYWCsg0" width="480" height="270"></iframe>`
  //   );
  // } else if (playerCard.value >= 3 && playerCard.value <= 7) {
  //   playerGifBox.insertAdjacentHTML(
  //     "beforeend", `<iframe src="https://giphy.com/embed/5fBH6zf7l8bxukYh74Q" width="480" height="269"></iframe>`
  //   );
  // } else if (playerCard.value >= 7 && playerCard.value <= 10) {
  //   playerGifBox.insertAdjacentHTML(
  //     "beforeend", `<iframe src="https://giphy.com/embed/WG3RPgRpOtBt0rzZPW" width="480" height="343"></iframe>`
  //   );
  // } else if (playerCard.value >= 10 && playerCard.value <= 13) {
  //   playerGifBox.insertAdjacentHTML(
  //     "beforeend", `<iframe src="https://giphy.com/embed/blFCQZx7vSzKM" width="480" height="360"></iframe>`
  //   );
  // } else if (playerCard.value == 14) {
  //   playerGifBox.insertAdjacentHTML(
  //     "beforeend", `<iframe src="https://giphy.com/embed/LfPkNKuEjr9Ju" width="480" height="360"></iframe>`
  //   );
  // }
}

// function to get random card for both players
function getDrawnCard() {
  var playerCardIndex = getRandomInt(0, 51);
  var cpuCardIndex = getRandomInt(0, 51);

  var playerCardDrawnValue = cardDeck[playerCardIndex].value;
  var cpuCardDrawnValue = cardDeck[cpuCardIndex].value;
  var playerCardDrawnName = cardDeck[playerCardIndex].name;
  var cpuCardDrawnName = cardDeck[cpuCardIndex].name;
  var playerCardDrawnSuit = cardDeck[playerCardIndex].suit;
  var cpuCardDrawnSuit = cardDeck[cpuCardIndex].suit;
  var playerCardDrawnNameDisplay = cardDeck[playerCardIndex].displayName;
  var cpuCardDrawnNameDisplay = cardDeck[cpuCardIndex].displayName;
  var playerCardDrawnSuitDisplay = cardDeck[playerCardIndex].displaySuit;
  var cpuCardDrawnSuitDisplay = cardDeck[cpuCardIndex].displaySuit;

  clearAllBox();


    if (cardDeck[playerCardIndex].color == "Black") {
      displayPlayerCard.className =
        "col-2 border rounded bg-dark text-bg-dark fw-bold";
      inputPlayerIndex();
    } else {
      displayPlayerCard.className = "col-2 border rounded bg-danger fw-bold";
      inputPlayerIndex();
    }

    if (cardDeck[cpuCardIndex].color == "Black") {
      displayCpuCard.className =
        "col-2 border rounded bg-dark text-bg-dark fw-bold";
      inputCpuIndex();
    } else {
      displayCpuCard.className = "col-2 border rounded bg-danger fw-bold";
      inputCpuIndex();
    }


  function inputPlayerIndex() {
    // player card
    displayPlayerCardTopName.insertAdjacentHTML(
      "beforeend",
      `
  <p>${playerCardDrawnNameDisplay}</p>
  `
    );

    displayPlayerSuit.insertAdjacentHTML(
      "beforeend",
      playerCardDrawnSuitDisplay
    );

    displayPlayerBottomTopName.insertAdjacentHTML(
      "beforeend",
      `
  <p>${playerCardDrawnNameDisplay}</p>
  `
    );

    displayPlayerCardName.insertAdjacentHTML(
      "beforeend",
      `
    <p>${playerCardDrawnName} of ${playerCardDrawnSuit}</p>
  `
    );
  }

  function inputCpuIndex() {
    // cpu card
    displayCpuCardTopName.insertAdjacentHTML(
      "beforeend",
      `
  <p>${cpuCardDrawnNameDisplay}</p>
`
    );

    displayCpuSuit.insertAdjacentHTML(
      "beforeend",
      cpuCardDrawnSuitDisplay
      );

    displayCpuCardBottomName.insertAdjacentHTML(
      "beforeend",
      `
  <p>${cpuCardDrawnNameDisplay}</p>
`
    );

    displayCpuCardName.insertAdjacentHTML(
      "beforeend",
      `
    <p>${cpuCardDrawnName} of ${cpuCardDrawnSuit}</p>
  `
    );
  }
  
  if (playerCardDrawnValue > cpuCardDrawnValue) {
    wonLostMessage.insertAdjacentHTML(
      "beforeend",
      `
      <p>${playerCardDrawnName} of ${playerCardDrawnSuit} is higher than ${cpuCardDrawnName} of ${cpuCardDrawnSuit}, you won!</p>
      <div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/G96zgIcQn1L2xpmdxi/video" width="480"></iframe></div>
    `
    );
  } else if (playerCardDrawnValue < cpuCardDrawnValue) {
    wonLostMessage.insertAdjacentHTML(
      "beforeend",
      `
      <p>${playerCardDrawnName} of ${playerCardDrawnSuit} is lower than ${cpuCardDrawnName} of ${cpuCardDrawnSuit}, tough luck!!</p>
      <iframe src="https://giphy.com/embed/d8SRR4aDUINuU" width="480" height="480">
    `
    );
  } else {
    wonLostMessage.insertAdjacentHTML(
      "beforeend",
      `
      <p>${playerCardDrawnName} of ${playerCardDrawnSuit} has the same value as ${cpuCardDrawnName} of ${cpuCardDrawnSuit}</p><br>
      <p>It's a Draw! You're saying to yourself, "I know thats kind of the point, we're drawing cards" I mean your cards are the same.. 
      well the value is the same, not neccesaraly the same exact card, the suit might be different... whatever you get it just draw again</p>
      <iframe src="https://giphy.com/embed/VPevIZhmlNOms" width="384" height="480"></iframe>
    `
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

function clearCpuGifBox () {
  cpuGifBox.innerHTML = "";
}

function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
