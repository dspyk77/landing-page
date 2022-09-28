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

function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// cardNum = [2,3,4,5,6,7,8,9,10,"Ace","Jack","Queen","King"]
cardNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
cardSuit = ["Hearts", "Clubs", "Dimonds", "Spades"];
cardDeck = [];

function getCardNameDisplay(cardName) {
  var cardNameDisplay = ""
    
  if (cardName == "Jack") {
    cardNameDisplay = "J";
  } else if (cardName == "Queen") {
    cardNameDisplay = "Q";
  } else if (cardName == "King") {
    cardNameDisplay = "K";
  } else {
    cardNameDisplay = cardName;
  }
  return cardNameDisplay
}

function getCardName(i) {
  var cardName = null;
  switch (i) {
    case 9:
      cardName = "Ace";
      break;
    case 10:
      cardName = "Jack";
      break;
    case 11:
      cardName = "Queen";
      break;
    case 12:
      cardName = "King";
      break;
    default:
      cardName = (i + 2).toString();
  }
  return cardName
}

function getCardSuitDisplay(x) {
  var cardSuitDisplay = null;
  switch (x) {
    case 0:
      cardSuitDisplay = `
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
      </svg>`;
      break;
    case 1:
      cardSuitDisplay = `
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16">
        <path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/>
      </svg>`;
      break;
    case 2:
      cardSuitDisplay = `
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
        <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"/>
      </svg>`;
      break;
    case 3:
      cardSuitDisplay = `
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16">
        <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/>
      </svg>`;
      break;
    default:
      cardSuitDisplay = `<p>:(</p>`;
  }
  return cardSuitDisplay
}

function getCardColor(x) {
  var cardColor = "";
  if (x == 0 || x == 2) {
    cardColor = "Red";
  } else if (x == 1 || x == 3) {
    cardColor = "Black";
  }
  return cardColor
}

function genCard(i, x) {
  var cardColor = getCardColor(x);
  var cardSuitDisplay = getCardSuitDisplay(x);
  var cardName = getCardName(i);
  var cardNameDisplay = getCardNameDisplay(cardName)
  var card = {
    value: cardNum[i],
    name: cardName,
    displayName: cardNameDisplay,
    suit: cardSuit[x],
    displaySuit: cardSuitDisplay,
    color: cardColor,
  };
  return card
}

function genCards () {
  for (i = 0; i < cardNum.length; i++) {
    for (x = 0; x < cardSuit.length; x++) {

      var card = genCard(i , x)
      cardDeck.push(card)
    }
  }
}

function drawCard() {
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
      inputPlayerIndex()
  } else {
    displayPlayerCard.className = "col-2 border rounded bg-danger fw-bold";
    inputPlayerIndex()
  }

  if (cardDeck[cpuCardIndex].color == "Black") {
    displayCpuCard.className =
      "col-2 border rounded bg-dark text-bg-dark fw-bold";
      inputCpuIndex()
  } else {
    displayCpuCard.className = "col-2 border rounded bg-danger fw-bold";
    inputCpuIndex()
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

  displayCpuSuit.insertAdjacentHTML("beforeend", cpuCardDrawnSuitDisplay);

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

  // console.log("-------SVG test-------")
  // console.log(displaySuit)
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

genCards ()

// notes and first attempts on drawCard()

// if (playerCardDrawnValue > cpuCardDrawnValue) {

//   if (playerCardDrawnValue <= 10 && cpuCardDrawnValue <= 10) {
//     console.log(`${playerCardDrawnValue} of ${playerCardDrawnSuit} is higher than ${cpuCardDrawnValue} of ${cpuCardDrawnSuit}!`)

//   } else if (playerCardDrawnValue >= 11 && cpuCardDrawnValue <= 10) {
//     console.log(`${playerCardDrawnName} of ${playerCardDrawnSuit} is higher than ${cpuCardDrawnValue} of ${cpuCardDrawnSuit}!`)

//   } else if (playerCardDrawnValue >= 11 && cpuCardDrawnValue >= 11) {
//     console.log(`${playerCardDrawnName} of ${playerCardDrawnSuit} is higher than ${cpuCardDrawnName} of ${cpuCardDrawnSuit}!`)
//   }
//   console.log("You Win!!!")
// } else if (playerCardDrawnValue < cpuCardDrawnValue) {

//   if (cpuCardDrawnValue <= 10 && playerCardDrawnValue <= 10) {
//     console.log(`${playerCardDrawnValue} of ${playerCardDrawnSuit} is lower than ${cpuCardDrawnValue} of ${cpuCardDrawnSuit}!`)

//   } else if (cpuCardDrawnValue >= 11 && playerCardDrawnValue <= 10) {
//     console.log(`${playerCardDrawnValue} of ${playerCardDrawnSuit} is lower than ${cpuCardDrawnName} of ${cpuCardDrawnSuit}!`)

//   } else if (cpuCardDrawnValue >= 11 && playerCardDrawnValue >= 11) {
//     console.log(`${playerCardDrawnName} of ${playerCardDrawnSuit} is lower than ${cpuCardDrawnName} of ${cpuCardDrawnSuit}!`)

//   }
//   console.log("uh oh you have the low card!")
// } else {

//    if (playerCardDrawnValue <= 10) { // Dont have to check both cards here since both value's are the same
//     console.log(`${playerCardDrawnValue} of ${playerCardDrawnSuit} has the same value as ${cpuCardDrawnValue} of ${cpuCardDrawnSuit}!`)

//   } else if (playerCardDrawnValue >= 11) {
//     console.log(`${playerCardDrawnName} of ${playerCardDrawnSuit} has the same value as ${cpuCardDrawnName} of ${cpuCardDrawnSuit}!`)
//   }
//   console.log(`It's a Draw! You're saying to yourself, "I know thats kind of the point, we're drawing cards" I mean your cards are the same..
//   well the value is the same not neccesaraly the same exact card, the suit might be different... whatever you get it just draw again`)
// }

// console.log(cardDeck[playerCardIndex].value)
// console.log(cardDeck[cpuCardIndex].value)
// console.log("test")
// console.log(playerCardDrawnValue)
// console.log(cpuCardDrawnValue)
// console.log(playerCardDrawnName)
// console.log(cpuCardDrawnName)

// console.log(playerCardDrawn["value"])
// console.log(cpuCardDrawn["value"])

// console.log(`testing value of playerCardDrawn["value"] vs cardDeck[playerCardIndex]`)
// console.log(`playerCardDrawn["value"]`)
// console.log(playerCardDrawn["value"])
// console.log(`cardDeck[playerCardIndex].value`)
// console.log(cardDeck[playerCardIndex].value)

// if (playerCardDrawnValue > cpuCardDrawnValue && playerCardDrawnValue <= 10) {
//   console.log(`${playerCardDrawnValue} of ${playerCardDrawnSuit} is higher than ${cpuCardDrawnValue} of ${cpuCardDrawnSuit}`)
//   console.log("You Win!!!")
// } else if (playerCardDrawnValue > cpuCardDrawnValue && playerCardDrawnValue > 10) {
//   console.log(`${playerCardDrawnName} of ${playerCardDrawnSuit} is higher than ${cpuCardDrawnName} of ${cpuCardDrawnSuit}`)
// } else if (playerCardDrawn < cpuCardDrawnValue) {
//   console.log("uh oh you have the low card! ")
// } else {
//   console.log(`It's a Draw! You're saying to yourself, "I know thats kind of the point, we're drawing cards"`)
// }
