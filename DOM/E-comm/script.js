let cross=document.querySelector("#close")
let formDiv=document.querySelector(".form")
let create=document.querySelector("#create")
let form=document.querySelector("form");
let productsDiv=document.querySelector(".products");
let createButton=document.querySelector(".create-button")



formDiv.style.display="none";



let updateIndex=null;
cross.addEventListener("click",function(){
    formDiv.style.display="none";

})
create.addEventListener("click",()=>{
    formDiv.style.display="flex";    
})



let productsArr = [
];






let ui=()=>{
    productsDiv.innerHTML="";
    productsArr.forEach(function(elem,index){
        productsDiv.innerHTML+=`<div class="product-card">
          <div class="img">
            <img
              src="${elem.url}"
              alt=""
            />
          </div>

          <div class="text">
            <h3>${elem.productName}</h3>
            <p>${elem.description}</p>
            <p>${elem.price}</p>
          </div>

          <div class="btns">
            <button id="update" onclick="updateProduct('${elem.productName}')">Update</button>
            <button id="delete" onclick="deleteProduct(${index})">Delete</button>
          </div>
        </div>`

        

    })
}
form.addEventListener("submit",function(event){
    event.preventDefault();
    let productName=event.target[0].value;
    let description=event.target[1].value;
    let price=event.target[2].value;
    let url=event.target[3].value;
    if(productName.trim()===0 || description.trim()===0 || price.trim()===0 || url.trim===0) return;

    let product={
        productName,
        description,
        price,
        url
    };
    
    
    
    if(updateIndex!==null){
        productsArr[updateIndex]=product;
        
        updateIndex=null;

    }else{
        productsArr.push(product);

    }
    ui();

    

    form.reset();
    

   formDiv.style.display="none"; 

})



let deleteProduct =(index)=>{
      productsArr.splice(index,1);
      ui();
}


let updateProduct=(name)=>{
    
    

    formDiv.style.display="flex";
    updateIndex=productsArr.findIndex((elem)=>elem.productName===name);
    let update_product=productsArr.find((elem)=>{
        return elem.productName===name;
    })
    form[0].value=update_product.productName;
    form[1].value=update_product.description;
    form[2].value=update_product.price;
    form[3].value=update_product.url;




}