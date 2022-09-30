var cardGameDisplayBox = document.querySelector("#card-game-display-box");
var playerGifBox = document.querySelector("#player-gif-box");
var displayPlayerCard = document.querySelector("#display-player-card");
var cpuGifBox = document.querySelector("#cpu-gif-box");
var displayCpuCard = document.querySelector("#display-cpu-card");
var displayPlayerCardName = document.querySelector("#display-player-card-name");
var displayCpuCardName = document.querySelector("#display-cpu-card-name");
var wonLostMessage = document.querySelector("#won-lost-msg");
var displayPlayerCardTopName = document.querySelector("#player-card-top-name");
var displayPlayerBottomTopName = document.querySelector("#player-card-bottom-name");
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
  console.log("I work!")

  // clear all boxs 
  clearAllBox();
  
  // index random card 
  var playerCardIndex = getRandomInt(0, 51);
  var cpuCardIndex = getRandomInt(0, 51);
  console.log(playerCardIndex)
  console.log(cpuCardIndex)

  // display player card 
  // var playerCardDrawnNameDisplay = cardDeck[playerCardIndex].displayName;
  // var playerCardDrawnSuitDisplay = cardDeck[playerCardIndex].displaySuit;
  // var playerCardDrawnName = cardDeck[playerCardIndex].name;
  // var playerCardDrawnSuit = cardDeck[playerCardIndex].suit;
  displayPlayerCardFunc(playerCardIndex)

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

  // then player GIF

  // then CPU draw GIF

  // then CPU card 

  // player won/lost 

}
// function layout
// display player card name and suit function 
  // pass in indexed cards (playerCardIndex, cpuCardIndex)
  // declare playerCardDrawnNameDisplay - playerCardDrawnSuitDisplay
  // displayPlayerCardTopName, displayPlayerCardBottomName and playerCardDrawnSuitDisplay insertAdjacentHTML

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

// player value GIF function
// if
  // display GIF if player card value is >=3 (sweating GIF)
    // pass in indexed cards value (playerCardIndex - cpuCardIndex)
    //  check if player value 
    // if >=3 display GIF for length of GIF then hide
    // playerGifBox insertAdjacentHTM

    // else if 

  // display GIF if player card value is 3 <= 7 (Really... GIF)
    // pass in indexed cards value (playerCardIndex - cpuCardIndex)
    //  check if player value 
    // if 3 <= 7 display GIF for length of GIF then hide
    // playerGifBox insertAdjacentHTM

    // else if 

  // display GIF if player card value is 7 <= 10 (eh so so GIF)
    // pass in indexed cards value (playerCardIndex - cpuCardIndex)
    //  check if player value 
    // if 7 <= 10 display GIF for length of GIF then hide
    // playerGifBox insertAdjacentHTM

    // else if 

  // display GIF if player card value is 10 <= 13 (spongebob smile GIF)
    // pass in indexed cards value (playerCardIndex - cpuCardIndex)
    //  check if player value 
    // if 10 <= 13 display GIF for length of GIF then hide
    // playerGifBox insertAdjacentHTM

    // else if 

  // display GIF if player card value is ==14 (King GIF)
    // pass in indexed cards value (playerCardIndex - cpuCardIndex)
    //  check if player value 
    // if ==14 display GIF for length of GIF then hide
    // playerGifBox insertAdjacentHTM
    
// display player won/lost string and GIF function
    // pass in indexed cards value (playerCardIndex - cpuCardIndex)
    // declare variable's playerCardDrawnName - playerCardDrawnSuit - cpuCardDrawnName - cpuCardDrawnSuit - playerCardDrawnValue - cpuCardDrawnValue
    // check higher lower value if (playerCardIndex > cpuCardIndex) ext. to display player won/lost string and GIF
    // playerGifBox insertAdjacentHTM


function displayPlayerCardFunc(playerCardIndex) {
  var playerCard = cardDeck[playerCardIndex]

  if (playerCard.color == "Black") {
    displayPlayerCard.className =
      "col-2 border rounded bg-dark text-bg-dark fw-bold";
  } else {
    displayPlayerCard.className = "col-2 border rounded bg-danger fw-bold";
  }

  displayPlayerCardTopName.insertAdjacentHTML("beforeend", `<p>${playerCard.displayName}</p>`);

  displayPlayerSuit.insertAdjacentHTML("beforeend", playerCard.displaySuit);

  displayPlayerBottomTopName.insertAdjacentHTML("beforeend", `<p>${playerCard.displayName}</p>`);

  displayPlayerCardName.insertAdjacentHTML("beforeend",`<p>${playerCard.name} of ${playerCard.suit}</p>`);
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

  function displaySweatingGif() {
    playerGifBox.insertAdjacentHTML(
      "beforeend",
      `
      <iframe src="https://giphy.com/embed/32mC2kXYWCsg0" width="480" height="270"></iframe>
    `
    );
  }

  // setTimeout(hideGif, 2800);
  // setTimeout(randomCard, 2900);
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
  displayPlayerBottomTopName.innerHTML = "";
  displayCpuCardTopName.innerHTML = "";
  displayCpuCardBottomName.innerHTML = "";
  displayPlayerCardName.innerHTML = "";
  displayCpuCardName.innerHTML = "";
  displayPlayerSuit.innerHTML = "";
  displayCpuSuit.innerHTML = "";
  displayPlayerCard.className = "";
  displayCpuCard.className = "";
}

function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
