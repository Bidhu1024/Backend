const http = require('http')


const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url === "/about"){
        res.end("<h1>This is about page</h1>")

    }else if(req.url === "/"){
        res.end("<h1>This is home page</h1>")
    }else{
        res.end("<h1>Page not found 404</h1>")
    }
})

server.listen(5000, ()=>{
    console.log(`listening on port 5000`)
})