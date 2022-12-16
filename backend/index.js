//import http from 'http';
let {getPosts} = require('./posts-repository');
// let {usersController} = require('./users.json-controller');
const {getUsers, addUser} = require("./users-repository");

//
const cors = require('cors')
const users = require('./users-router')
const posts = require('./posts-router')
const bodyParser = require('body-parser')

// create App express js
const express = require('express')
const app = express()
const port = 4000

// настройка express js
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//
app.use('/users', users)
app.use('/posts', posts)

// add middleware
app.use((req, res)=>{
    res.send(404)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//
//
// let http = require('http');
//
//
//
//
// process.on('uncaughtRejection', function (reason, p) {
//     console.log(reason, p);
//     // console.log("Node NOT Exiting...");
// });
//
//
// let cors = (request, response) => {
//     // data
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     response.setHeader('Access-Control-Request-Methods', '*')
//     response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT') // '*'
//     response.setHeader('Access-Control-Allow-Headers', '*')
//     // res.setHeader('Access-Control-Allow-Credentials', true)
//     // another common pattern
//     // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//     if (request.method === 'OPTIONS') {
//         response.writeHead(200);
//         response.end();
//         return true
//     }
//     return false
// }
//
// const server = http.createServer((request, response)=>{
//     if (cors(request, response)) return
//
//     switch (request.url) {
//         case "/users.json":
//             usersController(request, response)
//             break;
//         case "/posts":
//             response.write(JSON.stringify(getPosts(request, response)))
//             response.end()
//             break;
//         default:
//             response.write(`PAGE NOT FOUND`)
//             response.end()
//     }
//     // response.end()
// })
//
// server.listen(4000)
//     // console.log(`server is listening on ${http}`)






// const allowCors = fn => async (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT') // '*'
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//     )
//     // res.setHeader('Access-Control-Allow-Credentials', true)
//     // another common pattern
//     // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//     if (req.method === 'OPTIONS') {
//         res.status(200).end()
//         return
//     }
//     return await fn(req, res)
// }