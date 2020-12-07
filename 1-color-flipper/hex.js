const hex = [0,1,2,3,4,5,6,7,8,9,'A',"B","C","D","E","F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  let hexColor = "#"
  for(let i = 0; i<6; i++){
    let randNum = getRandomNumber(hex.length);
    console.log(randNum)
    hexColor += hex[randNum];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = ` : ${hexColor}`;
})
function getRandomNumber(range) {
  return Math.floor(Math.random() * range);
}