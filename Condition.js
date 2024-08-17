//To print output at console we USE function name console.log("String which has to be printed")

console.log("first javaScript program");


/* javaScript is A dynamically typed language Which mean we doesn't have to spcify the data type going to be stored in a variable at the time of its initialization

 Ex :  var x; ---->> now this 'x' variable can have number, String ,boolean types of values in it

 KeyWords use to define a variable are :

 1. var: used to define variable which can be re intialized and re-declared in the program .It is a Global Scope keyword which means the variable declared with this keyword can be accessed throughout the programme

 After 2015 new Standard hax introduced that is ES6.Which introduce two more keyWords Which are let and const

let : variable declared with let keyWord can get updated but cannot reintialized .It is Block Scope keyword

const: variable declared with const can not be updated or re- intialized in the programme.It is BLock Scope Variable
*/
let x=24;
x="Shubham Yadav";
console.log(x);

{
// const variable should always assign value at the time of declaration otherwise it will generate error
//const a;
const y=24;
// it will cause error
//const y="jacvaScript";
console.log(y);
}
const y="jacvaScript";

console.log(y);

 /* DATA TYPES : primitive and non-primtive
 Primitive : String , number, boolean, undeclared, null, BigInt, symbol
Non-Primitive : object , Array etc
*/

// condition statement (if ,if-else, if else-if)

// Q1. Write a code which can give grades to students according to their scores
//100-91-> A ,81-90 -> B, 71-80->C, 61-70 -> D, below 60 -> E

let marks=56;
let grade;
/* if(x>=91 &&x<=100){
grade="A";

}
else if(x>=81 && x<=90){
grade="B";

}
else if(x>=71 && x<=80){
grade="C";

}
else if(x>=61 && x<=70){
grade="D";
}
else{
 grade="E";

 }
  console.log("Grade :",grade);
 */

// using Switch- Case:
 switch(marks){
 case marks >=91 && marks<=100 :
 grade="A";
 break;
 case marks>=81 && marks<=90:
 garde="B";
 break;
 case marks >=71 && marks<=80:
 garde="C";
break;
case marks >=61 && marks<=70:
garde="D";
break;
default:
grade="E";
 }
 console.log("Grade :",grade);

