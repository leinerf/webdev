var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url, {
  method: 'get',
//   body: JSON.stringify({
//         name: 'blue',
//         login: 'bluecat',
//     })
})
.then(function(response){
  console.log(response);
  return response.json()
})
.then(function(data){
  console.log(data.bpi.EUR.rate);
}).catch(function(error){
    //catches request problems
    console.log(error);
});
