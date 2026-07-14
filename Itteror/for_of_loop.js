//!----------------- for of --------------------

// let arr = [3, 35, 34, 51, 11, 60];

// for(const num of arr){
//     console.log(num);
// }

// const str = "Hello World!";
// for(const s of str){
//     if(s == ' '){
//         continue
//     }
//     console.log(`Each Character :  ${s}`);
// }

// Maps
// let map = new Map();
// map.set('1', 'India')
// map.set('2', 'UK')
// map.set('3', 'USA')
// // map.set('1', 'India') // Not contains duplicates.
// console.log(map);

// for(const ele of map){
//     console.log(ele);
// }


const myObj = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple"    
}

//-------------- for in --------
for (const key in myObj) {
    console.log(key , " : ", myObj[key]);
    // console.log(myObj[key]);
}