let body=document.querySelector("body");
//let heading=document.querySelector("")
let btn=document.querySelector("button");

console.log(btn);
let onClick=btn.addEventListener("click",function(){
    if(body.classList.toggle('dark-mode')){
        btn.innerText="Switch to Light Mode";
        body.style.color="white";
    }else{
        btn.innerText="Switch to dark mode";
        body.style.color="black";
       
    }
})

