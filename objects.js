
// /* const studentDetails = {
//     name: 'aboobakker',
//     age : 18,
//     place : 'puttur',
//     isLoggedIn : true,
//     rank : 1,

// }

// for (const key in studentDetails) {

//     console.log(`${key}: ${studentDetails[key]}`);
// }
// *////////////////////

// /////////////     accessing thoruh for loop     ////////////////////////


// /*
// const user = {

//     name: 'John Doe',

//     email: 'john.doe@example.com',

//     age: 25,

//     dob: '08/02/1989',

//     active: true
// };
// *//////////////////////////////////////////////////
// // iterate over the user object
// /*   
// for (const key in user) {

//     console.log(`${key}: ${user[key]}`);
// }
// *//////////////////////////////////////////////////


// // const members = ['a','b','c','d',56,67,78,56,67,78]

// // for (const key in members) {
// //     console.log(`${key}: ${members[key]}`);
// // }

const courses = {
    java: 10,

    javascript: 55,

    nodejs: 5,

    php: 15,

    listCourse : function(){
        console.log(this.javascript)
    }
};
 let courss=[1,2,3,10   ]
courses.listCourse();

let b= courss.map((key,index)=>{
   return console.log(key,"ima in "   + index)
})






// const a= "hh";
// a="nnn";
// courses.javascript=true;
// courses.flutter=45;


// const keys = Object.keys(courses);
// console.log(keys);

// keys.forEach((key,index)=>{
// console.log(`${key}: ${courses[key]}`);

// });

// const entries = Object.entries(courses);
// console.log(entries);

// // for (const key in courses) {
// //     console.log(`${key}: ${courses[key]}`);
// // };

// Object.values(courses).forEach(val => console.log(val));


