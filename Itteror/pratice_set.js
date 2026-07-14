//! Q1: Double [2,4,6,8,10] -> [4,8,12,16,20]
// let arr = [2,4,6,8,10];
// let newArr = arr.map((num) => {
//     return num * 2;
// })
// console.log(newArr);

//! Q2: Convert ['apple','banana','mango','orange'] to uppercase.
// let arr = ['apple', 'banana', 'mango','orange']
// const newArr = arr.map( (item) => {
//     return item.toUpperCase();
// });
// console.log(newArr);

//! Q3: Extract names from user objects.
// let Arr = [
//     {
//         name : "Ravikishan",
//         id : 1
//     },
//     {
//         name : "Rahul",
//         id : 2
//     },
//     {
//         name : "Kishan",
//         id : 3
//     }
// ]
// const nameArray = Arr.map((item) =>{
//     return item.name;
// })
// console.log(nameArray);

//! Q4: Add 18% GST to prices [100,250,500] -> [118,295,590].
// let prices = [100, 250, 500];
// const priceWithGst = prices.map((price) =>{
//     return price + ((price * 18) / 100);
// })
// console.log(priceWithGst);

//! Q5: Add passed:true property to each student object.
// let student = [
//   {
//     name: "Ayush",
//     marks: 78,
//     rollNo: 1,
//   },
//   {
//     name: "Rahul",
//     marks: 48,
//     rollNo: 2,
//   },
//   {
//     name: "Kishan",
//     marks: 89,
//     rollNo: 3,
//   },
//   {
//     name: "Prince",
//     marks: 28,
//     rollNo: 4,
//   },
//   {
//     name: "Satyam",
//     marks: 18,
//     rollNo: 5,
//   },
// ];
// let updatedStudent = student.map((student) => ({
//   ...student,
//   passed: true,
// }));
// console.log(updatedStudent);

//! Q1: Filter even numbers from [1..10].
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let even = arr.filter((num) => {
//     if(num % 2 === 0){
//         return num;
//     }
// })
// console.log(even);

//! Q2: Filter words with length > 3.
// let words = ['rwr','dsafasdfasd', 'fadasdsa', 'fdsfsdfafe', 'ewtewqfsdq', 'yj]d', 'w', 'fa' , 'd'];
// let newWords = words.filter((item) => {
//     if(item.length > 3){
//         return item;
//     }
// })
// console.log(newWords);

//! Q3: Filter adults (age >=18) from people array.
// let peoplesAge = [42,42,51,6,50,16, 14, 67, 17, 91];
// let adults = peoplesAge.filter((age) => {
//     if(age >= 18){
//         return age;
//     }
// })
// console.log(adults);

//! Q4: Filter positive numbers from [-10,5,-3,8,0,15].
// let arr = [-10, 5, -3, 8, 0, 15];
// let positiveNumber = arr.filter((num) => {
//     return num >= 0;
// })
// console.log(positiveNumber);

//!Q5: Filter products with price >1000.
// let product = [
//   {
//     Name: "Mouse",
//     price: 499,
//   },
//   {
//     Name: "KeyBoard",
//     price: 1999,
//   },
//   {
//     Name: "Laptop Stand",
//     price: 299,
//   },
//   {
//     Name: "Laptop Bag",
//     price: 1999,
//   },
// ];

// let PriceRangeProduct = product.filter((obj) => {
//   if (obj.price > 1000) {
//     return obj.Name;
//   }
// });
// console.log(PriceRangeProduct);

//! Q1: Sum [10,20,30,40,50].
// let arr = [10, 20, 30, 40, 50];
// let sum = arr.reduce((num, cur) => cur+ num , 0);
// console.log(sum);

//! Q2: Product [2,3,4].
// let arr = [2,3,4];
// let product = arr.reduce((previous, current) => previous * current, 1);
// console.log(product);

//! Q3: Find maximum in [25,8,99,34,67].
// let arr = [25,8,99,34,67];
// let max = arr.reduce((previous, current) => Math.max(previous,current), -1);
// console.log(max);

//! Q4: Find total cart price.
// let product = [
//   {
//     Name: "Mouse",
//     price: 499,
//   },
//   {
//     Name: "KeyBoard",
//     price: 1999,
//   },
//   {
//     Name: "Laptop Stand",
//     price: 299,
//   },
//   {
//     Name: "Laptop Bag",
//     price: 1999,
//   },
// ];
// const totalPrice = product.reduce((acc, product) => acc + product.price, 0);
// console.log(totalPrice);

//! Q5: Count occurrences of ['apple','banana','apple','orange','banana','apple'].
// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);


// 1. Filter passing students, map names, reduce to count passed.

// 2. Filter delivered orders, map prices, reduce total delivered amount.

// 3. Filter IT employees, increase salary by 10%, reduce total updated salary.