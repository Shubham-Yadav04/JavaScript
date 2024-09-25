//Event are the occurrence and action happen in the browser it can occure by the user or by the browser itself


// javascript event handling override the HTMl event handling

// elem.addEventListener("event",fuction reference object) to execute event handling

// elem.removeEventListener("event", function reference object same as used in addEventListener) --> removes the event handler

// note: the function reference object should be same for both the addEventListener and removeEventListener


// Q1 .  write different alerts when different buttons are clicked

let x= ()=>{
    alert(" hey its button 1 ");
}
let y= ()=>{
    alert(" hey its button 2 ");
}
let s= ()=>{
    alert(" hey its button 3 ");
}

document.getElementsByTagName("button")[0].addEventListener('click',x);
document.getElementsByTagName("button")[1].addEventListener('click',y);
document.getElementsByTagName("button")[2].addEventListener('click',s);


// Q 2 create a glowing bulb effect 
// let div=document.createElement('div');
// div.style.width="400px"
// div.style.height="400px"

// div.style.borderRadius="50%";
// document.getElementsByTagName('button')[2].after(div);
// setInterval(()=>{
//     div.classList.toggle("hello");
//     if(div.classList.contains("hello")){
//         div.style.backgroundColor="yellow"
//     }
//     else{
//         div.style.backgroundColor="transparent"

//     }
// }, 100);
// Q3. create a clock 