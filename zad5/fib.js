function fib(x) {
    let a = 0, b = 1, c = x;
    let array = [0,1];
    for(let i = 2; i <= x; i++) {
        c = a + b;
        a = b;
        b = c;
        array.push(c);
    }
    return array;
}
console.log(fib(9));