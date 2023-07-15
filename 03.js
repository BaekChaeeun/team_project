// 단축 속성명 : property shorthand
// 쓰는 것보다 해석할 때 더 힘들다.

// const name = "nbc";
// const newAge = "30";

// // key - value
// //왼쪽은 key, 오른쪽은 value (오른쪽이 실질적인 데이터 -> 변수로도 사용 가능)
// //왼쪽과 오른쪽이 동일할 경우 생략되어 하나로 표시됨
// const obj = {
//     name: name,
//     age: newAge
// }

// 전개 구문 = spread operator(배열을 전개하는 것)
// destructuring와 함께 가장 많이 사용되는 es6 문법 중 하나!

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr); //대괄호가 없어지고 나옴(구조를 벗어나야할 때)

// let newArr = [...arr, 4];
// console.log(arr);
// console.log(newArr)

// 객체에서 적용할 경우
// let user = {
//     name: 'nbc',
//     age: 30,
// }

// let user2 = { ...user }

// console.log(user);
// console.log(user2);

// 나머지 매개변수(rest parameter)
// function exampleFunc (a, b, c, ...args) {
//     console.log(a, b, c);
//     console.log(args);
// }

// exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template literal)
const testValue = "안녕하세요!";
console.log(`Hello World ${testValue}`);

console.log(`
Hello
My name is Javascript
Nice to meet you
`);