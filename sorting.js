const points = [40,100,1,5,25,1000]


const points1 = myArrayMax(points);
function myArrayMax(arr) {
    return Math.max.apply(null,arr);
}
console.log(`the maximum value is ${points1}`);
console.log('the minimum value is',points1);


const points3 = myArrayMin(points);
function myArrayMin(arr) {
    return Math.min.apply(null,arr);
}
console.log(`the minimum value is ${points3}`);
console.log('the minimum value is',points3);