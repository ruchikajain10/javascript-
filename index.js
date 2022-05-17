//post fix operator 

// var myAge=26;
// console.log(9 - "5")
// console.log(true + true + true)
// console.log(false - true)

//prefix operator

// var num = 15;
// var newnum = ++num ;
// console.log(num);
// console.log(newnum);

//comparison operator 
// var a = 30;
// var b = 10;

// console.log(a==b);

// console.log(a != b)

//Logical Operator 
// Logical && operator 

// var a = 30;
// var b= -20;
// console.log(a < b &&  b<0)

// Logical OR operator operand if one and if only one or more  operand is true .
// console.log(a > b ||  b < 0  ||  b < -40 )

// Logical Not operator takes truth to falsity and vice versa

// console.log(!false)

// String concatenation Operator 
//Concarenaton two strings 
//returns another string with is union of 2  operand string 
// console.log("uhukj njlk")
// console.log("hi " + "world")

// var myName="Ruchika"

// console.log(myName + " Jain")

// What will be  the output of 3**3?
// console.log(3**3) // 3*3*3

// what will be the output if we add a number and a string?
// console.log(10 + "dfvcx")

// Write aprogram to swap two numbers ?
// var a =10;
// var b=4;
// var c= a;
// var a = b;
// var b=c;
// console.log("The value of a " +a);
// console.log("The value of b " +b);

// Swap using without using third variable?
// a=10;
// b=5;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("The value of a is " + a)
// console.log("The value of b is " + b)

//if else condition
// var tomr = 'rain';
// if(tomr=='rain'){
//     console.log("take raincoat")
// }
// else{
//     console.log("Tomr is not rain")
// }

//Nested if else condition
//leap year

// var year = 2022
// if(year%4 ==0){

//     console.log("This is leap year")
// }
// else{
//     console.log("not a leap year")
// }

//ternary operator
// var age=17;
// console.log((age>= 17) ? "vote": "Cant Vote");

//switch statement


//area of circle
// var area="circle";
// var PI=3.142,l=5,b=4,r=3;

// if(area=="circle"){
//     console.log("the area of circle is : " + PI*r**2);

// }else if(area == "triangle"){
//     console.log("the area of triangle is : " + (l*b)/2); 
// }
// else if(area == "rectangle"){
//     console.log("the area of rectangle is : " + (l*b)); 
// }
// else{
//     console.log("enter valid data");
// }

// switch(area){
//     case'circle':
//     console.log("the area of circle is : " + PI*r**2);

//     case'triangle':
//     console.log("the area of triangle is : " + (l*b)/2); 

//     case 'rectangle':
//         console.log("the area of rectangle is : " + (l*b)); 
    
//     default:
//         console.log("Please Enter Valid data")


// }

//break stmt terminates the cases and doesnt check next condition 


//while Loop

// var num = 2;
// while(num<=10){
//     console.log(num)//infinite loop
//     num++;
// }

// do while
// var num=2;
// do{
//     console.log(num)//infinite loop
//         num++;

// }while(num<=10)

//For loop

// for(var num =0;num<=10;num++){
//     debugger;
//     console.log(num);
// }

// write a pgm to write table

// for(var num =1;num<=20;num++)
// {
//     var tableOf=20;
//     console.log(tableOf + "*" + num+"=" + tableOf*num) 

// }

//functions in js
// A function in js is a block of code desgined to perform a particular task 
//function defination 
//Before we use a function we used to define it


// function sum (){

//     var a=10;
//     var b=20;
//     var total = a+b;
//     console.log(total);

// }

// sum();

//function expression
// function expresssion simply means create a function and put it in varaiable

// function sum (a,b){
//     var total= a+b;
//     console.log(total);

// }
// var funExp =  sum(5,15);

//When js returns reaches the return keyword the function will stop executing 

// function sum(a,b){
// return  total =  a+b;
// // console.log(total)
// }
// var funExp =  sum(5,15);
// console.log(funExp)

//Anonymous function 
// A function expression is similar to and the same syntax
//as a function declaration one can define named
// function expression where the name of the expression might be used in the call stack for example
// var funExp = function(a,b){
//     return  total =  a+b;
    // console.log(total)
//     }
// var sum = funExp(15,15);

// console.log('Sum of ' +sum)


// ECMA Script

// var myName ="Ruchika";
// console.log(myName);

// let myName ="Ruchikaaa";
// console.log(myName);


// var => function scope
// let and const => Block scope

// function biodata(){
//     let myFirstName ="vinod";
//     console.log(myFirstName);
    
//     if(true){
//         let  myLastName = " thapa";
//         console.log('inner' + myLastName);
//         console.log('inner' + myFirstName);
    
//     console.log('innerOuter' + myLastName);
//     }

// }
// biodata();

//js pgm to print table

// for(let num =1 ; num <= 10; num++){
//     let tableOf = 19;
//     console.log(`${tableOf} * ${num} = ${tableOf * num }`);
// }

// Deafult parameters
//Default function parameters allow named parameters to be
//initiialized with default value if no value

// function mult(a,b=5){
//     return a* b;

// }
// console.log(mult(5));


//Fat arrow function 

// Normal way of writing function 

// console.log(sum());
// function sum (){
//     let a = 5; b=6;
//     let sum = a+b;
//     return `the sum of the two numbers is ${sum}`
// }
// How to convert in the Fat arrow function 


// console.log(sum());

// const sum =() =>{
//     let a = 5; b=6;
//     let sum = a+b;
//     return `the sum of the two numbers is ${sum}`
// }
// console.log(sum());

// const sum = () => `the sum of two  number is ${(a=5)+(b=6)}`;

// console.log(sum());


// Arrays in js 

//When we use var , we can stored only one value at atime.
//when we feel like storing multiple values in one variable then
//In js , we have an array class and
// arrays are the prototypes of this class


var frnd1 ='Ru';
var frnd2 = 'abc';
var frnd3 = 'unu';
var frnds=['Ru','abc','unu'];

//When we feel like storing multiple values in one variable then
//instead of var, we will use an array
// In js we have an array class and
// arrays are the prototype of this class

//example

// var myFrnds = ['Ru','abc','unu'];

// Array Traversal in array
// navigate through an array 

// if we want to get the single data at atime and also
//if we want to change the data 

// var myFrnds = ['Ru','abc','unu'];

// console.log(myFrnds.length - 1);

// if we want to check the length of elemenets of an array

// console.log(myFrnds.length);

// we use for loop to navigate 
// var myFrnds = ['Ru','abc','unu'];

// for(var i =0 ; i<myFrnds.length ; i++){
//     console.log(myFrnds[i]);
// }


//After ES6 we have for .. in and for .. of loop too
// var myFrnds = ['Ru','abc','unu'];

// for(let elements in myFrnds){
//     console.log(elements);
// }

// for(let elements of myFrnds){
//     console.log(elements);
// }

// Array.prototype. forEach()
//Calls a function for each  elements in the array 

// var myFrnds = ['Ru','abc','unu'];

// myFrnds.forEach(function(element,index,array){

//     console.log(element + "index :" + index + " " + array );

// });

// myFrnds.forEach((element,index,array) => {

//     console.log(element + "index :" + index + " " + array );

// });

//Searching and filter in an array 

//Array.prototype.indexOf()

//returns the first (least) index of an element within the array equal
//to an element or -1 if none is found . It search the element from the
/// 0th index number

// var myFrndsNames = ["sdxsd","sedc","wsdes","dsadsa"];


// const myNumbers =[1,2,3,5];
// console.log(myNumbers.unshift(4,6));

// console.log(myNumbers);

// Output 
//6
// [ 4, 6, 1, 2, 3, 5 ]


//Array.prototype.pop()
//The pop() method removes the last element from an array and returns
//that element. This method Changes the length of the array .
// const plants =["dssscsde","sd","dces","cfdds"];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// Output 
//[ 'dssscsde', 'sd', 'dces', 'cfdds' ]
// cfdds
// [ 'dssscsde', 'sd', 'dces' ]


// Array.prototype.shift()
// The shift() method removes the first element from an array and returns
// that removed element. This method changes the length of the array.
// const plants =["dssscsde","sd","dces","cfdds"];

// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


// Output
//[ 'dssscsde', 'sd', 'dces', 'cfdds' ]
// dssscsde
// [ 'sd', 'dces', 'cfdds' ]


// Challenge time 
//Add Dec at the end of an array?
//What is return value of splice method?
//update march to march (update)?
// Delete june from an array ?

// const months = ['jan' ,'Feb' , 'March', 'April','May'];

//sol1:

// const newMonth = months.splice(months.length,0,"Dec");
// console.log(months);

//Output 

// [ 'jan', 'Feb', 'March', 'April', 'May', 'Dec' ]

//sol2:
// console.log(newMonth);

//output 

//[]

//sol 3:

// const months = [ 'jan', 'Feb', 'sdcs', 'April', 'May', 'Dec' ];

// const indexOfMonth = months.indexOf('march');
// if(indexOfMonth != -1){

//     const updateMonth = months.splice(2,2,'March');

// } 
// else{
//     console.log("No such data found");
// }
// const updateMonth = months.splice(2,2,'March');
// console.log(months);

// const months =['Jan ', 'march', 'April' , 'June','July'];

// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){

//     const updateMonth = months.splice(indexOfMonth,4);
//     console.log(months);
//     console.log(updateMonth);

// }else{
//     console.log('No such data found');

// }

//Output : [ 'Jan ', 'march' ]
// [ 'April', 'June', 'July' ]

// Challenge Time 

// Find the square root of each element in an array ?
 //let arr = [25,78,98,12,76];

 // Multiply each element by 2 and return only those elements which are greater than 10?
 //let arr = [2,3,4,6,8]

 // Returns a new array containing the results of calling a 
 //function on every element in this array 

 const array1 = [1,4,9,16,25];
 //num > 9

//  let newArr = array1.map((curElem,index,arr) => {
//      return curElem >9 ;

//  }) 

//  console.log(array1);
//  console.log(newArr);

    // let newArr = array1.map((curElem,index,arr) => {

    //     return `Index no = ${index} and the value is ${curElem} belong to ${arr}`

    // })

    // console.log(newArr);

    // let newArrfor = array1.forEach((curElem,index,arr) => {

    //     return `Index no = ${index} and the value is ${curElem} belong to ${arr}`

    // })

    // console.log(newArrfor);

    // Challenge time 

    // Find the square root of each element in an array ?
    //let arr =[25,36,49,64,81];

    // multiply each element by 2 and return only those elements which are greater than 10 ?
    // let arr = [2,3,4,6,8];

    // let arr = [25, 36, 49, 64, 81];

    // let arrSqr = arr.map ((curElem) =>{
    //     return Math.sqrt(curElem);
    // })

    // console.log(arrSqr);

// multiply each element by 2 and return only those elements which are greater than 10 ?
    // let arr = [2,3,4,6,8];

    // let arr2 = arr.map((curElm) =>{
    //     return curElm * 2 ;
    // }).filter((curElem) =>{
    //     return curElem > 10;
    // })

    // OR

    // let arr2 = arr.map((curElm) =>  curElm * 2).filter((curElem)=> curElem > 10);


    // console.log(arr2);

// Reduce Method 

//flatten an array means to convert the 3d or 2d array into a 
// single dimension array 

//The reduce() method executes a reducer function (that you provide)
// on each element of the array , resulting in single output value

// The reducer function takes four arguments:
// Accumulator
// Current Value 
// Current index
// Source Array 

// let arr = [5, 6, 2];

// let sum = arr.reduce((accumulator ,curElem , index, arr)=>{
//     debugger;
//     return accumulator +=  curElem ;
// },7)
// console.log(sum);

// How to fatten an array 
// converting 2d and 3d array into one dimensional array 

// const arr =[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8']
// ];

// let flatArr = arr.reduce((accum, currVal) =>{
//     return accum.concat(currVal)

// })
// console.log(flatArr);

// Strings in js
// A js is zero or more characters written inside quotes .
// Js strings are used for storing and manipulating text
// You can use single or double quotes 
// Strings can be created as primitives 
// from sting literals or as objects using the string() constructor

// let myName = "Ruchika";
// let myChannelName = "Jain";

// let ytName = new String("Thapa Technical");

// console.log(myName);
// console.log(myChannelName);
// console.log(ytName);

// Output 

//Ruchika
// Jain
// [String: 'Thapa Technical']

// How to find the length
//String.prototype.length
// Reflects the length of the string 

// let myName = "Ru ";
// console.log(myName.length);

// Output 
// 3

// Escape Character 

// let anySen = 'sygujaknhoij iuhokjn  "kihuoihnoih " dfcdv kbbgyub ' ;
// console.log(anySen);


 // Finding a String in a String 

 // String.prototype.indexOf(searchValue [, fromIndex])
 // he indexOf() method returns the index of (the position of) the first
 // occurrence of a specified text in a string 

//  const myBioData = "yft fj hbj km" ; 
//  console.log(myBioData.indexOf("hbj"));

 // Output 
 // -1

//  const myBioData = "yft fj hbj km" ; 
//  console.log(myBioData.lastIndexOf("h", 7));

// Extracting String Parts 

// There are 3 methods for extracting a part of string:

//slice(start,end)
//substring(start,end)
//substr(start,length)

// The slice() method
// slice() extracts a part of a string and returns the extracted part
// in a new string 

// Themethod takes 2 parameters : the start position 
//and the end position (end not included)

// var str = "Apple,Bananaa,Kiwi";

// let res = str.slice(9,-4)
// console.log(res);

// The slice method selects the elements starting at the
//given start argument and ends at but does not include,
//the given end argument

//Note:The original array will not be chnaged 


// Display only 280 charachters of a string like one used in twitter?

// let myTweets = "szaaa aaa aaaa uhiukjn hbjhuihn jbkjnkj iukhnujnkj uuj hun ujhn iini hjbjb nkjnin ijlikm jolijm ijmik ijn ijnm mmnoiknio  ijnikn iji ijoikn    iiiiiiiiiiiii ijjnnnnnn nnn nnnnnfvvvvvv vv vvvv vvvd     fdvvv vvvvvv vvvvv vvvvv vvvvvvv vd  rdd dd ddd"

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// Output :

// szaaa aaa aaaa uhiukjn hbjhuihn jbkjnkj iukhnujnkj uuj hun ujhn iini hjbjb nkjnin ijlikm jolijm ijmik ijn ijnm mmnoiknio  ijnikn iji ijoikn    iiiiiiiiiiiii ijjnnnnnn nnn nnnnnfvvvvvv vv vvvv vvvd
// fdvvv vvvvvv vvvvv vvvvv vvvvvvv vd  rdd dd ddd
// 248


//The substring() Method

//substring() is similar to slice().

//The diff is that substring () cannot accept 

//negative indexes.

// var str ="Apple,bananaa,kiwi";
// let res = str.substring(0,4);
// console.log(res);

//Output

//Appl

// If we give negative values then the characters ArrayBuffer
// counted from the 0th pos

//The substr() Method 
//substr()  is similar to slice()

//The difference is that the second parameter specifies the
//length of the extracted part.



// var str ="Apple, bananaa, kiwi";
// let res = str.substr(0,8);
// console.log(res);

//Output

//Apple, b

// var str =  "Apple, bananaa, kiwi";
// let res = str.substr(-4);
// console.log(res);

//Output

// kiwi

// Replacing string content()

// String.prototype.replace(SearchFor, replaceWith)

//The replace() method replaces a specified value 
//with another value in a string 

// let myBioData ="I am hbuyjb bhikj  vinod uhiuj  vinod ";

// let replaceData = myBioData.replace('vinod', 'Vinod')

// console.log(replaceData)

// console.log(myBioData)

//Output 

//I am hbuyjb bhikj  Vinod uhiuj  vinod
// I am hbuyjb bhikj  vinod uhiuj  vinod

//Points to rememeber 
//1:The replace() method does not change the string 
// it is called on .It returns a new string 
//2:By default , the replace () method replaces only the first match 
//3:By default , the replace() method is case sensitive.
//Writing VINOD (with uppercase) will not work 

// Ectracting String Characters 

//There are 3 methods for extracting string characters:

//charAt(Position)
//charCodeAt(position)
//property access []

//The charAt() Method 
//The charAt() Method returns the character at a
//specified index (position ) in a string 

// let str = "RUCHIKA";

// console.log(str.charAt(6))

//Output 

//A


// The charCodeAt() Method
//The charCodeAt() method returns the unicode of the 
//character at a specified index in a string 

// The method returns a UTF -16 code
//(an integer between 0 and 65535)

// let str = "RUCHIKA";

// console.log(str.charCodeAt(6))

//Output 

//65
 

//The Unicode standard provides a unique number for every 
// character , no matter the platform , device , apllication, 
// or language. UTF_8 is a popular unicode encoding which 
//has 88-bit code units .

// Return the unicode of the last character in a string
// let str = "HELLO WORLD";

// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

//Output 

//68

//Property access 
//ECMAScript 5(2009) allows prperty access [] on strings 

// var str ="HELLO WORLD ";
// console.log(str[0]);

// Other useful methods

// let myName ="Ruchika JaIn ";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

//The concat() Method
//concat() joins two or more strings 

let fName= "ruchika"
let lName = "jain"

console.log(fName.concat( +lName));
console.log(fName.concat( " " +lName));








 



























