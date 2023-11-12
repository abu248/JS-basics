const fruits = ['banana', 'mango', 'apple', 'orange', 'grape'];
console.log(fruits.reverse())

const result = [1,10,2,34,12,45,54,35,53]
console.log(result.sort())

const finalResutl = result.sort(function(a,b) {return a -b});
console.log('descending order',finalResutl)

const finalResut2 = result.sort(function(a,b) {return b - a});
console.log('asscending order',finalResut2)


const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(points);





