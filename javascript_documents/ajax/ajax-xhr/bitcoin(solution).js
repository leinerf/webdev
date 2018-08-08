var btn = document.getElementById("refresh-price");
var price = document.getElementById("price");

btn.addEventListener("click",function(){
    console.log(price.textContent);
    XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        //XHR.readyState == 4 means done
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);
            price.textContent = Math.round(data.bpi.USD.rate_float*100)/100 + " GBP";
        }

    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
    
    

});
window.onload =
    function(){
        XHR = new XMLHttpRequest();

        XHR.onreadystatechange = function(){
            //XHR.readyState == 4 means done
            if(XHR.readyState == 4 && XHR.status == 200){
                var data = JSON.parse(XHR.responseText);
                price.textContent = Math.round(data.bpi.USD.rate_float*100)/100 + " GBP";
            }
    
        }
    
        XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
        XHR.send();
    };