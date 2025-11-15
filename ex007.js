function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

let termos = 15;
let resultado = fibonacci(termos);

console.log("os 15 primeiros termos da serie de fibonacci sao:");
console.log(resultado.join(", "));
