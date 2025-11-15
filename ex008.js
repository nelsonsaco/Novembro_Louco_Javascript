for (let num = 1000; num <= 9999; num++) {
  let str = num.toString();
  let primeiraParte = Number(str.slice(0, 2));
  let segundaParte = Number(str.slice(2, 4));

  if ((primeiraParte + segundaParte) ** 2 === num) {
    console.log(num);
  }
}
