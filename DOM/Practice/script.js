// Add a text input or textarea to the page, along with a small piece of text below it that shows
// how many characters the user has typed so far. As the user types or deletes letters, this
// counter should update right away, with no button click or page refresh needed.

let text=document.querySelector("h1");
let input=document.querySelector("input");


let counter=0;
input.addEventListener("input",function(){
    
    if(input.value.length>0){
        counter=input.value.length;
        text.innerHTML=`Counter:${counter}`

    }

})