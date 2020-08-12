const http = require('http')

const server = http.createServer(() => {
    console.log("I hear you!")
})

server.listen(3000);