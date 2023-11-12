const arr = [ 5,8,9,11,21]

function findSum() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function(acc,current) {
    acc = acc + current;
    return acc;
}, 0);
console.log(output);



const myArr = [1,2,3,4,5,6,7,8,9,10];
function isEven(x) {
    return x % 2 === 0;
}

const output1 = myArr.filter(isEven);
console.log(output1);

function isOdd(x) {
    return x % 2;
}

const output2 = myArr.filter(isOdd);
console.log(output2);


const output3 = myArr.map((x) => x.toString(2));
console.log(output3);

const output4 = myArr.map((x) => {
    return x.toString(2);
});
console.log(output4);

const output5 = myArr.map(function binary(x) {
    return x.toString(2);
});

console.log(output5);

