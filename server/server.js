const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"greeting" : "Hello Node!!!!"})
})



app.listen(3000, () => {console.log("server side")})