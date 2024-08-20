//function are used to perform task operation we can call a function multiple times to perform a specific task and operation it provide code reusability and less coding

// Declaration of function ---->>>>>  function keyword is used to define a function
// syntax:

 // function without any parameter ..
 function welcome(){
 return "welcome in the world of javaScript";
 }

console.log(welcome());// function calling

// Function with parameter ...
function add( a,b){// variable defined under a function are locale variable they have scope till the block of the function under which they are defined
return a+b;
}
 console.log(add(5,10));// function calling ..

 // Arrow functions ----->>> a concise way to write a function. we declare a variable which holds the function and we can use that variable as an normal variable in the further function we can re-initialize or update the value of the function again

 const sum=(a,b)=> {return a+b;} //function declaration using the arrow function
 console.log(sum(5,10));// function calling

 let multiplication= (a,b)=>{
 console.log(`multiplication of the number ${a} and ${b} is :`);
 return a*b;
 }

 console.log(multiplication(5,10)); // output : 50

multiplication=5;
console.log(multiplication); // updating the variable again output : 5

// Q1 . Create a function which takes string as an input and provides the number of vowels present in the string

let string=prompt("Enter the string ");
function vowelsInString(str){
let count=0;
for (let i of str){
if(i=='a' || i=='A' || i=='e' || i=='E' || i=='i' || i=='I' || i=='o' || i=='O' || i=='u'|| i=='U'){
count++;
}
}
return count;
}

//console.log("The total numbers of Vowels in the Entered  String is:",vowelsInString(string));

// CALL BACK FUNCTION ----->>> Higher order function are the function which take any function as an input or return a function as a return value ; Ex : forEach method of Arrays

let arr=[2,3,4,5,6,6,7];
// method one normal; squaring of each element of the array
const num=(num)=> {num**2;};
arr.forEach(num);

//method 2 using Array function
arr.forEach((num)=>{
console.log(num**2);
});

// Map ---> same as forEach method but it provides a new array by performing the operation on each element of the array

//Ex:

let arr1= arr.map((num)=>{return num*num;});
console.log(arr1);// output : [4, 9, 16, 25, 36, 36, 49]

// FILTER ----> higher order method it execute the function provide as an argument on the each element of the array and if the element satisfies the condition it insert it in a new array after traversing the complete array it returns a new array whose element satisfyies the consitions

let arr2=arr.filter((num)=>{return num%2==0;});
console.log(arr2);//output: [2, 4, 6, 6]

// REDUCE ---> higher order function which reduces the array to single element by performing the operation based on the function provided as an argument

let a= arr.reduce((sum,num)=>{return num+sum;});
console.log(a); //output : 33
//Q1. given an array of marks student filter out the marks greater then or equal to 90

let marks=[56,78,91,90,99,23,43,75,93];
let filterMark= marks.filter((mark)=>{return mark>=90;});
console.log(filterMark); // output :[91, 90, 99, 93]

// Q2. take a number 'n' as an input form the user create an array from 1 to n .then reduce the sum and multiplication of the element of the array

let n=prompt("enter the number ");
let newArr=[];
for(let i=1;i<=n;i++){
newArr.push(i);}
console.log(newArr);
let arrSum=newArr.reduce((result,value)=>{return result + value;});
let product=newArr.reduce((result,value)=>{return result*value});
console.log(arrSum);//for n= 5 --->> 15
console.log(product); // for n= 5 -----> 120