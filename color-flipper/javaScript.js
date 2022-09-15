const body = document.body;
const button = document.querySelector(".btn");

 function colorGenerator(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue= Math.floor(Math.random()*255);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background = rgb;
}

button.addEventListener("click",()=>{
 colorGenerator();
 button.textContent = body.style.background;
})
