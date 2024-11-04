/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log(0 || WIDTH);
console.log(0 ?? WIDTH);

// a ||= b a가 false일 때 b의 값을 a에 할당
// a &&= b a가 true일 때 b의 값을 a에 할당
// a ??= b a가 undefined, null일 때 b의 값을 a에 할당


// 온라인 쇼핑몰 구매 기능
// 1. 사용자(user) 상태
// 회원, 비회원
// 회원 => 일반, 프리미엄

// 2. 할인
// 모든 사용자 첫 구매 시 5% 할인
// 일반 회원은 두번째 구매부터 10% 할인
// 프리미엄 회원은 항상 20% 할인
// 비회원은 두번째 구매부터 할인 X

// 3.구매 금액이 2만원 이상일 경우, 추가로 5% 할인

function discountPrice(userState, count, price) {
  // 할인율 초기화
  let discount = 0;

  // 첫 구매 시 5% 할인
  if (count === 1) {
      discount += 0.05;
  }

  // 사용자 유형에 따른 할인 적용
  if (userState === '회원') {
      const membershipType = prompt("회원 유형을 입력하세요: ");
      if (membershipType === '일반') {
          if (count > 1) {
              discount += 0.10;  // 두 번째 구매부터 10% 할인
          }
      } else if (membershipType === '프리미엄') {
          discount += 0.20;  // 프리미엄 회원은 항상 20% 할인
      }
  } else if (userState === '비회원') {
      if (count > 1) {
          discount = 0;  // 비회원은 두 번째 구매부터 할인 없음
      }
  }

  // 구매 금액이 2만원 이상일 경우 추가 5% 할인
  if (price >= 20000) {
      discount += 0.05;
  }

  // 최종 결제 금액 계산
  const finalPrice = price * (1 - discount);
  
  return finalPrice;
}
const userState = prompt("사용자 상태를 입력하세요 (회원/비회원): ");
const purchaseCount = parseInt(prompt("구매 횟수를 입력하세요: "), 10);
const purchasePrice = parseInt(prompt("구매 금액을 입력하세요: "));

const finalPrice = discountPrice(userState, purchaseCount, purchasePrice);
console.log(`최종 결제 금액: ${finalPrice}원`);

discountPrice('프리미엄', 1, 23500);