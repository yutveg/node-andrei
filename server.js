const http = require('http')

const server = http.createServer((request, response) => {
    console.log("method", request.method)
    console.log("url", request.url)
    response.setHeader('Content-Type', 'text/html');
    response.end("<h1>Hellooooo</h1>")
})

server.listen(3000);