function add(numbers = []) {
    let number = 0;
    numbers.forEach((element) => number += element);
    return number;
}


console.log(add([3,4,5]));