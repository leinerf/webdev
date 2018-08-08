var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");
//listen for clicks
btn.addEventListener("click", function(){
  // make the request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var data = JSON.parse(XHR.responseText).message;
      console.log(data);
      img.src = data;
    }
  }

  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();

});
