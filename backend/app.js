const mongoose = require('mongoose')
const express = require('express')
const router = require("./routes/backend")
mongoose.connect("mongodb+srv://athira-tu:123@cluster0.vgoxwy1.mongodb.net/blog-fullstack?retryWrites=true&w=majority")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use("/", router)

app.listen(7000, (err) => {
    if (err) {
        console.log("error")
    }
    else {
        console.log("succes");
    }
})