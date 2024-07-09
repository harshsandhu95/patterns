// ******
// *    *
// *    *
// ******

let r = 4;
let c = 6;

(function (r, c) {
  for (let row = 0; row < r; row++) {
    if (row === 0 || row === r - 1) console.log("*".repeat(c));
    else console.log(`*${" ".repeat(c - 2)}*`);
  }
})(r, c);
