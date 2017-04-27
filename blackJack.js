module.exports = (bot) => {

const blackjackArray = [
    {card: 'Ace',   suit: 'heart', value: 11},
    {card: 'King',  suit: 'heart', value: 10},
    {card: 'Queen', suit: 'heart', value: 10},
    {card: 'Jack',  suit: 'heart', value: 10},
    {card: '10',    suit: 'heart', value: 10},
    {card: '9',     suit: 'heart', value: 9},
    {card: '8',     suit: 'heart', value: 8},
    {card: '7',     suit: 'heart', value: 7},
    {card: '6',     suit: 'heart', value: 6},
    {card: '5',     suit: 'heart', value: 5},
    {card: '4',     suit: 'heart', value: 4},
    {card: '3',     suit: 'heart', value: 3},
    {card: '2',     suit: 'heart', value: 2},
    {card: 'Ace',   suit: 'diamond', value: 11},
    {card: 'King',  suit: 'diamond', value: 10},
    {card: 'Queen', suit: 'diamond', value: 10},
    {card: 'Jack',  suit: 'diamond', value: 10},
    {card: '10',    suit: 'diamond', value: 10},
    {card: '9',     suit: 'diamond', value: 9},
    {card: '8',     suit: 'diamond', value: 8},
    {card: '7',     suit: 'diamond', value: 7},
    {card: '6',     suit: 'diamond', value: 6},
    {card: '5',     suit: 'diamond', value: 5},
    {card: '4',     suit: 'diamond', value: 4},
    {card: '3',     suit: 'diamond', value: 3},
    {card: '2',     suit: 'diamond', value: 2},
    {card: 'Ace',   suit: 'club', value: 11},
    {card: 'King',  suit: 'club', value: 10},
    {card: 'Queen', suit: 'club', value: 10},
    {card: 'Jack',  suit: 'club', value: 10},
    {card: '10',    suit: 'club', value: 10},
    {card: '9',     suit: 'club', value: 9},
    {card: '8',     suit: 'club', value: 8},
    {card: '7',     suit: 'club', value: 7},
    {card: '6',     suit: 'club', value: 6},
    {card: '5',     suit: 'club', value: 5},
    {card: '4',     suit: 'club', value: 4},
    {card: '3',     suit: 'club', value: 3},
    {card: '2',     suit: 'club', value: 2},
    {card: 'Ace',   suit: 'spade', value: 11},
    {card: 'King',  suit: 'spade', value: 10},
    {card: 'Queen', suit: 'spade', value: 10},
    {card: 'Jack',  suit: 'spade', value: 10},
    {card: '10',    suit: 'spade', value: 10},
    {card: '9',     suit: 'spade', value: 9},
    {card: '8',     suit: 'spade', value: 8},
    {card: '7',     suit: 'spade', value: 7},
    {card: '6',     suit: 'spade', value: 6},
    {card: '5',     suit: 'spade', value: 5},
    {card: '4',     suit: 'spade', value: 4},
    {card: '3',     suit: 'spade', value: 3},
    {card: '2',     suit: 'spade', value: 2},
  ]

//This function is a random card generator from blackjackArray and pushes cards to either Array

function randomCards(playerArray) {
  return playerArray.push(blackjackArray[Math.floor(Math.random()*blackjackArray.length)]);
}

//2 Array's where the players cards will be stored in the order they are dealt.
let playerDelt = []
let slackBotDelt = []

//This function is to count the total amount of cards in the array.
function playerCardTotal(index, array) {
  let cardTotal = 0;
  for (let i = 0; i <= index; i++) {
  cardTotal = cardTotal + array[i].value;
  }
  return cardTotal;
}

//To start the game type in 'start game'
  bot.hear(/start game/, res => {

//Reset the decks so that both players Array's have no cards.
  playerDelt.length = 0;
  slackBotDelt.length = 0;

  return res.send('Would you like to play BlackJack? (Y/N)')
  })

//Do you want to play or not? if not type N
  bot.hear(/N/, res => {
    return res.send('No problem. Have a nice day.')
  })

//If you do want to play type Y
  bot.hear(/Y/, res => {

  //new deal

  randomCards(playerDelt)
  randomCards(playerDelt)
  randomCards(slackBotDelt)

  if (playerDelt[0].value + playerDelt[1].value === 21){
    return res.send('BlackJack Bitches! You were dealt ' + playerDelt[0].value + ' and ' + playerDelt[1].value + '. You scored 21 and you WIN!')
  } else {
    return res.send('Player 1, you were dealt ' + playerDelt[0].value + ' and ' + playerDelt[1].value + '. Toddbot, was dealt '  + slackBotDelt[0].value + '. Type HIT1 or SIT?')
    }

  })

//Player Draw Card 3
  bot.hear(/HIT1/, res => {

    randomCards(playerDelt)

  if (playerCardTotal(2, playerDelt) === 21){
    return res.send('BlackJack Bitches! You were dealt ' + playerDelt[2].value + ' and your total is ' + playerCardTotal(2, playerDelt) + '. You scored 21 and you WIN!')
  } else if (playerCardTotal(2, playerDelt) < 21) {
    return res.send('Your next card is ' + playerDelt[2].value + ' and your total is ' + playerCardTotal(2, playerDelt) + '. If you want to hit again type HIT2? otherwise type SIT');
  } else if (playerCardTotal(2, playerDelt) > 21) {
    return res.send('Your next card is ' + playerDelt[2].value + ' and your total is ' + playerCardTotal(2, playerDelt) + '. YOU BUST! UNRUCKY! GAME OVER!');
    }
  })

//Player Draw Card 4
  bot.hear(/HIT2/, res => {

    randomCards(playerDelt)

  if (playerCardTotal(3, playerDelt) === 21){
    return res.send('BlackJack Bitches! ' + playerDelt[3].value + ' and your total is ' + playerCardTotal(3, playerDelt) + '. You scored 21 and you WIN!')
  } else if (playerCardTotal(3, playerDelt) < 21) {
    return res.send('Your next card is ' + playerDelt[3].value + ' and your total is ' + playerCardTotal(3, playerDelt) + '. If you want to hit again type HIT3?');
  } else if (playerCardTotal(3, playerDelt) > 21) {
    return res.send('Your next card is ' + playerDelt[3].value + ' and your total is ' + playerCardTotal(3, playerDelt) + '. YOU BUST! UNRUCKY! - GAME OVER!');
    }
  })

//Player Draw Card 5
  bot.hear(/HIT3/, res => {

    randomCards(playerDelt)

  if (playerCardTotal(4, playerDelt) === 21){
    return res.send('BlackJack Bitches! ' + playerDelt[4].value + ' and your total is ' + playerCardTotal(4, playerDelt) + '. You scored 21 and you WIN!')
  } else if (playerCardTotal(4, playerDelt) < 21) {
    return res.send('Your next card is ' + playerDelt[4].value + ' and your total is ' + playerCardTotal(4, playerDelt) + '. If you want to hit again type HIT3?');
  } else if (playerCardTotal(4, playerDelt) > 21) {
    return res.send('Your next card is ' + playerDelt[4].value + ' and your total is ' + playerCardTotal(4, playerDelt) + '. YOU BUST! UNRUCKY! - GAME OVER!');
    }
  })

//SIT - ToddBot draws cards until either 17-21 or bust.
//Decide Winner
bot.hear(/SIT/, res => {

//ToddBot's cards;

  randomCards(slackBotDelt)
  randomCards(slackBotDelt)
  randomCards(slackBotDelt)
  randomCards(slackBotDelt)

//Determine Slackbot Total.

function slackbotTotal() {

if (playerCardTotal(1, slackBotDelt) === 21){
  return playerCardTotal(1, slackBotDelt)
} else if (playerCardTotal(1, slackBotDelt) < 21 && playerCardTotal(1, slackBotDelt) >= 17){
  return playerCardTotal(1, slackBotDelt)
} else if (playerCardTotal(1, slackBotDelt) > 21){
  return 0
} else if (playerCardTotal(2, slackBotDelt) === 21){
  return playerCardTotal(2, slackBotDelt)
} else if (playerCardTotal(2, slackBotDelt) < 21 && playerCardTotal(2, slackBotDelt) >= 17){
  return playerCardTotal(2, slackBotDelt)
} else if (playerCardTotal(2, slackBotDelt) > 21){
  return 0
} else if (playerCardTotal(3, slackBotDelt) === 21){
  return playerCardTotal(3, slackBotDelt)
} else if (playerCardTotal(3, slackBotDelt) < 21 && playerCardTotal(3, slackBotDelt) >= 17){
  return playerCardTotal(3, slackBotDelt)
} else if (playerCardTotal(3, slackBotDelt) > 21){
  return 0
} else if (playerCardTotal(4, slackBotDelt) === 21){
  return playerCardTotal(4, slackBotDelt)
} else if (playerCardTotal(4, slackBotDelt) < 21 && playerCardTotal(4, slackBotDelt) >= 17){
  return playerCardTotal(4, slackBotDelt)
} else if (playerCardTotal(4, slackBotDelt) > 21){
  return 0
}

}

//Determine Winner

function determineWinner() {
  if (playerCardTotal(4, playerDelt) === (slackbotTotal())) {
    return ('The result is a draw. Type \'start game\' to play again')
  } else if (playerCardTotal(4, playerDelt) > (slackbotTotal())) {
    return ('You Win!')
  } else if (playerCardTotal(4, playerDelt) < (slackbotTotal())) {
    return ('The Toddbot wins')
  }
}

//if / else statement - It is either a result b/w 17-21
//Or Toddbot busts. Need to return the result.

if (playerCardTotal(1, slackBotDelt) === 21){
  return res.send('BlackJack Bitches! ToddBot scored 21. You LOSE! GAME OVER!');
} else if (playerCardTotal(1, slackBotDelt) < 21 && playerCardTotal(1, slackBotDelt) >= 17){
  return res.send('Toddbots cards are ' + slackBotDelt[0].value + ', and ' + slackBotDelt[1].value + '. The result is ' + playerCardTotal(1, slackBotDelt) + determineWinner() + '.' );
} else if (playerCardTotal(1, slackBotDelt) > 21){
  return res.send('Toddbots cards are ' + slackBotDelt[0].value + ', and ' + slackBotDelt[1].value + '. The result is ' + playerCardTotal(1, slackBotDelt) + '. Toddbot busts and you win!' );
} else if (playerCardTotal(2, slackBotDelt) === 21){
  return res.send('BlackJack Bitches! ToddBot scored 21. You LOSE! GAME OVER!');
} else if (playerCardTotal(2, slackBotDelt) < 21 && playerCardTotal(2, slackBotDelt) >= 17){
  return res.send('Toddbots cards are ' + slackBotDelt[0].value + ', ' + slackBotDelt[1].value + ' and ' + slackBotDelt[2].value + '. The result is ' + playerCardTotal(2, slackBotDelt) + determineWinner() + '.' );
} else if (playerCardTotal(2, slackBotDelt) > 21){
  return res.send('Toddbots cards are ' + slackBotDelt[0].value + ', ' + slackBotDelt[1].value + ' and ' + slackBotDelt[2].value + '. The result is ' + playerCardTotal(2, slackBotDelt) + '. Toddbot busts and you win!' );
} else if (playerCardTotal(3, slackBotDelt) === 21){
  return res.send('BlackJack Bitches! ToddBot scored 21. You LOSE! GAME OVER!');
} else if (playerCardTotal(3, slackBotDelt) < 21 && playerCardTotal(3, slackBotDelt) >= 17){
  return res.send('Toddbots cards are ' + slackBotDelt[0].value + ', ' + slackBotDelt[1].value + ', ' + slackBotDelt[2].value + ' and ' + slackBotDelt[3].value + '. The result is ' + playerCardTotal(3, slackBotDelt) + determineWinner() + '.' );
} else if (playerCardTotal(3, slackBotDelt) > 21){
  return res.send('Toddbots cards are ' + slackBotDelt[0].value + ', ' + slackBotDelt[1].value + ', ' + slackBotDelt[2].value + ' and ' + slackBotDelt[3].value + '. The result is ' + playerCardTotal(3, slackBotDelt) + '. Toddbot busts and you win!' );
} else if (playerCardTotal(4, slackBotDelt) === 21){
  return res.send('BlackJack Bitches! ToddBot scored 21. You LOSE! GAME OVER!');
} else if (playerCardTotal(4, slackBotDelt) < 21 && playerCardTotal(4, slackBotDelt) >= 17){
  return res.send('Toddbots cards are ' + slackBotDelt[0].value + ', ' + slackBotDelt[1].value + ', ' + slackBotDelt[2].value + ', ' + slackBotDelt[3].value + ' and ' + slackBotDelt[4].value +  '. The result is ' + playerCardTotal(4, slackBotDelt) + '.' );
} else if (playerCardTotal(4, slackBotDelt) > 21){
  return res.send('Toddbots cards are ' + slackBotDelt[0].value + ', ' + slackBotDelt[1].value + ', ' + slackBotDelt[2].value + ', ' + slackBotDelt[3].value + ' and ' + slackBotDelt[4].value +  '. The result is ' + playerCardTotal(4, slackBotDelt) + determineWinner() + '. Toddbot busts and you win!' );
}

})

}
