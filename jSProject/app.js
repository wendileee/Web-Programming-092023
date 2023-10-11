const colors=["green","red","rgba(133,122,200)", "f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEvenetListener("click",function(){
  //get random number between 0-3 colors[3]
const randomNumber = getRandomNumeber();
document.body.style.backgroundColor = colors[randomNumber];
color.textContent= colors[randomNumber];
});

function getRandomNumber(){
return MathFloor(Math.random()*colors.length);
}
