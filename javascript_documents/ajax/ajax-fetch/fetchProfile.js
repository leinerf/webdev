var fullname = document.getElementById("fullname");
var username = document.getElementById("username");
var email = document.getElementById("email");
var city = document.getElementById("city");
var avatar = document.getElementById("avatar");
var btn = document.getElementById("btn");

var url = "https://randomuser.me/api/"


fetch(url,{
    method:"GET"
})
.then(handleErrors)
.then(parseJSON)
.catch(printError)


function handleErrors(response){
    if(!response.ok){
        throw Error(response.status);
    }
    return response.json();
}
function parseJSON(response){
    var data = response.results[0];
    updateProfile(data);
}
function updateProfile(data){
    console.log(data)
    fullname.textContent = data.name.first + " " + data.name.last;
    username.textContent = data.login.username;
    email.textContent = data.email;
    city.textContent = data.location.city;
    avatar.src = data.picture.medium;
}
function printError(error){
    
    console.log(error );
}

btn.addEventListener("click",function(){
    fetch(url,{
        method:"GET"
    })
    .then(handleErrors)
    .then(parseJSON)
    .catch(printError)
});