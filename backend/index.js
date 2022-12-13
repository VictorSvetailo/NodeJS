const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    let test = 'Yo Yo Yo'
    response.end(`
                <h1> Hello Node.js Server!<h1/> 
                <script >
                alert('${test}')
                </script>
                `)
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
