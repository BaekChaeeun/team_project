//ES6

//2015년도 이전 => var
//ES6 => let(변수를 선언할 때), const(상수를 선언할 때)

//const => 재할당이 안되는 문법

//arrow function
//함수를 선언하는 방식에는 함수 선언문과 함수 표현식 2가지가 존재함

function add () {

}

var add = function () {

}

//화살표 함수로 쓰게 될 경우
//안에 return이 한줄인 경우 중괄호 생략 가능
var add = (x) => {
    return 1;
}

//소괄호가 없어도 문법적으로 문제가 없는 화살표 함수도 존재
var add = (x) => 1;

//삼항 연산자
//condition ? true인 경우  : false인 경우

console.log(true ? '참' : '거짓'); //true면 앞에 것
console.log(false ? '참' : '거짓'); //false면 뒤에 것

//예
console.log(1 === 1 ? '참' : '거짓');
console.log(1 !== 1 ? '참' : '거짓');