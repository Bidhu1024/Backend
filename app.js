
import express from "express"

const app = express()
app.get("/",(req,res)=>{
    res.json({                  //sending json
"name":"hehehehe",
    })
})
app.listen(5000,()=>{
    console.log("Server is running")
})
