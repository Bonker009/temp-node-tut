const {readFileSync,writeFileSync, readFile, writeFile} = require("fs")
console.log("start")
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile("./content/second.txt",'utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/reult-async.txt',`Here is the result : ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err);
            }
            console.log('Done with this task')
        })
    })
})
console.log('starting next task')