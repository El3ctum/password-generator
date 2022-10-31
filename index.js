const charCodes = generateCharCodes();
const randomCharCodes = generateRandomCharCodes();
const button = document.querySelector(".btn_password");
var click = 0;


function generateCharCodes() {

    const array = []

    for (let i = 32; i < 232; i++) {
        array.push(i);
    }

    return array
}

function generateRandomCharCodes(charCodes) {
    
    const array = []
    const character = charCodes
    for (let i = 0; i < 40; i++) {
        array.push(Math.floor(Math.random(character) * 100));    
    }

    return array
}

const items = randomCharCodes //… your array, filled with values
const n = 10 //tweak this to add more items per line

const newResult = new Array(Math.ceil(items.length / n))
  .fill()
  .map(_ => items.splice(0, n))

const result = newResult

function buttonIsClicked(charCodes) {
        generateCharCodes();
        generateRandomCharCodes(charCodes);     
}

function numberToString(randomCharCodes, indice, array) {
    strg = String.fromCharCode(randomCharCodes)
    array[indice] = strg
}

boxx1 = result[0]
boxx2 = result[1]
boxx3 = result[2]
boxx4 = result[3]

boxx1.forEach(numberToString);
boxx2.forEach(numberToString);
boxx3.forEach(numberToString);
boxx4.forEach(numberToString);


button.addEventListener("click", () => {
    document.getElementById("box1").innerHTML = boxx1.join(""),
    document.getElementById("box2").innerHTML = boxx2.join(""),
    document.getElementById("box3").innerHTML = boxx3.join(""),
    document.getElementById("box4").innerHTML = boxx4.join(""),
    buttonIsClicked()   
})



