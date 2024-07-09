// ******
//  ******
//   ******
//    ******

let r = 4;
let c = 6;

(function (r, c) {
  for (let row = 0; row < r; row++) {
    console.log(`${" ".repeat(row)}${"*".repeat(c)}`);
  }
})(r, c);
