const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request)
    response.setHeader('Content-Type', 'text/html');
    response.end("<h1>Hellooooo</h1><h2>Coom</h2>")
})

server.listen(3000);