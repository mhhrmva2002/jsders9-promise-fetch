let rowBox=document.querySelector("#rowBox");
let API_URL='https://jsonplaceholder.typicode.com/users';

function getUsers(API_URL){
    fetch(API_URL).then((res)=>{
        return res.json();
    }).then((data)=>{
        rowBox.innerHTML="";
        data.forEach(user => {
            rowBox.innerHTML+=`<div class="col-3 col-sm-4 mt-5">
            <div class="card">
            <img src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jCwjtBMmC6rgFhZoEpLobB6L8.jpg" class="card-img-top w-100"
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${user.name}</li>
            <li class="list-group-item">${user.email}</li>
            <li class="list-group-item">${user.address.street}</li>
            <li class="list-group-item">${user.address.city}</li>
            <li class="list-group-item">${user.phone}</li>
            <li class="list-group-item">${user.company.name}</li>
                </ul>
                </div>
                </div>
                </div>
            `
        });
    })
}
getUsers(API_URL);