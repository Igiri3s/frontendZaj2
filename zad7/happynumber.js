function isHappyNumber(x) {

    let numbers = String(x).split("")
    let sum = 0;

    numbers.forEach((element) =>{
        sum +=element*element;
    })

    if( sum === 1){
        return true;
    }
    else if(numbers.length === 1 && sum !== 1){
        return false;
    }

    return isHappyNumber(sum);

}
console.log(isHappyNumber(1));