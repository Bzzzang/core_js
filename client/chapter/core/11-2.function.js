/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

// 함수는 값으로 취급(일급함수)
// 함수 선언 방법
// 1. 함수 선언문 function(){}
// 2. 함수 표현식 const a = function(){}


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function() {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 존재 : arguments => 유사 배열 => 지역 변수
  
  let total = 0;

  // for문
  // for(let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for ~ of문
  // for(const value of arguments) {
  //   total += value;
  // }

  // arguments => array
  // const arr = [...arguments];
  // const arr = Array.from(arguments); // static method
  const arr = Array.prototype.slice.call(arguments); // instance method

  // forEach => 배열을 순환 => 값을 반환하지 X
  arr.forEach(function(price,i){
    total += price
  })



  // reduce => 배열을 순환 => 값을 반환 O : 문자, 숫자, 불린, 배열, 객체
  arr.reduce(function(acc,cur){
    return acc + cur},0
  )

  // reduce + arrow function
  // return arr.reduce(acc,cur)=> acc + cur)


  // arguments
  // Array.prototype.forEach.call(arguments,function(price){
  //   total += price
  // })


  // map => 배열을 순환 => 값을 반환 : 새로운 배열
  // const friends = ['권태일', '신은비', '이우빈', '명재휘'];
  // friends.map(function(name,index){
  // })


  // console.log(total);

};

// const obj = {
//   total:null,
//   item:[1000,2000,3000],
//   totalPrice(){
    
//     this.item.forEach((price)=>{
//       this.total += price
//     })
//   }
// }
// obj.totalPrice()

const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);

console.log(result);


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function() {

};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {

};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function(condition, success, fail){
   if(condition){
    success()
   } else{
    fail()
   }
};

callbackFunctionExpression(false, function(){console.log('성공');}, function(){console.log('실패');})



function movePage(url, success, fail){
  if(url.includes('https')){
    success(url);
  }else{
    fail();
  }
}

movePage(
  'https://www.daum.net',
  function(url){
    console.log(`현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`);
  },
  function(){
    console.log('잘못된 경로를 입력하셨습니다.');
  }
)

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
