function fibonacci(limit) {
    let a = 0, b = 1, next;
  
    while (a < limit) {
      console.log(a);
      next = a + b;
      a = b;
      b = next;
    }
  }
  
  fibonacci(4000000);
  
