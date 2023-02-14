const http = require("http")
const server = http.createServer((req, res)=>{
    console.log("hello server")
})
server.listen(3000, (err)=> err? console.log(err) : console.log('Hello Node!!!!'))