const userId = document.getElementById("userId");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const removeBtn = document.getElementById("removeBtn");

const database= firebase.database(); 

addBtn.addEventListener('click',  (e) => {
    e.preventDefault(); 
    database.ref('/users/'+userId.value).set({
        first_name: firstName.value,
        last_name: lastName.value, 
        age: age.value 
    })
});

