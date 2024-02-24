
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