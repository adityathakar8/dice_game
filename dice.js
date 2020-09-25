

var num1 = Math.floor(Math.random()*6)+1;
var url1 = "images/dice"+num1+".png";
var image1 = document.querySelector("img.img1");
image1.setAttribute("src",url1);


var num2 = Math.floor(Math.random()*6)+1;
var url2 = "images/dice"+num2+".png";
var image1 = document.querySelector("img.img2");
image1.setAttribute("src",url2);


if(num1>num2){
  document.querySelector("h1").textContent="🚩Player 1 Wins!!";
}else if(num2>num1){
  document.querySelector("h1").textContent="Player 2 Wins!!🚩";

}else{
  document.querySelector("h1").textContent="DRAW!!";

}
