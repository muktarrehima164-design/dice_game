var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice1Source = "dice" +randomNumber1+ ".png";
var randomDice1 = "images/" + randomDice1Source;

var img1 = document.querySelectorAll(".img")[0];

img1.setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2Source = "dice" +randomNumber2+ ".png";
var randomDice2 = "images/" + randomDice2Source;
let img2 = document.querySelectorAll(".img")[1];

img2.setAttribute("src", randomDice2);

let h1=document.querySelector("h1");

if (randomDice1 > randomDice2) {
    h1.innerHTML= "player_1 wins!";
}else if(randomDice1 < randomDice2){
    h1.innerHTML="player_2 wins!";
}else{
    h1.innerHTML="draw!";
}
