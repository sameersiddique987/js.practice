//  alert("hello world");


//  var firstName = ("sameer")
//  var lastName = ("siddique")
// var age = (19)
// var isAvailable = (true)


//  console.log( "my name is" +" "+  firstName+" "+lastName +" "+ "my age" +" "+ age +" "+ isAvailable)



// var num1 = 10;
// var num2 = 20;
// var num3 = "10";
// console.log(typeof(num1));
// console.log(num1 + num2 + num3)

// var userName = prompt('Inter your name');
// console.log('userName');

// var num1 = Number(prompt('Inter your First name'))
// var num2 = Number (prompt('Iter your Second name'))

// var num1 =+ prompt('Inter your First name')
// var num2 =+ prompt('Inter your Second name')
// console.log(num1 + num2)



// Arithmatic Operator

// +
// -
// *
// /
// % == modulus

// var num1 = 10;
// var num2 = 5;

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)
























//Assignment Operator
// =
// +=
// -=
// /=
// *=

// var num1 = 12;
// num1 = num1 + 10;
// num1 += 10;
// num1 -= 10;
// num1 /= 10;
// num1 *= 10;
// console.log(num1)














//Comparision Operator

// >
// <
// == || !=
// === || !==
// != data type check nahi kraiga!
// !== data type check kraiga!
// >=
// <=


 
// console.log(10 == '10')
// console.log(10 === 10)



//logical Operator

//&& == and
//|| == OR


// var comparision = 10 <= 10 || 10 < 6 || 10 > 15;
// var comparision = 10 <= 10 && 10 < 6 && 10 > 15;
// console.log(comparision);

// var num = 10;
// console.log(num+1)
// console.log(++num)
// console.log(num++)

// console.log(num++)
// console.log(++num)


// console.log(++num + num++ + num++ + ++num)









































var userName =("sameer")
document.write( '<h1>' + userName + '</h1>')











// var bankBalance = +prompt('enter your bank balance');

// if(bankBalance > 1500000){
//     console.log('rishta mubarak ho!')
// }else{
//     console.log('ammi na zehr kahlia! || istekhara ma mana hogaya ha.')
// }










// class 3

// var percentage = +prompt("inter your percentage")

// if(percentage > 100){
//     console.log("malik percentage tw sahe do!")
// }
// else if(percentage < 50){
//     console.log("malik rikshaw chalao")
// }
// else if(percentage >= 50 && percentage <= 60){
//     console.log("C grade aya h")
// }
// else if(percentage >= 60 && percentage <= 70){
//     console.log("B grade aya h")
// }
// else if(percentage >= 70 && percentage <= 80){
//     console.log("A grade aya h")
// }
// else if(percentage >= 80 && percentage <= 100){
//     console.log("A1 grade aya h")
// }
// else{
//     console.log(percentage)
// }











// var num1 = 2;
// if(num1>8){
//     console.log("8 num se bara h")  
// }
// else if(num1 > 6){
//     console.log("6 num bara h")
// }
// else{
//     console.log("2 num se chuta h")
// }











// function greetUser(){
//     console.log("hello world")
//     console.log("hello sameer")
    
//     return"sameer"
    
// }

// var myfunc = greetUser()
// console.log(myfunc)










// function percentagecal (mark1 ,mark2 , mark3 , mark4){
//     var totalmarks = 400;
//     var obtainedmarks = mark1 + mark2 + mark3 + mark4;
// return obtainedmarks / totalmarks * 100;
// }
//  sameerPercentage = percentagecal(40 , 45 , 50 , 70)
// console.log(sameerPercentage)









// var head = document.querySelector(".head");
// console.log(head.innerhtml)
// head.innerHTML = "change through js"
// console.log(head.innerHTML)








var head = document.querySelector('.head')
var paragraph = document.querySelector('#para')
console.log(paragraph.innerHTML)



function changeText(){

    if(paragraph.innerHTML==="changed through js" && head.innerHTML==="changed through js"){
        paragraph.innerHTML = "Lorem ipsum dolor sit."
        head.innerHTML= "hello world"
    }
    else {paragraph.innerHTML = "changed through js"
        head.innerHTML ="changed through js"
}

}







































