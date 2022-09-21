function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

cardNum = [2,3,4,5,6,7,8,9,10,"Ace","Jack","Queen","King"]
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
    var card = {
      value: cardNum[i].toString(), 
      suit: cardSuit[x],
      color: cardColor
    }

    // cardDeck.push(`${cardNum[i]} of ${cardSuit[x]}`)
    cardDeck.push(card)
    
    console.log(cardDeck)
  }
}

function drawCard() {

  var playerCardDrawn = getRandomInt(0, 51) 
  console.log("your card is ... ")
  console.log(cardDeck[playerCardDrawn])

  var cpuCardDrawn = getRandomInt(0, 51)
  console.log("CPU card is ...")
  console.log(cardDeck[cpuCardDrawn])

  if (playerCardDrawn > cpuCardDrawn) {
    console.log("You win!!")
  } else {
    console.log("uh oh you have the low card! ")
  }
}
