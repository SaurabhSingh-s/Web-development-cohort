const body= document.querySelector("body");
body.style.backgroundColor= "black";

const h1=document.querySelector("h1");
h1.style.color="white";

const bulb=document.getElementById("bulb");


const btn=document.querySelector("button");

btn.addEventListener("click",function(){
    if(bulb.classList.toggle("bulb-lighted")){
        btn.innerText="Off";

    }else{
        btn.innerText="On";
    }
})


h1.classList.remove("heading");
