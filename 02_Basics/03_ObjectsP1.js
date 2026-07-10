//! OBJECTS in JAVASCRIPT..........
// objects agar construcot se create hota hai to singalton hota hai ==> object.create(); constructor method.


let MySymble = Symbol("key");
const JSUser = {
  name: "RaviKishan",
  age: 23,
  place : "Gorakhpur",
  [MySymble] : "key.this",
  loggedIn : false
};

// Access method 
console.log(JSUser.name); //name.

// right Method
console.log(JSUser["name"]);
console.log(typeof JSUser["MySymble"]);

Object.freeze();
console.log(JSUser);
