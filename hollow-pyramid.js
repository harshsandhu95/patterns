//    *
//   * *
//  *   *
// *******

let n = 4;

(function (n) {
  let count = 1;

  for (let i = 0; i < n; i++) {
    if (i === 0) console.log(`${" ".repeat(n - i - 1)}*`);
    else if (i === n - 1) console.log("*".repeat(count));
    else console.log(`${" ".repeat(n - i - 1)}*${" ".repeat(count - 2)}*`);

    count += 2;
  }
})(n);
