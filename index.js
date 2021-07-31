var random1= Math.floor(Math.random()*6)+1;
var rimage1="images/dice"+random1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",rimage1);

var random2= Math.floor(Math.random()*6)+1;
var rimage2="images/dice"+random2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",rimage2);

if(random1>random2)
{
  document.querySelector("h1").innerHTML =" PLAYER 1 WINS";
  }
  else if(random2> random1)
  document.querySelector("h1").innerHTML=" PLAYER 2 WINS";
  else
  document.querySelector("h1").innerHTML ="DRAW";
