// comes baked in with node
// fs is for file system
const fs = require('fs')
// module for building out servers
const c = require('http')
// no relative path required

// read
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log(err)
    } 
    console.log('first', data.toString())
})

const file = fs.readFileSync('./test.txt').toString()
console.log('second', file)

// write
fs.appendFile('./test.txt', '\nHere is an extra line', err => {
    if (err) {
        console.log(err)
    }
})

// fs.writeFile('bye.txt', 'Goodbye', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// delete
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
})