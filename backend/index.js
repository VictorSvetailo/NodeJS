//import http from 'http';


let http = require('http');
let {getUsers, addUser} = require('./repositories/users-repository');
let {getPosts} = require('./repositories/posts-repository');


let cors = (request, response) => {
    // data
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Request-Methods', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT') // '*'
    response.setHeader('Access-Control-Allow-Headers', '*')
    // res.setHeader('Access-Control-Allow-Credentials', true)
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    if (request.method === 'OPTIONS') {
        response.writeHead(200);
        response.end();
        return true
    }
    return false
}


const server = http.createServer((request, response)=>{
    if (cors(request, response)) return
    console.log('server add user')


    console.log(request.url)
    switch (request.url) {
        case "/users":
            if (request.method === "POST"){
                addUser('Anton')
                response.write(JSON.stringify({success: true}))
            } else{
                response.write(JSON.stringify(getUsers()))
            }
            break;
        case "/posts":
            response.write(JSON.stringify(getPosts()))
            break;
        default:
            response.write(`PAGE NOT FOUND`)
    }
    response.end()

})

server.listen(4000)
    console.log(`server is listening on ${http}`)






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