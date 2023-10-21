const colorQuestion = document.getElementById('colorcode');
let color = null;
const options = document.getElementById('optionsBox')
const scoreContainer = document.getElementById("score");
let score = 0;

let cheat = document.getElementById("cheat");


function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgbColor;
    
}

function gamestart() {
    score = Number(window.localStorage.getItem('score')) ?? 0;
    scoreContainer.innerText = score;
    options.innerHTML = null;
    color = randomColor();
    colorQuestion.textContent = color;
    

    const ansindex =Math.floor(Math.random() * 4);

    // console.log(ansindex);

    for (let i = 0; i <=3; i++) {
        const div = document.createElement('div');
        div.addEventListener("click",checkResult);
        div.style.backgroundColor = i === ansindex ? color : randomColor();
        options.append(div);
        
    }
    cheat.style.backgroundColor=color; // this is cheat 
}
function incrementScore() {
    score+= 1;
    scoreContainer.innerText = score;
}
function checkResult(el) {
    // console.log(el.target);
    const selectedColor = el.target.style.backgroundColor;
    console.log(selectedColor);
    if(selectedColor === color){
        incrementScore();
    }else{
        score = 0;
    }
    window.localStorage.setItem("score", score)
    gamestart();
}
window.addEventListener("load",() => gamestart())
