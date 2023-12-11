let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;


document.querySelector(".dice .img1").setAttribute("src","./images/dice" + randomNumber1 +".png")
document.querySelector(".dice .img2").setAttribute("src","./images/dice" + randomNumber2 +".png")

let winner;
if(randomNumber1==randomNumber2){
    document.querySelector(".container h1").textContent = "That's a draw";
}else{
    randomNumber1>randomNumber2?winner="Player 1":winner= "Player 2";
document.querySelector(".container h1").textContent = winner+" wins"
}
