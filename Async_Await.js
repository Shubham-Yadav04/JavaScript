async function first() {
    const promise1=  new Promise((resolve, reject)=>{
        console.log(" hey i am the first promise , do not break me");
        setTimeout(()=>{
            alert(" running the first promise");
            resolve("first promise resolved ")
        },1000);
    }).then((value)=>{
        console.log(value)
    })
    let p1= await promise1;
   const promise2= new Promise((resolve,reject)=>{
        console.log(" hey its your second promise you should not break it");
        setTimeout(()=>{
            alert("Listen its your second promise here always remind me");
            resolve("second promise resolve")
        },5000);

    }).then((value)=>{
        console.log(value)
    })
    let p2= await promise2;
}
console.log("calling first");
first();
console.log("hey function is executed or still executing ");

