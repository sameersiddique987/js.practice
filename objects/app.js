// console.log("hello world");



// const mysym = Symbol("key1")
// const myuser ={
//     name:"sameer",
//     lastName:"siddique",
//     age:19,
// [mysym] :"mykey1"

// }
// console.log(myuser.name); ye bhe thk h mge 1 value k lyee
// console.log(myuser["name"]);
// console.log(myuser[mysym]);
// myuser.lastName = "siddique"
// Object.freeze(myuser)
// myuser.age= 20 freez value not chnge
// myuser.lastName="sameer"
// console.log(myuser);


// myuser.greet = function () {
//     console.log("hello world");
// }

// myuser.greet2 = function () {
//     console.log(`hello world , ${this.name}  ${this.lastName} ${this.age}`);
// }
// console.log(myuser.greet());
// console.log(myuser.greet2());







// const arr = ['Muhammad Abdullah' , 20]


// const obj = {
//     name: 'Muhammad Abdullah',
//     age: 20,
//     isLoggedIn: true,
//     hobbies: ['cricket' , 'swimming' , 'running']
// }


// const nestedObj = {
//     names: {
//         firstPosition: ['abdullah', 'usman', 'haseeb', 'abubakar'],
//         secondPosition: [{
//             names: ['Ali', 'babar']
//         }, {
//             names: [{ names: ['hammad'] }]
//         }]
//     }
// }

// console.log(nestedObj.names.secondPosition[1].names[0].names[0]);








// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];



// console.log(nestedData[0].subcategories[0].products[1]);

// console.log(nestedData[1].subcategories[0].products[0]);




const users = [
{
    name: "Alice",
            age: 25,
            hobbies: ["Reading", "Painting"]
        },
        {
            name: "Bob",
            age: 30,
            hobbies: ["Playing guitar", "Cooking"]
        },
        {
            name: "Charlie",
            age: 22,
            hobbies: ["Hiking", "Photography"]
        },
        {
            name: "David",
            age: 28,
            hobbies: ["Running", "Watching movies"]
        },
        {
            name: "Ella",
            age: 35,
            hobbies: ["Traveling", "Knitting"]
        },
        {
            name: "Frank",
            age: 20,
            hobbies: ["Gaming", "Drawing"]
        },
        {
            name: "Grace",
            age: 27,
            hobbies: ["Singing", "Dancing"]
        },
        {
            name: "Hannah",
            age: 32,
            hobbies: ["Cooking", "Yoga"]
        },
        {
            name: "Ian",
            age: 24,
            hobbies: ["Playing football", "Reading"]
        },
        {
            name: "Jessica",
            age: 29,
            hobbies: ["Writing", "Cycling", 'swimming']
        }
    ];
    
    console.log(users);

    const div = document.querySelector("#users")
    
    
    for (let i = 0; i < users.length; i++) {
        let hobbies = " "
    
        console.log(users[i]);
        for (let j = 0; j < users[i].hobbies.length; j++) {
            console.log(users[i].hobbies);
            hobbies+=`<li>${users[i].hobbies[j]}</li>`
        }
    
    
    div.innerHTML+=`<h1>Name:${users[i].name}</h1>
    <h1>Age:${users[i].age}</h1>
    <h1>Hobbies</h1>
    <h2>${hobbies}</h2>
    <hr/>`
    
    }

    



























