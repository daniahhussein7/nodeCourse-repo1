/* EX1 intro
const amount =9
if(amount<10){
    console.log('small number');
}
else{console.log('large number')};
console.log('this is my first node app');*/



/*EX2 globals
//GLOBALS - NO WINDOW 
// __dirname -path to current dirctory
// __filename -file name 
// require - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
setTimeout(() => {
    console.log("Hello world")
}, 1000)

setInterval(()=>{
console.log("Hello world!")

},1000)

*/

/*
//MODULES
//EX3

const secret ='SUPER SECRET'
const john ='john'
const peter ='peter'

const sayHi = (name) => {
console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)
*/     // صورة 547 سكرين

/*
//EX5
const names=require('./4-names');
const sayHi=require('./5-utils');
//console.log(names)//زي صورة 559 سكرين
// مراجعة صوة 564 سكرين
const data = require('./6-alternative-flavor.js');
console.log(data)//صورة 569
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
*/

/*
//EX6
const names=require('./4-names');
const sayHi=require('./5-utils');
//console.log(names)//زي صورة 559 سكرين
// مراجعة صوة 564 سكرين
require('./7-mind-grenade.js');
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
*/


/*
//EX7
const os=require('os')

//info about current user 
const user=os.userInfo();
console.log(user);

//methods return the system uptime in seconds
console.log(`the system uptime is:  ${os.uptime} seconds`);

currentOS={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);

*/

/*
//EX8
const path= require('path');
console.log(path);

const filePath= path.join('/content/','subfolder','test.txt');
console.log(filePath);

const base= path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);
*/


/*
//EX9
const { readFileSync, writeFileSync } = require('fs');
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
//console.log(first,second);
/*
writeFileSync(
'./content/result-sync.txt',
`Here is the result:  ${first},${second}`

)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result:  ${first},${second}`,
    {flag:'a'}
    
    )*/



    //EX10
 //1 //  const {readFile,writeFile}=require('fs');
/*
    readFile('./content/first.txt','utf8',(err,result)=>{
          if(err){
           console.log(err)
           return
          }
         console.log(result)

    })


    readFile('./content/first.txt','utf8',(err1,result2)=>{
          if(err1){
           console.log(err1)
           return
          }
         console.log(result2)

    })*/
//2
/*
const {readFile,writeFile}=require('fs');
    readFile('./content/first.txt','utf8',(err,result)=>{
        if(err){
         console.log(err)
         return
        }
        const first= result;
        readFile('./content/second.txt','utf8',(err,result)=>{
            if(err){
             console.log(err)
             return
            }
  const second = result;
  writeFile('./content/async.txt', 
  `Here is the result:  ${first}, ${second}`,
(err,result)=>{  
    if(err){
    console.log(err)
    return
   }
  console.log(result)

})

  })
})
   */

//EX11
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