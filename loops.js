//loops in the javaScript

//1. for(iterator; condtion;increment or decrement){/code} -------> For Loop
//2. while(condition){/ code} -------> While Loop
// 3. do {/code} while(condition); ------> do- While Loop
//  4. for(variable of StrVar or ArrayVar) ------> for-of Loop (used in case we want to apply loop on the Sting Variable and Array variable

//Ex :

let name="shubham";
for(let iterator of name){
console.log(iterator);// it will print esch character present in the variable name
}

// 5. for(variable in objectsVar or ArrayVar)--------> for-in loop (used in case we want to access each key of the object or want  to access element in the Array variable)
//Ex :

const Student= {
name:"Shubham",
RollNo:69,
department: "CSE",
CGPA : 8.83
};

for(let iterator in Student){
console.log(iterator,":" ,Student[iterator]); // it will print each keyvalue pair such as name : Shubham
}

// Q1 . create a Guess the number Game where you have already fixed a number and user have to guess that number

let number=24;
let attempt=3;
do {
let userNum=prompt("enter the your number");
if(userNum==number){
console.log("congratulation !!! you have guessed  it right");
break;
}
else{
console.log("try again . ");
attempt--;
console.log("attempts left",attempt);
if(attempt==1){
let hint=prompt("Need help then enter 1");
    if(hint== 1){
    console.log("the number lies between 21-30");
    }
}}
}while(attempt>0);