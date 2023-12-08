// let a = +prompt("a sonni kititing !");
// let b = +prompt("b sonni kititing !");
// let aPlusB = (a, b) => a + b;
// alert(aPlusB(a, b));

// 2-masala
// let a = +prompt("a sonni kititing !");
// let b = +prompt("b sonni kititing !");
// let aPlusB = (a, b) => a === b;
// alert(aPlusB(a, b));

// 3-masala
// let a = 1;
// let findTypeof = (a) => typeof a;
// alert(findTypeof(a));

// 4-masala
// let str = prompt("So'zni kiriting !");
// let n = +prompt("Nechanchi indeksni !");
// let findIndex = (str, n) => str[n];
// alert(findIndex(str, n));

// 5-masala
// let str = prompt("So'zni kiriting !");
// let n = +prompt("Nechanchi indeksni !");
// let findIndex = (str, n) => {
// return let b = str.slice(n)
//}
// alert(findIndex(str, n));

// 6-masala
// let str = prompt("So'zni kiriting !");
// let lastFunc = (str) => str.slice(-3);
// alert(lastFunc(str))

// 7-masala
// let str = prompt("So'zni kiriting !");
// let lastFunc = (str) => str.slice(0,3);
// alert(lastFunc(str))

// 8-masala
// let str = prompt("so'zni kiriting !");
// let returnIndex = function (str) {
//   let b = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "i" && str[i + 1] == "s") {
//       b = i;
//       break;
//     }
//   }
//   return b;
// };
// alert(returnIndex(str));

// 9-masala
// let str = prompt("So'zni kiriting !")
// let returnHalf = function(str){
//     let half = Math.trunc(str.length / 2)
//     let new_str = ""
//     for(let i = 0; i < half; i++){
//         new_str = new_str + str[i]
//     }
//     return new_str
// }
// alert(returnHalf(str))

// 10-masala
// let str = prompt("So'zni kiriting !")
// let returnHalf = function(str){
//     let half = str.length - 3;
//     let new_str = ""
//     for(let i = 0; i < half; i++){
//         new_str = new_str + str[i]
//     }
//     return new_str
// }
// alert(returnHalf(str))

// 11-masala
// let a = +prompt("Sonni kiriting !");
// let b = +prompt("Sonni kiriting !");
// let returnAandB = function (a, b) {
//   let c = (a / 100) * b;
//   return c;
// };
// alert(returnAandB(a, b));

// 12-masala
// let func = function (a, b, c, d, e, f) {
//   return (((a + b - c) * d) / e) ** f;
// };
// alert(func(a,b,c,d,e,f))

// 13-masala
// let a = "salom";
// let b = "hayr";
// let func = (a, b) => a + b;
// alert(func(a, b));

// 14-masala
// let a = +prompt("Sonni kiriting !");
// let trueOrFalse = function (a) {
//   if (a % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// alert(trueOrFalse(a));

// 15-masala
// let str = "how many times does the character occur in this sentence?";
// let letter = prompt("Harfni kiriting !");
// let findLetter = function (str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter) {
//       count++;
//     }
//   }
//   return count
// };
// alert(findLetter(str, findLetter))

// 16-masala
// let a = +prompt("Sonni kiriting !");
// let whole = function (a) {
//   if (Math.trunc(a) == a) {
//     return true;
//   } else {
//     return false;
//   }
// };
// alert(whole(a));

// 17-masala
// let num = +prompt("SOnni kiriting !");
// let func = function (num) {
//   let new_arr = [];
//   for (let i = 0; i < num.length; i++) {
//     new_arr.push(num[i]);
//   }
// return new_arr
// };
// console.log(func(num));

// 18-masala
// let arr = [5, 4, 3, 2, 1, 0];
// let func = function (arr) {
//   let new_arr = [];
//   for (let i = arr.length - 3; i < arr.length; i++) {
//     new_arr.push(arr[i]);
//   }
//   return new_arr
// };
// alert(func(arr))

// 19-masala
// let arr = [5, 4, 3, 2, 1, 0];
// let func = function (arr) {
//   let new_arr = [];
//   for (let i = 0; i < 3; i++) {
//     new_arr.push(arr[i]);
//   }
//   return new_arr
// };
// alert(func(arr))

// 20-masala
// let arr = [5, 4, 3, 2, 1, 0];
// let a = +prompt("Nechtasini !")
// let func = function (arr,a) {
//   let new_arr = [];
// if(a <= arr.length){
//   for (let i = 0; i < a; i++) {
//     new_arr.push(arr[i]);
//   }}else{
//   for (let i = 0; i < arr.length; i++) {
//     new_arr.push(arr[i]);
//   }}
//   return new_arr
// };
// alert(func(arr))

// 21-masala
// let arr = [5, 4, 3, 2, 1, 0];
// let func = function (arr,a) {
//   let count = 0;
//   for (let i = 0; i < a; i++) {
//     if(arr[i] < 0){
//     count++
//   }}
//   return count
// };
// alert(func(arr))

// 22-masala
// let arr = [5, 4, 3, 2, 1, 0];
// let func = function (arr) {
//   return arr.sort()
// };
// alert(func(arr))

// 23-masala
// let arr = [5, 4, 3, 2, 1, 0];
// let func = function (arr) {
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   count = count + arr[i];
// }
// return count;
// };
// alert(func(arr))

// 24-masala
// let arr = [5, 4, 3, 2, 1, 0];
// let func = function (arr) {
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   count = count + arr[i];
// }
// return Math.trunc(count / arr.length);
// };
// alert(func(arr))

// 25-masala
// let arr = ["I", "need", "candy"];
// let func = function (arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > arr[i + 1].length) {
//       count = arr[i].length;
//     }
//   }
//   return count;
// };
// alert(func(arr));

// 26-masala
// let arr = ["I", "need", "candy"];
// let func = function (arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       count++
//     }
//   }
//   if(count == arr.length){
// return true;
// }else{
// return false;
// }
// };
// alert(func(arr));

// 27-masala
// let arr = [1, 2, 3];
// let arr1 = ["a", "b", "c"];
// let func = function (arr, arr1) {
//   let new_arr = [];
//   for (let i = 0; i < arr.length; i++) {
//     new_arr.push(arr[i]);
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     new_arr.push(arr1[i]);
//   }
//   return new_arr
// };
// alert(func(arr, arr1))

// 28-masala
// function func(obj) {
//   if (obj && obj.country) {
//     return obj["country"];
//   }
// }

// const user = { name: "John", country: "Canada" };
// console.log(func(user));

// 29-masala
// function func(obj) {
//   if (obj && obj["prop-2"]) {
//     return obj["prop-2"];
//   }
// }

// const data = { "prop-1": "value1", "prop-2": "value2" };
// console.log(func(data));

// 30-masala
// function func(obj, keyToFind) {
//     if (obj && obj[keyToFind]) {
//       return obj[keyToFind];
//     }
//   }
//   const car = { make: 'Toyota', model: 'Corolla' };
//   console.log(func(car, 'make'));

// 31-masala
// function func(obj, keyToFind) {
//   return keyToFind in obj;
// }
// const person = { name: "alisher", age: 25 };
// console.log(func(person, "name"));

// 32-masala
// function func(a, b) {
//     let obj = {};
//     obj[a] = b;
//     return obj;
//   }
// alert(func("a", "b"))

// 33-masala
// function func(obj) {
//     return Object.keys(obj);
//   }
//   let namuna = { name: 'Alice', age: 25, city: 'Wonderland' };
//   console.log(func(namuna));

// 34-masala
// function func(obj) {
//   if (obj && obj.a && typeof obj.a === "object") {
//     return obj.a.b;
//   } else {
//     return undefined;
//   }
// }
// let malumot = { a: { b: 42 } };
// console.log(func(malumot));

// 35-masala

// function sums(obj) {
//   return Object.values(obj).reduce((acc, val) => acc + val, 0);
// }
// let masalan = { a: 10, b: 20, c: 30 };
// console.log(sums(masalan));

