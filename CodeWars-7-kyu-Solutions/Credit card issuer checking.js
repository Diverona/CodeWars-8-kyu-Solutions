/* Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"*/

// function getIssuer(number) {
//   console.log(number);
//   let str = number.toString();
//   return str.startsWith("34") || (str.startsWith("37") && str.length === 15)
//     ? "AMEX"
//     : str.startsWith("6011") && str.length === 16
//     ? "Discover"
//     : str.startsWith("51") ||
//       str.startsWith("52") ||
//       str.startsWith("53") ||
//       str.startsWith("54") ||
//       (str.startsWith("55") && str.length === 16)
//     ? "Mastercard"
//     : str.startsWith("4") && (str.length === 13 || str.length === 16)
//     ? "VISA"
//     : "Unknown";
// }

function getIssuer(number) {
  var cardTypes = [
    { type: "AMEX", prefix: ["34", "37"], length: [15] },
    { type: "Discover", prefix: ["6011"], length: [16] },
    {
      type: "Mastercard",
      prefix: ["51", "52", "53", "54", "55"],
      length: [16],
    },
    { type: "VISA", prefix: ["4"], length: [13, 16] },
  ];
  number += "";
  for (var i in cardTypes)
    if (
      cardTypes[i].prefix.some((v) => {
        return number.startsWith(v);
      }) &&
      cardTypes[i].length.some((v) => {
        return number.length == v;
      })
    )
      return cardTypes[i].type;
  return "Unknown";
}
