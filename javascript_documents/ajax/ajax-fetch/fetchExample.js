var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
fetch(url)
    .then(function(res){
        
        console.log(res);
        return res.json();
    })
    .then(function(res){
        console.log(res.bpi.EUR.rate);

    })
