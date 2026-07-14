const btn=document.querySelector("button");
const box=document.querySelector(".box")
const main=document.querySelector(".main")

btn.addEventListener("click",function(){
    const pY=Math.floor(Math.random()*main.clientHeight);
    const pX=Math.floor(Math.random()*main.clientWidth);
    box.style.top=`${pY}%`;
    box.style.left=`${pY}%`;
    console.log(pX)
    console.log(pY)

})



