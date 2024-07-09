// ****
//  ****
//   ****
//    ****

let height = 9;

let rhombus = (function (h) {
  for (let i = 0; i < h; i++) {
    console.log(`${" ".repeat(i)}${"*".repeat(h)}`);
  }
})(height);
