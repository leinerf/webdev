const url = "https://dog.ceo/api/breeds/image/random";
const dogImg = $("#dog-img");
const dogBtn = $("#dog-btn");

$.ajax({
    url:url,
    dataType: "json",
    method:"GET"
}).done(function(data){
    console.log(data);
    dogImg.attr({src:data.message})
})
.fail(function(){
    console.log("the request failed");
});

dogBtn.on("click", function(event){
    $.ajax({
        url:url,
        dataType: "json",
        method:"GET"
    }).done(function(data){
        console.log(data);
        dogImg.attr({src:data.message})
    })
    .fail(function(){
        console.log("the request failed");
    }); 
});