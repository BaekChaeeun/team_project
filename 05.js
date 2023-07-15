const person = {
    name: 'john',
    age: 31,
    isMarried: true,
    // 화살표 함수는 this를 바인딩하지 않는다!
    // sayHello: () => {
    //     console.log(`Hello, My name is ${this.name}`);
    // }
    // sayHello: function () {
    //     // console.log('Hello, My name is ' + this.name);
    //     console.log(`Hello, My name is ${this.name}`);
    // },
};

person.sayHello();

