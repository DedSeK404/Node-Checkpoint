const http = require("http")
const server = http.createServer((req, res)=>{
    res.write("<h1 style='color:red'>Hello Node!!!!</h1>")
    res.end()
})
server.listen(3000, (err)=> err? console.log(err) : console.log('listening on port 3000'))