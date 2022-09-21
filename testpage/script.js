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

for (i=0; i < cardNum.length; i++ ) {
  // console.log(`i:${i}`)
  for (x=0; x < cardSuit.length; x++) {
    // console.log(`i:${i}, x:${x}`)
    if (x == 0 || x == 2) {
      var cardColor = "Red"
    } else if (x == 1 || x == 3) {
      cardColor = "Black"
    }

    // convert cardNum[11 - 14] to have name value of royalty accordingly 
    var card = {
      value: cardNum[i].toString(), 
      name: "", 
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

  var playerCardDrawn = cardDeck[playerCardIndex]
  var cpuCardDrawn = cardDeck[cpuCardIndex]

  console.log("test")
  console.log(playerCardDrawn)
  console.log(cpuCardDrawn)

  console.log(playerCardDrawn["value"])
  console.log(cpuCardDrawn["value"])

  if (playerCardDrawn["value"] > cpuCardDrawn["value"]) {
    console.log("You win!!")
  } else if (playerCardDrawn["value"] < cpuCardDrawn["value"]) {
    console.log("uh oh you have the low card! ")
  } else {
    console.log(`It's a Draw! You're saying to yourself, "I know thats kind of the point, we're drawing cards"`)
  }
}
