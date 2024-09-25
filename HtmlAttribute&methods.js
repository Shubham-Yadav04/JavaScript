// getAttribute("Attribute-name") gives the value of the attribute aplied on the element

console.log(document.getElementsByClassName("navbar")[0].getAttribute("class")); // output--> navbar 

//setAttribute("attribute-name","value")
document.getElementsByClassName("navbar")[0].setAttribute("hidden","true"); // it will set the hidden attribute for the element to true 

console.log(document.getElementsByClassName("navbar")[0].hasAttribute("hidden")) //  output(true) it will check if the element has the eneterd attribute or not


document.getElementsByClassName("navbar")[0].removeAttribute("hidden")

console.log(document.getElementsByClassName("navbar")[0].hasAttribute("hidden")) // output(false) bcoz the hidden attribute has been removed by removeAttribute method


// element.attributes // keyword to access all the attributes applied on the element 
 console.log(document.getElementsByClassName("navbar")[0].attributes)


 // (data-) ---> it is a keyword used define custom attribute in html to access the custom attribute we use 
 
 
 
//  element.dataset --> provide all the custom attribute present in the element 

console.log(document.getElementsByClassName("1box")[0].dataset)//DOMStringMap {rollno: '24', aim: 'billionaire'}


//  element.dataset.customAttributename --> provide the value of the customattribute 

console.log(document.getElementsByClassName("1box")[0].dataset.aim)// billionaire

// HTML insertion technique or methods 
//method 1 --> using innerHTML
document.getElementsByTagName("nav")[0].innerHTML += "<div class='newDiv'>Hey Iam inserted using inner html techiniuqe</div>"; // it will add a new div with given class and content in the existing nav tag

// method 2 --> using the append and create method (more feasible in case of large or multiple time element creation and insertion)


// document.createElement('elementtag name')
let a=document.createElement('div');
a.innerHTML= "hey I am the new div created by using createElement method f documetnt";


// elem.append("newelem")
document.getElementsByTagName('nav')[0].append(a); // a new div will be added in the nav tag


// elem.prepend('elemtntname') insert the element as the firstElementchild of the elem tag or element

document.getElementsByTagName('nav')[0].prepend(a);

// elem.after() --> add the element after the elem tag
document.getElementsByTagName('nav')[0].after(a);

// elem.before() --> add the element before the elem tag
document.getElementsByTagName('nav')[0].before(a);

// elem.replaceWith("newElem") --> used to replace the elem tag with the newElem tag

document.getElementsByTagName('nav')[0].replaceWith(a);

// elem.insertAdjacentHTML/Element/text(location,"thing to be inserted")

//afterbegin : insert the content just after the beginnig of the tag 
document.getElementsByTagName("table")[0].insertAdjacentHTML("afterbegin", "<h1>afterbegin</h1>");

// beforebegin : insert the element before the starting tag of the element
document.getElementsByTagName("table")[0].insertAdjacentHTML("beforebegin", "<h1>beforebegin</h1>");

// afterend: insert the content after the ending of the tag 
document.getElementsByTagName("table")[0].insertAdjacentHTML("afterend", "<h1>afterend</h1>");

// beforeend: insert the content just before the ending of the  tag
document.getElementsByTagName("table")[0].insertAdjacentHTML("beforeend", "<h1>beforeend</h1>");


// elem.remove() --> remove the element from the DOM
document.getElementsByTagName("ul")[0].remove();


// elem.className : used to remove all the previous defined classes and set the current given class only 

document.getElementsByTagName("table")[0].className = "outer-box newClass modified " // it wil remove the previous defined classes for the nav element and defines new classes (outer-box , newClass , modified )

console.log(document.getElementsByTagName('table')[0].classList) // provide the list of the classes applied on the element

// elem.classList.remove("class name which you want to remove specifically")

document.getElementsByTagName('table')[0].classList.remove("newClass")
console.log(document.getElementsByTagName('table')[0].classList)// now the newclass class is removed form the table


// elem.classList.add("classname")

document.getElementsByTagName('table')[0].classList.add("MyClass")

console.log(document.getElementsByTagName('table')[0].classList)// myClass is added 

// elem.classList.toggle("classname") if the specified class is not present it will add that and if it is present then it will remove that and give a boolean output true in case of addition and false in case of removal


console.log(document.getElementsByTagName('table')[0].classList.toggle("hello")); //true it added the class bcoz it was not present

console.log(document.getElementsByTagName('table')[0].classList.toggle("MyClass"))// false . it removes the class bcoz it was present already

// elem.classList.contains("className ")  checks wheter the element is present in the classlist or not

console.log(document.getElementsByTagName('table')[0].classList.contains("MyClass")) //false


// setTimeout( func(), milisecond , arg1 , arg2 .... argument of the function separated by comma) --> used when we want to perform any task once after a specific time interval

// Ex:

let x =setTimeout((a,b)=> {console.log("hey running ");
 document.write("<h1> hello world </h1>");

 document.write("<h1>",(a+b),"</h1>")
}, 2000 , 5, 10 );// returns timerId

console.log(x);// (x=1) is timerId of setTimeout

   // clearTimeout(timerId) --> used to close or stop the exexution of the setTimeout(by using its timerId)
 clearTimeout(x);


// setInterval(fun,time,arg1,arg2,....) --> runs the function after every interval of the given time . it is just same as calling the setTimeout in a loop 


let y= setInterval((a,b)=> {console.log("hey running ");
    document.write("<h1> hello world </h1>");
   
    document.write("<h1>",(a+b),"</h1>")
   }, 2000 , 5, 10 ); // returns timerId(y)

console.log(y) // y=2  --> timerId of setInterval

//    clearInterval(timerId) ---> used to close or stop the exexution of the setInterval(by using its timerID)

clearInterval(y);