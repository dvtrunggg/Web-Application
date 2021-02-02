const http = require('http');
const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type', 'text/json')
    res.end(`Hello <b>Trungggg</b>`);
})

server.listen(port, hostName, () =>{
    console.log(`Server is running at http:// ${hostName}:${port}`);
})