// ******
// ******
// ******
// ******

let h = 4;
let w = 6;

let rectangle = (function (h, w) {
  for (let row = 0; row < h; row++) {
    console.log("*".repeat(w));
  }
})(h, w);
