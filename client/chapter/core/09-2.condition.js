/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue;

// Logical OR assignment
// a ||= b

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log(whichTruthy);

console.clear();

// 로그인 구현하기
function login() {
  let userName = prompt("사용자 이름을 입력해주세요.");

  if (userName?.toUpperCase() == 'ADMIN') {

    let password = prompt("비밀번호:", '');

    if (password?.toUpperCase() == 'THEMASTER') {
      alert( "환영합니다!" );
    } else if (password == '' || password == null) {
      alert( "취소 되었습니다." );
    } else {
      alert( "인증에 실패하였습니다." );
    }

  } else if (userName.replaceAll(' ','') == '' || userName == null) {
    alert( "취소 되었습니다." );
  } else {
    alert( "인증되지 않은 사용자입니다." );
  }
}

login();

