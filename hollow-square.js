// ****
// *  *
// *  *
// ****

let height = 5;

let hollowSquare = (function (h) {
  for (let i = 0; i < h; i++) {
    if (i === 0 || i === h - 1) console.log("*".repeat(h));
    else console.log(`*${" ".repeat(h - 2)}*`);
  }
})(height);
