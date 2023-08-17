var player1 = prompt("Enter your name.");
document.querySelector(".player1").innerHTML=player1;
var player2 = prompt("Enter your opponent name.");
document.querySelector(".player2").innerHTML=player2;

function rollDicee(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var imgResource1 = "./images/dice"+randomNumber1+".png";
    document.querySelector(".img1").setAttribute("src",imgResource1);

    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var imgResource2 = "./images/dice"+randomNumber2+".png";
    document.querySelector(".img2").setAttribute("src",imgResource2);

    if (randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML= player1+" wins the game";
    }
    else if (randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML= player2+" wins the game";
    }
    else {
        document.querySelector("h1").innerHTML="Draw"
    }
}
