// Browser Object Model (BOM) : programming interface javascript tool for working with browser . Enables us to access  and manipulate the browser window frames and other browser related object

// BOM Types :
//Windows Object : provides a global window object which help to manipulate and perform function on the browser window
// Navigator Object : used to information related to browser such AppName , appCodeName , UserAgent, UserLanguage, SystemLanguage,Online
// History Object : used to access current browser's session history and perform task using the URLs present in current browser session history
// Location Object : used to transfer the user to any locations such as any different URLs.
// Screen Object : used to access the screen height , width and change the height and width.

// Q1 write a program to input user's age and alert him that he can drive or not


do{
let age=prompt("Enter your age");
age=Number.parseInt(age);
if(age>=18){
alert("You are elegible .You can Drive");
}
else if(age<0){
console.error("enter the wrong value enter a positive value for age");
}
else{
alert("you are underage you cannot drive");
// window.moveTo("www.google.com"); moves the user to google.com
}

}while( confirm(" Do you want to enter the age again"));


//Document Object Model (DOM) --->>>>> It is an interface provided by the JavaScript to access the element of the HTML document the complete html is consider as An object of Window known as document created by the browser automatically all the html element are like the node or different objects

//Dom tree---> the hierarchical arrangement or representation of the dom : window-->document-->html tag--> head--> body--> the all the other element in the body in hierarchical order

// each branch is consider as an Node which are generally a javascript object
// dom provide us function and easy way to this object or we can html element and manipulate their CSS or apply javascript on them


//Q1 . Create a navbar and change Background color of its first element to red

let nav=document.getElementsByTagName("nav");
nav[0].firstElementChild.style.backgroundColor ="red"

// Q2. create a element let say navbar with atleast 3 children and change the color of first and last children

nav[0].firstElementChild.style.color= "yellow";
nav[0].lastElementChild.style.color = "purple";

// Q3. write a javascript code to change the color of all the list <li> element present in the code

Array.from(document.getElementsByTagName("li")).forEach( (element)=>{element.style.color = "purple" ;});


// console.log() vs console.dir()

console.log(document.getElementsByTagName("nav")[0]); // it will provide the html representation of the element as a form of outerHtml showing  the element itself and it's inner child element 
console.dir(document.getElementsByTagName("nav")[0]); // nav.navbar it will the show the object representaion of the node or element showing it's all the propertie as a dropdown in console window



// InnerHtml and OuterHtml property 

console.log(document.getElementsByClassName("navbar")[0].innerHTML); /*  <div class="1box" style="background-color: red; color: yellow;">Home</div>
<div class="2box">About</div>
<div class="3box">blog</div>
<div class="4box" style="color: purple;">contact</div>
*/

console.log(document.getElementsByClassName("navbar")[0].outerHTML); /* <nav class="navbar ">
<div class="1box" style="background-color: red; color: yellow;">Home</div>
<div class="2box">About</div>
<div class="3box">blog</div>
<div class="4box" style="color: purple;">contact</div>

</nav>*/

// innerHTML shows the completer inner html content present inside the element whereas the outerHTML shows both the inner content as well as the element itself



console.log(document.getElementsByClassName("navbar")[0].firstChild.tagName);// undefined tagName --> exists only for the element node not defined for any other node 
console.log(document.getElementsByClassName("navbar")[0].firstChild.nodeName);// #text --> nodeName exits for every node it can be a element , text ,comment etc.


// textContent 
console.log(document.getElementsByClassName("navbar")[0].textContent);/* 
Home
About
blog
contact */  //shows only the text content present inside an element by neglecting all the tegs