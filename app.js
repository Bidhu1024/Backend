import http from "http"
import name from './features.js'
import love from "./LoveCalc.js";
import fs from "fs"

const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url === "/about"){
        res.end("<h1>This is about page</h1>")

    }else if(req.url === "/"){
        fs.readFile("./index.html", (err,data)=>{
        console.log(err)
        res.end(data)
        })
       
    }else{
        res.end("<h1>Page not found 404</h1>")
    }
})

server.listen(5000, ()=>{
    console.log(`listening on port 5000`)
})