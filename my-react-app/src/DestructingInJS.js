// destructing = extract values from arrays and objects
//                them assign them to variables in a convenient way
//                [] = to perform array destructing
//                {} = to perform object destructing

// --------------- Example 1 ----------
// swap the value of two variabls
let a = 15;
let b = 8;
console.log(a, b);

// 利用了 JavaScript 的数组解构赋值（destructuring assignment）特性
// 能够swap两个变量的原因是：
// [a, b] = [b, a]；
//          等价于： 1. 计算 右侧数组 [b, a]，此时： [b, a]  // → [8, 15]
//                  2. 进行 解构赋值： [a, b] = [8, 15];
//                  3. 最终：  console.log(a); // 8
//                         console.log(b); // 15
[a, b] = [b, a];
console.log(a, b);

// --------------- Example 2 ----------
// swap 2 elements in an array
const colors = ['red', 'white', 'black', 'blue', 'green'];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// --------------- Example 3 ----------
// assign array elements to variables
const fruits = ['apple', 'banana', 'coconut', 'kiwi'];
// let fruit1, fruit2, extraFruits;
const [fruit1, fruit2, ...extraFruits] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(extraFruits);

// --------------- Example 4 ----------
// extract values from objects
const person1 = {
  firstName: 'Hannah',
  lastName: 'Han',
  age: 31,
  job: 'Student',
};
console.log(person1);

const person2 = {
  firstName: 'Bob',
  lastName: 'Geo',
  age: 32,
};
console.log(person2);

// 对象解构：左侧的属性名必须与对象中的实际属性名一致。
// 如果要重命名，需要写成 原属性名: 新变量名。
// const { fName: firstName, lName, age, job } = person2;
// 在对象结构的过程中 还可以定义 default value： { job = 'Unemployed' } = person1
const { firstName: fName, lastName: lName, age, job = 'Unemployed' } = person2;
console.log(`name:${fName} ${lName}`);
console.log(`age:${age}`);
console.log(`job:${job}`);

// --------------- Example 5 ----------
// destructure in function parameters
function displayPerson({ firstName, lastName, age, job = 'Unemployed' }) {
  console.log("Below is the person's infor:");
  console.log(`${firstName} ${lastName}`);
  console.log(`${age}`);
  console.log(`${job}`);
}

displayPerson(person1);
displayPerson(person2);
