// cardNum = [2,3,4,5,6,7,8,9,10,"Ace","Jack","Queen","King"]
cardNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
cardSuit = ["Hearts", "Clubs", "Dimonds", "Spades"];

function genCardDeck () {
  var cardDeck = [];
  for (i = 0; i < cardNum.length; i++) {
    for (x = 0; x < cardSuit.length; x++) {
      var card = genCard(i , x)
      cardDeck.push(card)
    }
  }
  return cardDeck;
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

function getCardColor(x) {
  var cardColor = "";
  if (x == 0 || x == 2) {
    cardColor = "Red";
  } else if (x == 1 || x == 3) {
    cardColor = "Black";
  }
  return cardColor
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