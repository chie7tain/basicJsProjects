const colors = ["green", "red","rgba(113,122,200)","#f1f5025","orange","blue","#1ab","purple"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
btn.addEventListener("click",()=>{
  let randNum = getRandomNumber(colors.length);
  document.body.style.backgroundColor = colors[randNum];
  color.textContent = ` : ${colors[randNum]}`;
})
function getRandomNumber(range){
  return Math.floor(Math.random() * range);
}