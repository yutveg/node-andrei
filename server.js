const express = require('express');

const app = express();


app.use((req, res, next) => {
    console.log(req)
    next();
})

app.get('/', (req, res) => {
    const user = {
        name: "Sally", 
        hobby: "Painting"
    }
    res.send(user)
})

app.listen(3000);