const fetch = require('node-fetch');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const baseUrl = 'https://api.openbrewerydb.org/breweries';

app.get('/breweryByState/:state', (req, res) => {

    fetch(baseUrl + "?by_state=" + req.params.state)
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(err => {
       res.send('/error');
       console.log(err)
    });
});

app.get('/breweryByCity/:city', (req, res) => {

   fetch(baseUrl + "?by_city=" + req.params.city)
   .then(res => res.json())
   .then(data => res.send(data))
   .catch(err=> {
      res.send('/error');
      console.log(err)
   });
});

app.get('/breweries', (req, res) => {

    fetch(baseUrl)
   .then(res => res.json())
   .then(data => {
      res.send({ data });
   })
   .catch(err => {
      res.send(err);
   });
})

app.listen(port, () => console.log(`Server started on port ${port}`));