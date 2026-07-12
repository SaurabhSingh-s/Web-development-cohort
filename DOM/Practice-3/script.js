const username = document.querySelector("#username");
const email = document.querySelector("#email");
const url = document.querySelector("#url");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const edit=document.querySelector("#edit")
const del=document.querySelector("#delete")


let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    dob: "1998-04-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    dob: "1996-09-28",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    dob: "2000-01-12",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    dob: "1997-07-03",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    dob: "1995-12-19",
  },
];


let card=document.querySelector(".users-card")
let ui=()=>{

    card.innerHTML="";
    usersData.forEach(function(elem,index){
        card.innerHTML+=`<div class="card">
            <div class="image"><img src="${elem.image}" alt=""></div><br>
            <div class="name">${elem.name}</div><br>
            <div class="email">${elem.email}</div><br>
            <button id="edit">Edit</button>
            <button id="delete" onclick="deleteCard(${index})">Delete</button>

        </div>`;

    })

    
}
ui();
let deleteCard=(index)=>{
    usersData.splice(index,1);
    ui();
}

submit.addEventListener("click", function (events) {
    events.preventDefault();

    let input1=username.value;
    let input2=email.value;
    let input3=url.value;
    if(input1=="" && input2=="" && input3=="") return;
    usersData.push({
        name: input1,
        email:input2,
        image:input3,

    })
    ui();
    form.reset();
    


});









