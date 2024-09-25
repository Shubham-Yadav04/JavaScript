//  every object inherit a prototype if any property is not available in the object and it is avilable in the its prototype than it access the prperty from its prototype this is called prototypal Inheritance 


//  if there is a case in which the property is present  in both the object as well as in its prototype than  the prperty from the object is executed 

//  to dedfine any propertty in the prototype we use obj.__proto__ to set the property or method in the prototype of the object 


const obj1={
    name:"shubham",
    id: 82374890,
    run:()=>{
        console.log(" i am a run of the obj not from the prototype ")
    }// if we call the run method then the run method of the obj1 will execute not the run method of its prototype 
}
const obj2={
    name:"billionaire",
    id:34709347
}
const p={
    run: ()=>{
        console.log(" hello running the run functiion of prototype")
    }
}
obj1.__proto__=p
obj1.run()
// obj2.run()// it will generate error because ruun method is neither defined in the prototype of the obj2 nor it is defined in the obj2 

//  the above demonstration shows that every object has there prototype if we define any property in the prototype of one obj than it is not defined in the other 
console.log(obj2.name);
console.log(obj1)
 

//  prototype chaining is just like having prototype of any existing object prototype when will call any property of an object it  will check does the object contain its if not it will check at the prtotype of the object and if it is not presemt in the prtotype than it will check in the prototype of the prototype is the method is present if not found anywhere then it shows error  .

// Q1 create a javascript class to create a complex number using the constructor to set the real and imaginary value of the number 

class complex{
    constructor(real, imaginary){
        this.real=real;
        this.imaginary=imaginary;
    }
    
// write a function to add the two complex number in the class

    static addComplexNumber(number1 , number2){
        const result = new complex();
        result.real=number1.real + number2.real
        result.imaginary= number1.imaginary + number2.imaginary
        return result;
        }
    get complexnumber(){
        console.log(`${this.real} + ${this.imaginary}i`);
    }
    set realValue(real){
        this.real=real
    }
    set complexValue(imaginary){
        this.imaginary=imaginary

    }
}

const number1=new complex(2,5);
const number2=new complex(4,2);
number1.complexnumber
number2.complexnumber
console.log(number1)
number1.realValue=4;
number1.complexValue=7;
console.log(number1)
console.log(complex.addComplexNumber(number1,number2));


// Q3 create a class student from the class human and override a method of human class and see the changes

class human{
    constructor(){
        console.log("human is created ")
    }
    hello(){
        console.log("hey iam a human ")
    }
    bye(){
        console.log("human is saying you bye ")
    }
}
class student extends human{
    constructor(){
        super() // in javascript it is neccessary to call super constructor explicitly otherwise it will create a error
        console.log("hey i am student ")
}
hello(){
    console.log("student is saying hello")
}
hey(){
    console.log("hey studenty is here ");
}
}

const stud1=new student()
stud1.hello() // it will call the method of the children class incase of the method overriding in javascript
stud1.hey()
stud1.bye()
console.log(stud1 instanceof human)