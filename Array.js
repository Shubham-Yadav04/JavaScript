// Array is javaScript are consider as non-primitve data type having collection of data with having key as index number
// Generally we use array to store or work with similar type of data but it can also store different types of data in it also


// type of declaration :
let arr=[2,3,5,"shubham"];
let arr1 = new Array(); // it will create an empty array
let arr2 =new Array(1,2,4,"shubham" ,"yadav");
console.log(arr2.toString());
console.log(arr.toString());

// arrays are muttable and element can be accessed using the index value


// Q1... create an array consisting marks of n students and find the average :
let sum=0;
let mark = new Array();
for( let i=0;i<mark.length;i++){
mark[i]=prompt(`enter marks of student ${i+1}`);
}

for(let i of mark){
sum=sum+mark[i];
}
let avg=sum/mark.length;
console.log(avg);


// Q2 .create an array to store companies name >> "Bloomberg","Microsoft", "google","uber","IBM","Netflix"

// remove the first company from the array
// remove uber and add ola in its place
// add Amazon at the end

let companies =["Bloomberg","Micrsoft", "Google","Uber","IBM","Netflix"];

//remove the first element

companies.shift();
console.log(companies); //output :['Micrsoft', 'Google', 'Uber', 'IBM', 'Netflix']

// remove uber and ola in its place

companies.splice(2,1,"OLA");
console.log(companies);// output : ['Micrsoft', 'Google', 'OLA', 'IBM', 'Netflix']

// add amazon at the end

companies.push("Amazon");
console.log(companies); //output : ['Micrsoft', 'Google', 'OLA', 'IBM', 'Netflix', 'Amazon']

