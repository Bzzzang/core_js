/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;
// do {
//   console.log(i);
//   if (i == 3) {
//     console.log('3');
//   }
//   i++;
// } while (i < 5)  

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

function reverseCountdown() {
  // 사용자에게 순환 횟수를 입력받음
  let count = prompt("순환 횟수를 입력하세요:");

  // 입력된 값이 0보다 작을 경우 메시지를 출력하고 함수 종료
  if (count < 0) {
    console.log("최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.");
    return; // 함수 종료
  }

  // do...while 문으로 역순 출력
  let i = count;
  do {
    console.log(i);
    i--; // 카운트 감소
  } while (i > 0);
}

// 함수를 호출하여 실행
// reverseCountdown();


// do ~ while 문 (순환)
function forwardCountdown() {
  // 사용자에게 순환 횟수를 입력받음
  let count = prompt("순환 횟수를 입력하세요:");

  // 입력된 값이 0보다 작을 경우 메시지를 출력하고 함수 종료
  if (count < 0) {
    console.log("최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.");
    return; // 함수 종료
  }

  // do...while 문으로 순환 출력
  // - 위 do ~ while 문을 순방향으로 순환되도록 설정
  let i = 1; // 시작값
  do {
    console.log(i);
    i++; // 카운트 증가
  } while (i <= count);
}

// 함수를 호출하여 실행
// forwardCountdown();

// html에 태그를 만들고 내가 원하는 태그에 style 입히기 - CSS
// html에 태그를 만들고 내가 원하는 태그에 동적 제어 주기 - DOM(Document Object Model)

//DOM(Document Object Model)
let first = document.querySelector('.first');

function next(node){
  // validation 
  if (typeof node === 'string'){
    node = document.querySelector(node)
  }
  do {
   node = node.nextSibling
  } while (node.nodeType !== 1)
  return node;
}

const second = next('.first');
const _second = next(first);

function prev(node){
  if (typeof node === 'string') {
    node = document.querySelector(node)
  }
  do {
   node = node.previousSibling
  } while (node.nodeType !== 1)
  return node;
}

const _first = prev('.second');
