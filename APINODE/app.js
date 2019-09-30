// request("https://jsonplaceholder.typicode.com/users/1", (error,response,body) => {
//     if (!error && response.statusCode == 200) {
//          const parsedData = JSON.parse(body);
// eslint-disable-next-line max-len
//          console.log(parsedData.name + ' lives in ' + parsedData.address.city+ '\nPhone Number: ' + parsedData.phone);
//      }
// });

// | Search with
// V  Movie ID
// http://www.omdapi.com/?i=tt38961988&apikey=thewdb


// |  General
// V  Search
// http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb

const express = require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs');

app.get('/results', (req, res) => {
  const rSearch = req.query.search;
  const reqURL = 'http://www.omdbapi.com/?s='+ rSearch +'&apikey=thewdb';
  request(reqURL, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.render('results', {data: data});
    }
  });
});

app.get('/', (req, res) => {
  res.render('search');
});

app.listen(3000, ()=>{
  console.log('I\'m hearing you from port 3000!!!');
});
