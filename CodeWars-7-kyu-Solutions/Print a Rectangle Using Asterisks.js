/*Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

For example, the following call:

getRectangleString(3, 3);
Should return the following string:

***
* *
***
End each line of the string (including the last one) with a carriage return-line feed combination.

Note: You may assume that width and height will always be greater than zero. */

function getRectangleString(width, height) {
  let res = "";

  if (width === 1 && height === 1) res = `*\r\n`;
  else if (width === 1 && height === 2) res = `*\r\n*\r\n`;
  else {
    let r1 = `${"*".repeat(width)}\r\n`;
    let r2 = `*${" ".repeat(width - 2)}*\r\n`;

    res = r1 + r2.repeat(height - 2) + r1;
  }
  return res;
}
