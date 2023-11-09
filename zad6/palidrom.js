function isPalidnrome(x) {
    let str1 = x.toLowerCase().split("").reverse().join("")
    return x === str1;

}
console.log(isPalidnrome('aa'));