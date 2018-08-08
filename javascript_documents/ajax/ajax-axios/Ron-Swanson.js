const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let quote = document.querySelector("#quote");
//XHR
const xhrBtn = document.querySelector("#xhr");
xhr.addEventListener("click",function(event){
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function(){
        if(xhr.onreadystatechange == 4 && xhr.status == 200){
            quoteText = JSON.parse(xhr.responseText)[0];
            quote.innerHTML = quoteText
        }
    }
    xhr.open("GET", url, true);
    xhr.send(null);
});

//Fetch
const fetchBtn = document.querySelector("#fetch");
fetchBtn.addEventListener("click",function(event){
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            quote.innerHTML = response[0];
        })
        .catch(function(error){
            console.log(error);
        });
})

//jQuery
const jqueryBtn = document.querySelector("#jquery");
jqueryBtn.addEventListener("click",function(event){
    $.ajax({
        method:"GET",
        url:url,
        dataType: "json"
    }).done(
        function(response){
            return response[0];
        }
    ).then(function(response){
        quote.innerHTML = response;
    })
});
//Axios
const axiosBtn = document.querySelector("#axios");
axiosBtn.addEventListener("click",function(event){
    axios.get(url)
        .then(function(response){
            return response.data[0];
        })
        .then(function(response){
            quote.innerHTML = response;
        })
        .catch(function(error){
            console.log(error);
        })

});
