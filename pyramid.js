//    *
//   ***
//  *****
// *******

let n = 4;

(function (n) {
  let count = 1;

  for (let i = 0; i < n; i++) {
    console.log(`${" ".repeat(n - i)}${"*".repeat(count)}`);
    count += 2;
  }
})(n);
