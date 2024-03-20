const express = require("express")

const cors = require("cors")

const app = express()

const path = require("path")

const filesRouter = require("./routes/files")

const PORT = process.env.PORT || 8000

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors())


app.use('/api/files',filesRouter)

app.get('/',(req,res)=>{
    res.json("Share Sync BackEnd Deployed")
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})