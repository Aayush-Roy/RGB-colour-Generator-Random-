let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    let finalValue = rgbGen();
    h1.innerText = finalValue;
    let div = document.querySelector("div");
    div.style.backgroundColor = finalValue;
});

const rgbGen=()=>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}