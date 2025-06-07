/*
multi line comments
Data types:
1.Constants(const)
2.Variable(var)
3.Let(let)

const a = 10; //constant
cant reassign a new value to a constant if it is already assigned
in case if we try to reassign a new value to a constant it will throw an error

var b = 20;
function level Scope

let c = 30; 
let is block scoped
*/
//single line comment

// const a =10;
// console.log(a);
// // a=20;
// // console.log(a);
// var b=20;
// console.log(b);
// b=30;
// console.log(b);
// let c = 40;
// console.log(c);
// c = 50;
// console.log(c);

// //let is block scoped
// if(c==50){
//     let d = 60;
//     console.log(d);
//     console.log(d);
//     d=70;
//     console.log(d);
// }
// //console.log(d);

// if(c==50){
//     var e = 80;
//     console.log(e);
//     e=90;
//     console.log(e);
// }
// console.log(e);

//function declation in java script
// function chv(){
//     let num1=10;
//     let num2=20;
//     let sum = num1 + num2;
//     console.log("Addition of num1 and num2: " + sum);
// }
// chv();

function chv(){
    var num1=10;
    var num2=20;
    var sum = num1 + num2;
    if(sum > 20){
       let a =100;
       console.log(a);
       console.log(sum);
    }
   //console.log(a);
    console.log("Addition of num1 and num2: " + sum);
}
//console.log(sum)
//chv();

//loops in javascript
/*
types of loops:
1. for loop-syntax (initialization; condition; increment/decrement)
   for(initialization; condition; increment/decrement){
        //code to be executed
    }
    for(var i=0; i<10; i++){
        console.log(i);
    }
2. while loop
    while(condition){
          //code to be executed
     }
     var i=0;
     while(i<10){
          console.log(i);
          i++;
     }
3. do while loop
    do{
          //code to be executed
     }while(condition);
     var i=0;
     do{
          console.log(i);
          i++;
     }while(i<10);
4. for in loop
     var obj = {a: 1, b: 2, c: 3};
     for(var key in obj){
          console.log(key + ": " + obj[key]);
     }
5. for of loop
     var arr = [1, 2, 3, 4, 5];
     for(var value of arr){
          console.log(value);
     }
6. forEach loop
     var arr = [1, 2, 3, 4, 5];
     arr.forEach(function(value){
          console.log(value);
     });
*/
//for exmaple program
// console.log("FOR LOOP EXAMPLE");
// for(var i=0; i<10; i++){
//     console.log(i);
// }

// console.log("WHILE LOOP EXAMPLE");
//  var i=0;
//      while(i<10){
//           console.log(i);
//           i++;
//      }
// console.log("DO WHILE LOOP EXAMPLE");
//     var i=0;
//         do{
//             console.log(i);
//             i++;
//            // console.log(i);
//         }while(i<10);

     /*
     ARRAYS IN JAVASCRIPT
     WAHT IS ARRAY?
     let,var,const



     An array is a data structure that can hold multiple values in a single variable.
     It is a collection of elements, where each element can be accessed by its index.
     Syntax:
     var arrayName = [element1, element2, element3, ...];
     var arr = [1, 2, 3, 4, 5];
     */


     // var a=10;
     // console.log(a);
     // a="Hello";
     // console.log(a);
     // a=true;
     // console.log(a);
     // a=4.5;
     // console.log(a);
     // a=4.15;
     // console.log(a);
     //declaration of array in js
// let array1 = [1,2,"chv",true,4.5,4.15];
//            //0,1,2,3,4,5,6,7,8,9
// let array2= [1,2,3,4,5,6,7,8,9,10];
// console.log(array1)
// let array1length = array1.length; 
// console.log(array1length)//length of the array
// console.log(array1.length);
// let array3 ={id: 1, name: "chv", age: 25, isActive: true};
// console.log(array3);
// console.log(array3.length);

            //0
let array4 = [1,2,3,4,5,6,7,8,9,10];
let array5 = [11,12,13,14,15,16,17,18,19,20];
// console.log(array4);
// console.log(array5);
// array4.push(array5);
// console.log(array4);
// console.log(array4.length);

// console.log("for loop in array4");
// for(let i=0; i<array4.length; i++){
//     console.log(array4[i]);
//     /*
//     i=0;
//     0<10->true
//     i++->i=1
//      ---------------
//      i=1;
//      1<10->true
//      i++->i=3
//      ---------------

//     */
// }    
//  console.log("whiel loop in array4");
// var i=0;
//  while(i<array4.length){
//      console.log(array4[i]);
//      i++;
//  }
//      console.log("do while loop in array4");
//      var j=0;
//      do{
//           console.log(array5[j]);
//           j++;
//      }while(j<array5.length);
//for of loop in array4
//console.log("for of loop in array4");
// for(let b of array4){
// //     if(b%2==0){
// //         console.log(b);
// //     }
// console.log(b);
// }

//for each loop in array
// array4.forEach(function(value, index) {
//     console.log("Value: " + value + ", Index: " + index);
// });

// //array push
// array4.push(11);
// console.log("After push: " + array4);
// //array pop
// array4.pop();
// console.log("After pop: " + array4);

// //array shift
// array4.shift();
// console.log("After shift: " + array4);
// //array unshift
// // array4.unshift(0);
// // console.log("After unshift: " + array4);

// //array reverse
// array4.reverse();
// console.log("After reverse: " + array4);

// //array sort
// array4.sort();
// console.log("After sort: " + array4);

// //array splice
// array4.splice(2, 2, 100, 200);
// console.log("After splice: " + array4);
// // 0,1,2,3,4,5,6,7,8,9
// //[1,2,100,3,4,5,6,7,8,9,10]
// //`0,1,2,3,4,5,6,7,8,9
//  let array6 = [1,2,,3,4,5,6,7,8,9,10];
//  array6.splice(5,9,"chv","hello");
// console.log("After splice: " + array6);


// function add(a, b) {
//      console.log("Addition of a and b: " + (a + b));
// }
// add(10, 20);
// array4.push();
// console.log("After push: " + array4);
// array4.unshift();
// console.log("After unshift: " + array4)



// console.log(array4);
// array4.shift();
// console.log("After shift: " + array4);
console.log(array4);
let array7=array4.slice(1,5);
// console.log("After slice: " + array7);
//0,1,2,3,4,5,6,7,8,9,10
//1,2,3,4,5,6,7,8,9,10
let array8=array4.slice(1,5);
console.log("After slice: " + array4);
console.log("After slice: " + array8);

function myfunction(){
     alert("Hello, this is a function!");
}
function myfunction2(){
     console.log("Hello, this is another function!");
}
myfunction2();
function myfunction3(){
     console.log("Hello, this is another function!");
}
myfunction3();
function myfunction4(){
     console.log("Hello, this is another function!");
}
myfunction4();
function myfunction5(){
     console.log("Hello, this is another function!");
}
myfunction5();