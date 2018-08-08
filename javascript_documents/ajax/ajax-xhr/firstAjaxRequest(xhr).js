// XMLHTTP Request
//has to be run on browser
// var XHR = new XMLHttpRequest();
// XHR.onreadystatechange = function(){
//     if(XHR.readyState === 4 && XHR.status === 200){
//         console.log(XHR.responseText);
//     }
// }

// XHR.open("GET", "https://api.github.com/zen");
// XHR.send();

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  if(XHR.readyState == 4) {
    if(XHR.status == 200) {
      console.log(XHR.responseText);
    } else {
      console.log("There was a problem!");
    }
  }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();