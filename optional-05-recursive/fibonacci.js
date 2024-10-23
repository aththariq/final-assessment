function fibonacci(n) {
  let fib = [0, 1];

  if (n === 0) return [0];

  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
