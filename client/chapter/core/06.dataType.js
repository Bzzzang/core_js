/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let double = "double quote";
let single = 'single quote';
let backtick = `Backtick`;
console.log(double, single, backtick);

const str = new String('hello'); // string constructor fuction

// 4. 정수, 부동 소수점 숫자(길이 제약)
const n = 123;
const m = 12.345;
console.log(n);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)
let nameFieldChecked = true;
let ageFieldChecked = false;
console.log(typeof nameFieldChecked);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {
  name: 'bzzang',
  age: 29
}
console.log(obj);

// 8. 고유한 식별자(unique identifier)
const uuid = Symbol('uuid');
const uuid2 = Symbol('uuid');
console.log(uuid == uuid2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// 객체 메서드를 정의하는 방법
// 1. normal function 지양
// 2. arrow function : this를 바인딩하지 않는다(상위 컨텍스트에서 찾음), 메서드 안에서 함수를 정의힐 때 권장
// 3. concise method : 자주 사용, 권장

const user = {
  name: 'bzzang',
  age: 29,
  sayHi:function(){
    console.log(this);
  },
  sayHi2:()=> {
    console.log(this);
  },
  sayHi3(){
    function sayBye() {
      console.log(this);
    }
    sayBye(); // 누구의 의해 호출 됐는지 모름 그래서 window가 나옴
  },
  sayHi4(){
    const sayBye = () => {
      console.log(this.age = 30);
    }
    sayBye();  // 객체의 메서드를 정의할 때 권장
  }
}

// Object
function User(){
  this.payment = false;
  this.age = 25
}

const _a = new User();
const _a2 = new User();
const _a3 = new User();
const _a4 = new User();

// Array
const arr = ['a', {name:'bz'}, ()=>{},4,5];
console.log(arr);

const newArray = new Array(10);
console.log(newArray);

// function
function sum(a,b) {
  return a + b;
}
const result = sum(10,5);
console.log(result);

// this


