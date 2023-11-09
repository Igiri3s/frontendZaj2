let number = 0;
const increment = document.getElementById('increment');
const color = document.getElementById('changeColor');
const labelek = document.getElementById('numer');
increment.addEventListener("click", (e) => {
    number +=1;
    labelek.innerHTML = number;
});

color.addEventListener("click", (e) => {
    if(labelek.style.color === "black"){
        labelek.style.color = "red";
    }else {
        labelek.style.color = "black";
    }
});
