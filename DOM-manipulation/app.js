// console.log('hello world');

// function greetUser (user , user2){
//     console.log('hello ' + user + user2);
//     return 'hello ' + user
// }

// var username = greetUser('abdullah');
// console.log('username ===>' , username)










// var head = document.querySelector(".head")
// head.innerHTML="change through js"






// var head = document.querySelector(".head")
// function greetUser(){
//     console.log(head.innerHTML)
// if(head.innerHTML==="hello world"){
//     head.innerHTML="sameer saiddique"
// }
// else{
//     head.innerHTML="hello world"
// }
// }





// var head = document.querySelector(".head");
// function greetUser(){
//     console.log(head.innerHTML);
//     if(head.innerHTML==="hello world"){
//         head.innerHTML="my website"
//     }
//     else{
//         head.innerHTML="hello world"
//     }
// }

// var first = document.querySelector(".first")
// function user1 (){
// console.log(head.innerHTML)
// if(first.innerHTML==="hello world"){
//     first.innerHTML="sameer website"
// }
// else{
//     first.innerHTML="hello world"
// }
// }





// var second =document.querySelector(".second");
// function user2 (){
//     console.log(second.innerHTML)
//     if(second.innerHTML==="hello world"){
//         second.innerHTML="sameer siddique"
//     }
//     else(second.innerHTML="hello world")
// }






// var input = document.querySelector(".input")
// function getInputValue(){
//     console.log(input.value)
//     input.value=""
// }











//Template literals
//backtick



// var firstName = "sameer";
// var lastName = "siddique";
// var age = 19;

// console.log("my name is" + " "+ firstName +" "+ lastName+ " "+ "my age is" +" "+ age)
// console.log(`my name is ${firstName} ${lastName} my age is ${age}`)












var chemMarks = document.querySelector("#chem-marks")
var phyMarks = document.querySelector("#phy-marks")
var mathMarks = document.querySelector("#math-marks")
var comMarks = document.querySelector("#com-marks")
var studentTotal = document.querySelector("#total-marks")
var percentage = document.querySelector("#percentage")
var grade = document.querySelector("#grade")

function calculatePercentage(){
    console.log(chemMarks.value)
    console.log(phyMarks.value)
    console.log(mathMarks.value)
    console.log(comMarks.value)

TotalMarks = 400;
obtainedMarks = +chemMarks.value+ +phyMarks.value+ +mathMarks.value+ +comMarks.value;
console.log("obtained==>" , obtainedMarks)
studentTotal.innerHTML = obtainedMarks;
var studentPercentage = obtainedMarks/TotalMarks*100
percentage.innerHTML = studentPercentage;


if(studentPercentage > 80){
    grade.innerHTML ="A+"
}
else if(studentPercentage > 70){
    grade.innerHTML ="A"
}
else if(studentPercentage > 60){
    grade.innerHTML = "B"
}
else{
    grade.innerHTML = "FAIL"
}



}





















