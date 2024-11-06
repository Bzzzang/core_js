/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  console.log(rest);
};

calcAllMoney(10000,30000,50000)

// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 




// callback 함수 예제
// function callback(fn){
  // 1. 서버에 데이터를 요청
  // 2. 응답 받은 데이처를 출력

  // if(state == 'ok'){
    // 데이터 요청
    // let data = 데이터 요청

    // 데이터 출력
    // fn(data)

    // 화면에 출력
    // data.map(()=>{})
  // }


// 화면에 출력
// callback((data)=>{
//   callback(()=>{})
// })