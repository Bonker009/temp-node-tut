const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("welcone to our homepage")
    }
    if(req.url ==="/about"){
        res.end("here is your short history")
    }
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home </a>
    `)
   
    
})
server.listen(5000)