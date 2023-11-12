

const myArr = new Array('apple', 'orange', 'mango', 'cheese','citar');
console.log("Array original: ", myArr);

const lengthArray = myArr;
console.log("Array after length: ", myArr.length)


const pushArray = myArr.push('kiwi');
console.log("Array after push: ", myArr)

const popArray = myArr.pop();
console.log("Array after pop: ", myArr)

const shiftArray = myArr.shift();
console.log("Array after shift: ", myArr)


const unshiftArray = myArr.unshift('lemon');
console.log("Array after unshift: ", myArr)

const deletehArray = myArr;
console.log("Array after delete: ", delete myArr[2]);

const myBoys = ["Raoof", "Latheef"];
const myGirls = ["Fathima", "sajida", "sakeena"];
const myChildren = myGirls.concat(myBoys);
console.log("Array after concatinate: ", myChildren)

const myParents = ["Ummar", "Zubaida"];
const myFamily = myBoys.concat(myChildren,myParents)
console.log("Array after three arrays concatinate: ", myFamily)


const flatArr1 = [[1,2],[3,4],[5,6]];
const flatArr2 = flatArr1.flat(); 
console.log('flat array before', flatArr1)
console.log('flat array after', flatArr2);






// //1. Creating an array using array literal:
// let courses = ["HTML", "CSS", "JSON", "JAVASCRIPT", "PYTHON"];
// // console.log(courses)

// //11 Accessing Elements of an Array
// // console.log(courses[0])
// // console.log(courses[1])
// // console.log(courses[2])

// //12 Change elements from a pre-defined array
// // courses[12] = "Geekforgeeks"
// // console.log(courses)


// //13 Convert an Array to String
// // console.log(courses.toString())


// //14 Increase and decrease the length of an array
// // courses.length = 7
// // console.log("Array after increased length: ", courses)
// // courses.length = 3
// // console.log("Array after decreased length: ", courses)

// //15 We can also update an array after initialization.
// // courses.length = 8
// // console.log("Array after increased length: ", courses)
// // courses[5] = 'php'
// // courses[6] = 'c sahrp'
// // courses[7] = 'java'
// // console.log("Array after initializing: ", courses)

// // 16 Loop through Javascript Array Elements
// // for (let i =0; i< courses.length; i++){
// //     console.log(courses[i])
// // }

// // 17 Adding new elements to JavaScript Array
// // courses.push("React Native")
// // console.log("Array after an element:", courses)

// // 18 We can also add a new element to a Javascript array using the length property.
// // courses[courses.length] ="TypeScript"
// // console.log("array after adding an element:", courses)
// // console.log(typeof courses)
// // console.log("Using Array.isArray() method:",Array.isArray(courses))
// // console.log("Using instance of method:",courses instanceof Array)







// ////////////////////////////////////////////////////////////
// //2. Creating an array using the JavaScript new keyword:
// //inintailizing while declaring....

