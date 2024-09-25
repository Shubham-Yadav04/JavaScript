const promise=fetch("https://jsonplaceholder.typicode.com/posts",{
    headers:{"Content-Type":"application/json"} ,
    method: "POST" ,
    body:
         JSON.stringify({
            name: "shubham",
            title:"yadav",
            userId: 34579
         })
    }
);
promise.then((value)=>
{
     return value.json()
}).then((value2)=>{
    console.log("your data is fetched")
    console.log(value2)
})
promise.then( null,(error)=>{
    console.log("an error has occured ")
})