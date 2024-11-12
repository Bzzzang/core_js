/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uuid: crypto.randomUUID(),
  name: 'bzzang',
  email: 'sindmsql@gmail.com',
  isSignIn: false,
  Permission: 'paid'
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);

// setter
console.log(authUser.permission = 'free');

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);

console.log(authUser['permission'] = 'free');

// keys
// // 객체의 key만을 모아서 배열로 반환하는 static method
// const keys = Object.keys(authUser);

// function getPropertiesKey(obj){
//   let arr =[];

//   for(const key in obj){
//     if(Object.hasOwn(obj,key)){
//       arr.push(key)
//     }
//   }
//   return arr;
// }

// getPropertiesKey(authUser);



// 객체의 밸류만을 하나로 묶어 배열로 반환하는 static method
// function getPropertiesKey(obj){
//   let arr = [];

//   for(const key in obj){
//     if(Object.hasOwn(obj,key)){
//       arr.push(obj[key])
//     }
//   }

//   return arr;
// }

// getPropertiesKey(authUser);




// 객체의 key와 value를 하나의 쌍으로 묶어 배열로 반환하는 static method
function getPropertiesKey(obj){
  let arr = [];

  for(const key in obj){
    if(Object.hasOwn(obj,key)){
      arr.push(obj[key])
    }
  }

  return arr;
}

getPropertiesKey(authUser);

console.clear();


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// // 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name,age, phone){
  return {
    name: name,
    age: age,
    [calculateProperty]: phone
  }
}

// 프로퍼티 제거(remove) or 삭제(delete)
//       비워두기           메모리 날림 

function removeProperty(obj,key){
  if(isObject(obj)){
    obj[key] = null
  }
}

removeProperty(authUser, 'uuid'); authUser.uuid = null;


function deleteProperty(obj,key){
  if(isObject(obj)){
    delete obj[key]
  }
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin
}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 순서 못 바꿈

const arr = [10,100,1000,10000];

const [a1, ...rest] = arr;
// const [,,a3]
// const [a1, a2, a3, a4, a5 = 100000]

console.log(a1);



/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  김미리: 800,
  박혜미: 130,
  이성우: 400,
  명재휘: 80,
}

// 객체의 구조 분해 할당 : 순서가 상관 없음. 객체의 key와 변수의 이름이 동일해야 함. => 변수명 설정? 가능

const {
  박혜미:박 = 100,
  이성우:이 = 200,
  명재휘:명 = 300,
  김미리:김 = 400
} = salaries;

const { 박혜미, 이성우, 명재휘, 김미리 } = salaries;


function createUserObject(name,age,address,phone){
  return { name, age, address, phone }
}

const user = createUserObject('심선범','35','중랑구','010-7169-0262')


