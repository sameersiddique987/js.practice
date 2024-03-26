// console.log("hello world");



// <!-- 1. Write a program to display the message “Hello World” 5 times 
// in your browser using for loop -->

// ANSWER

for (let i = 1; i <= 5; i++) {
    console.log("hello world");
    
}



// 2. Write a program to print numeric counting from 1 to 10.

// ANSWER

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}



// 3. Write a program to print multiplication table of any number 
// using for loop. Table number & length should be taken as an 
// input from user

// ANSWER

let user =+ prompt("ENter your table")
let times =+ prompt("how many time do you want")
for (let i = 1; i <= times; i++) {
    console.log(`${user}*${i}=${user*i}`);
    
}



// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop

// ANSWER

let a = ["Nokia", "Samsung","Apple", "Sony", "Huawei"]

for (let i = 0; i < a.length; i++) {
    console.log( a[i]);
    
}



// 5. Write a program to print items of the following array using for 
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”



let fruits = ["apple", "banana", "mango"," orange", "strawberry"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}
for (let i = 0; i < fruits.length; i++) {
console.log("Element at index", i ,"is", fruits[i]);
    
}



// 6. Write a program to initialize an array of N items by using 
// prompt. Where N is number of items as entered by the user



let N = prompt("enter your number items")
let arr = []
for (let i = 0; i < N.length; i++) {
    let items = prompt("enter itmes")
    arr.push(items)
}

console.log("arr items",arr);




















