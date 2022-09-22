function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// cardNum = [2,3,4,5,6,7,8,9,10,"Ace","Jack","Queen","King"]
cardNum = [2,3,4,5,6,7,8,9,10,11,12,13,14]
cardSuit = ["Hearts", "Clubs", "Dimonds", "Spades"]
cardDeck = []

console.log(cardNum)
console.log(cardSuit)

for (i = 0; i < cardNum.length; i++ ) {
  // console.log(`i:${i}`)
  for (x = 0; x < cardSuit.length; x++) {
    // console.log(`i:${i}, x:${x}`)
    if (x == 0 || x == 2) {
      var cardColor = "Red"
    } else if (x == 1 || x == 3) {
      cardColor = "Black"
    }

    // if (i == 9) {
    //   var cardName = "Ace"
    // } else if (i == 10) {
    //   cardName = "Jack"
    // } else if (i == 11) {
    //   cardName = "Queen"
    // } else if (i == 12) {
    //   cardName = "King"
    // } else {
    //   cardName = (i + 2).toString()
    // }

    var cardName = null

    switch(i) {
      case 9: 
        cardName = "Ace"
        break;
      case 10:
        cardName = "Jack"
        break;
      case 11:
        cardName = "Queen"
        break;
      case 12:
        cardName = "King"
        break;
      default: 
        cardName = (i + 2).toString()
    }

    // convert cardNum[11 - 14] to have name value of cardName accordingly 
    var card = {
      value: cardNum[i], 
      name: cardName, 
      suit: cardSuit[x],
      color: cardColor,
    }

    // cardDeck.push(`${cardNum[i]} of ${cardSuit[x]}`)
    cardDeck.push(card)
    
    console.log(cardDeck)
  }
}

function drawCard() {

  var playerCardIndex = getRandomInt(0, 51) 
  console.log("your card is ... ")
  console.log(cardDeck[playerCardIndex])

  var cpuCardIndex = getRandomInt(0, 51)
  console.log("CPU card is ...")
  console.log(cardDeck[cpuCardIndex])

  var playerCardDrawnValue = cardDeck[playerCardIndex].value
  var cpuCardDrawnValue = cardDeck[cpuCardIndex].value
  var playerCardDrawnName = cardDeck[playerCardIndex].name
  var cpuCardDrawnName = cardDeck[cpuCardIndex].name
  var playerCardDrawnSuit = cardDeck[playerCardIndex].suit
  var cpuCardDrawnSuit = cardDeck[cpuCardIndex].suit

  if (playerCardDrawnValue > cpuCardDrawnValue) {
    console.log(`${playerCardDrawnName} of ${playerCardDrawnSuit} is higher than ${cpuCardDrawnName} of ${cpuCardDrawnSuit}!`)
    console.log("You Win!!!")
  } else if (playerCardDrawnValue < cpuCardDrawnValue) {
    console.log(`${playerCardDrawnName} of ${playerCardDrawnSuit} is lower than ${cpuCardDrawnName} of ${cpuCardDrawnSuit}!`)
    console.log("uh oh you have the low card!")
  } else {
    console.log(`${playerCardDrawnName} of ${playerCardDrawnSuit} has the same value as ${cpuCardDrawnName} of ${cpuCardDrawnSuit}!`)
    console.log(`It's a Draw! You're saying to yourself, "I know thats kind of the point, we're drawing cards" I mean your cards are the same.. 
    well the value is the same not neccesaraly the same exact card, the suit might be different... whatever you get it just draw again`)
  }
}

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
