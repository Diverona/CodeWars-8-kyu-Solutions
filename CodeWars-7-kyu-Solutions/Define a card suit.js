/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/

function defineSuit(card) {
  let cardArr = card.split("");

  return cardArr[card.length - 1] === "\u2663"
    ? "clubs"
    : cardArr[card.length - 1] === "\u2666"
    ? "diamonds"
    : cardArr[card.length - 1] === "\u2665"
    ? "hearts"
    : cardArr[card.length - 1] === "\u2660"
    ? "spades"
    : "such a suit does not exist";
}

console.log(defineSuit("3♥"));
console.log(defineSuit("10♣"));
