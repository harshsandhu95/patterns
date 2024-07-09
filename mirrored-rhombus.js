//    ****
//   ****
//  ****
// ****

let n = 4;

(function (n) {
  for (let i = 0; i < n; i++) {
    console.log(`${" ".repeat(n - i)}${"*".repeat(n)}`);
  }
})(n);
