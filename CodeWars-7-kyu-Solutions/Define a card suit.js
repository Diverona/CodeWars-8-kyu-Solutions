/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/

// function defineSuit(card) {
//   return card[card.length - 1] === "\u2663"
//     ? "clubs"
//     : card[card.length - 1] === "\u2666"
//     ? "diamonds"
//     : card[card.length - 1] === "\u2665"
//     ? "hearts"
//     : card[card.length - 1] === "\u2660"
//     ? "spades"
//     : "such a suit does not exist";
// }

// function defineSuit(card) {
//   let suit = card[card.length - 1];

//   switch (suit) {
//     case "♥":
//       return "hearts";
//     case "♣":
//       return "clubs";
//     case "♠":
//       return "spades";
//     case "♦":
//       return "diamonds";
//   }
// }
//   return card[card.length - 1] === "\u2663"
//     ? "clubs"
//     : card[card.length - 1] === "\u2666"
//     ? "diamonds"
//     : card[card.length - 1] === "\u2665"
//     ? "hearts"
//     : card[card.length - 1] === "\u2660"
//     ? "spades"
//     : "such a suit does not exist";
// }

const defineSuit = (card) => {
  return { "♥": "hearts", "♠": "spades", "♦": "diamonds", "♣": "clubs" }[
    card[card.length - 1]
  ];
};
//   switch (suit) {
//     case ;
//     case "♣":
//       return "clubs";
//     case "♠":
//       return "spades";
//     case "♦":
//       return "diamonds";
//   }
// }

console.log(defineSuit("3♥"));
console.log(defineSuit("10♣"));
