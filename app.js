// Chapter 1 - 9
// problem 1
// alert("Welcome To Js Land \n Happy Coding")
// problem 2
// var a = prompt("Enter your age")
// alert("Your age is " + a)
// problem 3
// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("<p>Variable names can only contain numbers,$ and _ . For example $my_1stVariable</p>")
// document.write("<p>Variables must begin with a $,or _ . For example $name, _name or name</p>")
// document.write("<p>Variable names are case sensitive</p>")
// document.write("<p>Variable names should not be JS Keywords</p>")
// Chapter 9 - 11
// PROBLEM# 1
// var city = prompt("Enter your City");
// city = city.toLowerCase();
// if (city == "karachi") {
//     alert("Welcome To City Of Ligt")
// } else {
//     alert("Welcome")
// }
// PROBLEM# 2
// var gender = prompt("Enter your Gender");
// gender = gender.toLowerCase();
// if (gender == "male") {
//     alert("Good Moorning Sir")
// } else if (gender == "female") {
//     alert("Good moorning ma'am")
// } else {
//     alert("Good Moorning")
// }
// PROBLEM# 3
// var signal = prompt("color of road traffic signal ", "Red, Blue, Green");
// signal = signal.toLowerCase();
// if (signal == "red") {
//     alert("Must Stop")
// } else if (signal == "yellow") {
//     alert("Ready to Move")
// } else if (signal == "green") {
//     alert("Move on")
// } else {
//     alert("Wrong Color")
// }
// PROBLEM# 4
// var a = prompt("Enter Your Car fuel");
// if (+a < 0.25) {
//     alert("Please refill the fuel in your car")
// } else {
//     alert("Enjoy your drive")
// }
// PROBLEM# 5
// var math = prompt("Enter Your Maths Marks");
// var physic = prompt("Enter Your Physics Marks");
// var chemistry = prompt("Enter Your Chemistry Marks");
// var tot = +math + +physic + +chemistry;
// tot = Math.ceil(tot / 300 * 100);
// if (tot <= 39) {
//     alert("Your percentage is " + tot + "% F Grade")
// } else if (tot <= 49) {
//     alert("Your percentage is " + tot + "% D Grade")
// } else if (tot <= 59) {
//     alert("Your percentage is " + tot + "% C Grade")
// } else if (tot <= 69) {
//     alert("Your percentage is " + tot + "% B Grade")
// } else if (tot <= 79) {
//     alert("Your percentage is " + tot + "% A Grade")
// } else if (tot <= 100) {
//     alert("Your percentage is " + tot + "% A+ Grade")
// } else {
//     alert("Put right Number")
// }
// PROBLEM# 6
// var rand = Math.random() * 10;
// rand = Math.floor(rand);
// var secretNum = prompt("Enter Your Number 1-10");
// if (+secretNum === rand) {
//     alert("Bingoo You win")
// } else if (+secretNum === rand + 1 || +secretNum === rand - 1) {
//     alert("Close enough to the correct answer")
// } else {
//     alert("Fail")
// }
// console.log(rand)
// PROBLEM# 7
// var a = prompt("Enter Number divisible by 3");
// if (+a === 0) {
//     alert("0 is not divisible by 3")
// } else if (+a % 3 === 0) {
//     alert(a + " is divisible by 3")
// } else {
//     alert(a + " is not divisible by 3")
// }
// PROBLEM# 8
// var a = prompt("Enter Number");
// if (+a % 2 === 0) {
//     alert("The Number is Even")
// } else if (+a % 2 !== 0) {
//     alert("This Number is Odd")
// } else {
//     alert("Enter Number")
// }
// PROBLEM# 9
// var temp = prompt("Enter Temperature");
// if (+temp <= 10) {
//     alert("OMG! Today’s weather is so Cool.")
// } else if (+temp <= 20) {
//     alert("Today’s Weather is cool.")
// } else if (+temp <= 30) {
//     alert("The Weather today is Normal.")
// } else if (+temp > 30) {
//     alert("It is too hot outside.")
// } else {
//     alert("Enter right Temperature")
// }
// PROBLEM# 10
// var fistNum = prompt("Enter First Number");
// var oper = prompt("Enter Operator +,-,* and /");
// var secNum = prompt("Enter Second Number");
// if (oper === "+") {
//     alert(+fistNum + +secNum)
// } else if (oper === "-") {
//     alert(+fistNum - +secNum)
// } else if (oper === "*") {
//     alert(+fistNum * +secNum)
// } else if (oper === "/") {
//     alert(+fistNum / +secNum)
// } else {
//     alert("Enter Right Number or operator")
// }
// Chapter 12 - 13
// PROBLEM# 1
// var int1 = prompt("Enter Integer 1");
// var int2 = prompt("Enter Integer 2");
// if (+int1 > +int2) {
//     alert("Integer 1 is Greater")
// } else if (+int1 < +int2) {
//     alert("Integer 2 is Greater")
// } else if (+int1 == +int2) {
//     alert("Both Integer in Equel")
// } else {
//     alert("Select Number")
// }
// PROBLEM# 2
// var intt = prompt("Enter any Number");
// if (+intt > 0) {
//     alert("positive Number")
// } else if (+intt < 0) {
//     alert("Negative Number")
// } else if (+intt == 0) {
//     alert("Zero")
// } else {
//     alert("Select Number")
// }
// PROBLEM# 3
// var vowel = prompt("Enter Any Character of Alphabet");
// vowel = vowel.toLocaleLowerCase();
// if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
//     alert("Character is Vowel")
// } else {
//     alert("Character is not Vowel")
// }
// PROBLEM# 4
// var password = prompt("Enter Password", "Pakistan Zindabad");
// if (password === "Pakistan Zindabad") {
//     alert("Password is Corrct")
// } else {
//     alert("Password is Incorrect")
// }
// PROBLEM# 5
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert("Good day");
// } else {
//     alert("Good evening");
// }
// Chapter 14 - 16
// Problem# 1
// var Arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// problem #2

// var arr =[
//     ["Tabish", "Shayan", "Shami"], ["765", "777", "787"], ["89%", "91%", "92%"]
// ]
// problem #3

// var arr1 = prompt("Enter arr1");
// var arr2 = prompt("Enter arr2");
// var arr3 = prompt("Enter arr3");
// var arr = [arr1, arr2, arr3];
// alert(arr);
// var arr4 = prompt("Enter arr4")
// arr.push(arr4);
// alert(arr)
// problem #4

// var arr =["This", "is", "my", "cat"]
// var string = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3];
// alert(string)
// Chapter 17 - 20
// PROBLEM# 1
// document.write("<h1>Chapter 17-20</h1>")
// var array1 = [
//     [0, 1, 2, 3],
//     [0, 2, 0, 1],
//     [2, 1, 0, 1]
// ];
// document.write("<h2>Multidimensional Array</h2>" + array1[0] + "<br>" + array1[1] + "<br>" + array1[2]);
// PROBLEM# 2
// document.write("<h2>Counting</h2>")
// for (i = 1; i <= 10; i++) {
//     document.write(i + "<br>")
// }
// PROBLEM# 3
// document.write("<h2>Table</h2>")
// var a = prompt("Enter a Number to show its Multiplication Table");
// var b = prompt("Enter length multiplication table")
// for (var i = 1; i <= +b; i++) {
//     document.write(a + "*" + i + "=" + +a * i + "<br>")
// }
// PROBLEM# 4
// document.write("<h2>fruits</h2>")
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (i = 0; i <= fruits.length - 1; i++) {
//     document.write(fruits[i] + "<br>")
// }
// PROBLEM# 5
// document.write("<h2>Counting:</h2>")
// document.write("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15")
// document.write("<h2>Reverse counting:</h2>")
// document.write(" 10, 9, 8, 7, 6, 5, 4, 3, 2, 1")
// document.write("<h2>Even:</h1>")
// document.write("0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20")
// document.write("<h1>Odd:</h2>")
// document.write("1, 3, 5, 7, 9, 11, 13, 15, 17, 19")
// document.write("<h2>Series:</h2>")
// document.write("2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k")
// PROBLEM# 6
// var backry = prompt("Welcome to Cakery What do you wnat Sir/Madam");
// var a = backry.toLocaleLowerCase();
// var city1 = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var j = 0; j <= city1.length; j++) {
//     if (a == city1[j]) {
//         alert(backry + " " + " is available at index " + j)
//     }
// }
// PROBLEM# 7
// document.write("<h2>Largest Number In Array</h2>")
// var arr = [24, 53, 78, 91, 12];
// var largest = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//         largest = arr[i];
//     }
// }
// document.write(largest)
// PROBLEM# 8
// document.write("<h2>Smallest Number In Array</h2>")
// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (largest > arr[i]) {
//         largest = arr[i];
//     }
// }
// document.write(smallest)
// PROBLEM# 9
// document.write("<h2> program to print multiples of 5 ranging 1 to 100</h2>")
// for (i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write(i + " ")
//     }
// }
// document.write("<hr>")