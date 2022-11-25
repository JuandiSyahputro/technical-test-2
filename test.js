function createTriangle(x) {
  let tanda = "";

  for (let a = 1; a <= x; a++) {
    for (let b = x - 1; b >= a; b--) {
      tanda += " ";
    }
    for (let c = 1; c <= a; c++) {
      tanda += "*";
    }
    for (let d = 1; d <= a - 1; d++) {
      tanda += "*";
    }

    tanda += "\n";
  }
  return tanda;
}

console.log(createTriangle(10));
