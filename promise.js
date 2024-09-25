//  write a program to load a javascript file in the html using the promis .then shows an alert when the script is loaded 
const promise = new Promise((resolve,reject)=>{
const script=document.createElement("script")
script.src="Async_Await.js"
script.onload=()=>{
    resolve(script.src)
    
    
}
script.onerror=()=>{
    reject(new Error())
   

}
document.body.appendChild(script)
}
).then((value)=>{
    console.log("script loaded",value)
})
.catch((error)=>{
    console.log(error)

})










// write a javaScript program to pretend as a hackerman using the async function on javascript 
// initializing hack program .........
//  hacking username...........
// username founded ...........
//  accessing data ........
//  connecting to facebook ..........
// fetching data ........
//  facebook hacked successfully.........
