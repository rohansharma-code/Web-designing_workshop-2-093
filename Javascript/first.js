 console.log("HELLO WORLD");

 fullname="Rohan";
 console.log (fullname );

//let age = 22;
 //var age = 25
 //const age = 30
 //console.log(age); variables defined by these and cannot be reupdated or redeclared

//  {

//     let a = 5;
//     console.log(a);
//  }
//  {

//     let a = 10;
//     console.log(a);
//  }   using block of codes we can redefine info

// Data types can be number,string,boolean,undefined,null,bigint,symbol


// const student = {
//  fullname: "ROhan",
//      age: 19,
//      cgpa: 8.7,
//      istop: true,
// };
// student["age"] = student["age"] +1;
// console.log(student["age"]);            This is done to change the value
// student["fullname"] = "ROHAN SHARMA";     of the variables involved
// console.log(student["fullname"]);       in the code object...


// a++,++a & --a,a-- & a+=,a-= can be used
// == means equal to and === means equal to & type

// let a=6;
// let b=2;
// let cond1 = a>b;
// let cond2 = a===6;
// console.log("cond1 and cond2=", cond1&&cond2);


// let mode ="light";
// let color;

// if (mode==="dark") {
//     color = "black"
// }

// if (mode==="light"){
//       color = "white"
// }

// if (mode==="purple" ){
//     color = "blue"
// }

// console.log(color)   that's how if-elseif -else statements are used...


// let age = 25
// age>=18 ? console.log("adult") : console.log("not adult"); ternary operator
// console.log(age)

// alert("hello!!"); pop-ups 


// let name = prompt("hello");
// console.log(name);   for input and message

// let num=prompt("enter the message:");
// if(num%10 === 0){
//     console.log(num, "is a multiple");
// } else {
//     console.log(num, "isn't a multiple of 10")
// }

// for(let i = 1; i<=5; i++){
//     console.log("hello")
// }

// let sum=0
// let n=5
// for(let i=1; i<=n; i++){
//     sum+=i
// }
// console.log(sum)

// let i=1;
// while(i<=10){
//     console.log("hello");
//     i++;
// }

// let str ="helloworld";
// for(let i of str) {
//     console.log("i=", i)
// }


//   let student ={
//     name: "rahul",
//     age: 20,
//     cgpa: 9.3,
// }

// for (let key in student) {
//     console.log("key=", key, "value=", student[key])
// }


// let str ="hi...";
// str.length
// console.log(str[3]);  



// let obj ={
//         item: "pen",
//         price: 10,
// };
// let output ='the cost of ${obj.item} is ${obj.price} rupees'; this is string interpolation (a part of string templates)
// console.log(output);
// console.log = ("the cost of", obj.item, "is", obj.price, "rupees"); 

//escape characters used in a string which is /t

//str.toUpperCase()
//str.toLowerCase()
//str.trim()---is used to remove white spaces
//str.slice(start, end)---returns part of strings
//str1.concat(str2)---concatination
//str.replace(searchval, newval)---replace values
//str.charAt(i)---search values


// let heroes = ["h", "e", "l", "l", "o"]
// for (let i= 0; i<heroes.length; i++){
// console.log(heroes[i])
// }

// let cities = ["delhi", "pune", "mumbai"]
// for(let city of cities){
//     console.log(city)
// }



// practise Q's-1
// let marks =[86, 64, 45, 78, 23];
// let sum= 0;

// for(let val of marks){
//    sum+=val;
// }
// console.log(sum)
// let avg = sum / marks.length;
// console.log(`avg marks of class= ${avg}`);

//push()---adds to end
//pop()---delete from end and return
//to string()---converts array to string
//shift and unshift deleted from start and adds to start respectively
//slice returns a piece of arr
//splice() returns original array (add, remove, replace)



// function myfunction() {
//     console.log("hello")
// }
//  myfunction()             

//  function sum(x, y){      function sum(x,y)(){
//     console.log(x+y)         s = x+ y
//  }                          return s
// sum(90, 9)                   sum(90, 9)
 
//arrow function
// const arrowmult = (a, b) => {
//     console.log(a*b)
// }
// arrowmult(2, 3)

//counting the vowels in a statement
 //function countvowels(str) {
//     let count = 0
//     for(const char of str){
//        if(char==="a" || char ==="e" || char==="i" || char==="o" ){
//          count++
//        }
//     }
//         console.log(count)
// }

//for each loop in js
// let arr = ["pune", "delhi", "mumbai"]
// arr.forEach((val, idx, arr) => {

//     console.log (val, idx, arr )
// });