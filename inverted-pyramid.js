// *******
//  *****
//   ***
//    *

let n = 4;

(function (n) {
  let count = n * 2;

  for (let i = 0; i < n; i++) {
    console.log(`${" ".repeat(i)}${"*".repeat(count - 1)}`);

    count -= 2;
  }
})(n);
