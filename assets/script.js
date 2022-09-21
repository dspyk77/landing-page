

function drawCard() {
  clearCards();
  var drawRandomCard = getRandomInt(1, 14)
  console.log(drawRandomCard)
  
}



function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

cardNum = [2,3,4,5,6,7,8,9,10,11,12,13,14]
cardSuit = ["Hearts", "Clubs", "Dimonds", "Spades"]

// on click draw a random card (random number)
function drawCard() {
  // clear old cards
  clearCards();
  // get random number between 1 and 14 
  var drawRandomCard = getRandomInt(1, 14)
  console.log(drawRandomCard)
  // 
  
}