const http = require("http")
const url = require("url")
const path = require("path")
const fs = require("fs")
const port = process.argv[2] || 8888

http.createServer((request, response) => {
    const uri = url.parse(request.url).pathname
    let fileName = path.join(process.cwd(), uri)
    if (fs.statSync(fileName).isDirectory())
        fileName += '/index.html'
    fs.readFile(fileName, "binary", (err, file) => {
        if(err) {
            response.writeHead(500, {"Content-Type": "text/plain"})
            response.write(err + "\n")
            response.end()
            return
        }
        response.writeHead(200)
        response.write(file, "binary")
        response.end()
    })
}).listen(parseInt(port, 10))

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown")
