//Strings in JavaScript
// strings are immutable primitive datatype while we perform any method on string javaScript converts it as an String object of String wrapper class automatically

let str="Shubham Yadav"; //using string literals
let str1= new String("Shubham Yadav");// using "new" keywords as an object of wrapper class String

// Methoods of String
let str2= str.replace("Yadav","yadav"); // output : Shubham yadav
console.log(str2);

let str3="hey I am learning JavaScript after Java";
console.log(str3.slice(5,25)); // it will slice from 5 index to 24 index outut :am learning JavaScr
console.log(str3.length); // output: 39
console.log(str3.toUpperCase()) // output :HEY I AM LEARNING JAVASCRIPT AFTER JAVA
console.log(str3.toLowerCase()) // output :hey i am learning javascript after java
console.log(str3.charAt(26)) // output: p
console.log(str3.indexOf("Java")) // provides index of first occurrence of the entered argument output : 18
console.log(str3.lastIndexOf("Java")); // provide last occurrence of the entered argument output: 35

// Q1 .. input a full name(having no space ) using prompt and  add "@" at starting and length of input at end of the full name and create a new username for the user . Using concat method of String
//Ex; input: shubhamyadav ------>>>> output : @shubhamyadav12
{
let str=prompt("enter your Full Name without Spaces");
console.log("@".concat(str).concat(str.length));
}