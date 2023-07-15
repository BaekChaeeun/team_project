// Set
// 고유한 값을 저장하는 자료 구조다.
// 값만 저장한다.
// Key를 저장하지 않는다. (집합이기 때문에 Key X)
// 값이 중복되지 않는 유일한 요소로만 구성된다. (중복되면 합쳐짐)
// 값 추가하거나 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set();
mySet.add('valeu1');
mySet.add('value2');
mySet.add('value3');
mySet.add('value5');
mySet.add('value8');

// console.log(mySet.size);
// console.log(mySet.has("valeu1"));
// console.log(mySet.has("value2"));
// console.log(mySet.has("value3"));

// Iterator, 반복했던 그 친구

for (const value of mySet.values()) {
    console.log(value);
}