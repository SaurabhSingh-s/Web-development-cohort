// Add a button to the page and a list (array) of at least four colour names in your JavaScript
// code. Every time the button is clicked, change the page's background colour to the next
// colour in your list. When you reach the end of the list, the next click should loop back around
// to the first colour again.


let colorArray=["#343D3F","yellow","pink","green"];
let body=document.querySelector("body");

let btn=document.querySelector("#change-color");
let i=0;
btn.addEventListener("click",function(){
    
    
    
    body.style.backgroundColor=colorArray[i];
    i=i+1;
    if(i>3){
        i=0;
    }
    

})