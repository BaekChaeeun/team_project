// 구조분해할당 : destructuring
// de = not
// structure = 구조
// 배열(대괄호 안에 있는 요소)이나 객체(중괄호 안에 있는 요소)의 속성

// 배열의 경우(순서가 중요)
// let [value1, value2] = [1, "new"]
// console.log("1", value1);
// console.log("2", value2);

// let arr = ["value1", "value2", "value3", "value4"]; // 배열을 3개 가지고 있는 속성
// let [a, b, c, d = 4] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// //객체의 경우(key가 중요)
// // let user = {
// //     name: "nbc",
// //     age: 30,
// // };

// //구조분해할당
// let {name, age} = {
//     name: "nbc",
//     age: 30
// };

// console.log("name => ", name); //string
// console.log("age => ", age); // number

// 새로운 이름으로 할당
let user = {
    name: "nbc",
    age: 30,
    birthday: "yesterday",
};

// let { name : newName, age: newAge } = user;
// console.log("newName => ", newName);
// console.log("newAge => ", newAge);

let { name, age, birthday = "today" } = user;
console.log(name);
console.log(age);
console.log(birthday);