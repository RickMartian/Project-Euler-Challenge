function fiboEvenSum(n) {
  let f1 = 1, f2 = 2;
  let aux;
  const fiboList = [f1, f2]
  for (let i = 0; i < n-2; i++){
    aux = f1 + f2;
    f1 = f2;
    f2 = aux;
    fiboList.push(f2)
  }
  return fiboList.reduce((curr, next) => (next % 2 == 0 && next <= n) ? curr + next : curr, 0);
}