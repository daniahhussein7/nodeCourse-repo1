const http= require('http')

const server = http.createServer((req,res)=>{
   console.log(req)
 if(req.url==='/'){
  res.end('welcome to our home page')

 }
 else if(req.url==='/about'){
    res.end('here is our short history')
  
   }
     else{
   res.end( `
    <h1>Oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home </a>
    `)}
})

server.listen(5000)