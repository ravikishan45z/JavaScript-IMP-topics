// // let user = {};
// // user.id = "33432";
// // user.name = "xyz";
// // user.email = "xyz@gmail.com";

// // // nested objects ==>
// // let student = {
// //     id : 1234,
// //     name : {
// //         first_Name : "Ravi",
// //         last_Name : "Kishan"
// //     },
// //     email : "ravikishan202t@gmail.com",
// //     isStudent : true,
// //     isAdult : false
// // }

// // console.log(student);

// let obj1 = {
//   1: "A",
//   2: "B",
//   3: "C",
// };
// let obj2 = {
//   1: "A",
//   2: "B",
//   3: "C",
// };

// // let obj3 = {obj1, obj2};
// // console.log(Object.assign(obj3)); // irrregular
// // console.log(obj3);
// let obj3 = { ...obj1, ...obj2 };
// // console.log(obj3);

// let obj4 = Object.assign(obj1, obj2, obj3);
// // console.log(obj4);

// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));

//! object destructure. 
const course = {
  subject: "JAVASCRIPT",
  pricec: 1000,
  instructor: "Hitesh",
};

const {subject : sub} = course;
console.log(sub); 

