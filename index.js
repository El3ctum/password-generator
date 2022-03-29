const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");

var passwordKeys = []

const passwordResult = []

function generatePasswordKeys() {
    s = '';
        for( var i = 32; i <= 126; i++ )
        {
            s += String.fromCharCode( i );
        }
}


function generatePassword() {

}