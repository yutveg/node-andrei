const express = require('express');

const app = express();


app.use(express.json())

//console.log(req.query) -> access url query string /?<key>:<value>&<key>:<value>
//console.log(req.body) -> access whatever data sent on request
//console.log(req.headers) -> access browser headers
//console.log(req.params) -> access params sent on url /:someResourceIdentifier

app.use(express.static(__dirname + '/public'))

app.post('/profile', (req, res) => {
    res.send(req.body)
})

app.listen(3000);