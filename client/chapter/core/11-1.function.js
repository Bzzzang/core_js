/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언
function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0
}

function calcPrice(
  priceA,
  priceB = getRandomValue(),
  priceC = getRandomValue(),
  priceD = getRandomValue()
){
  // if(priceD === undefined) priceD = 0;
  // if(!priceD) priceD = 0;
  // priceD = priceD || 100;
  // priceD ||= 0;
  // priceD = priceD ?? 100;
  // priceD ??= 100;

  return priceA + priceB + priceC + priceD
  
}

// 함수 호출
// const result = calcPrice();
// console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
// 1. 함수는 하나의 기능만을 수행
// 2. 재사용성
// 3. Naming
// 4. 인자 개수(최대 4~5개)


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem (pxValue, base = 16) {
  if(typeof base == 'string') throw new TypeError('rem 함수의 두번째 인수는 숫자 타입이어여 합니다.');

  if(typeof pxValue == 'string') {
    pxValue = parseInt(pxValue,10)
  }
  return pxValue / base + 'rem'
}

// console.assert(rem(20) == '1.25rem');


// css(node: string, prop: string, value: number|strung) : string;
function setCss(node, property, value) {
  // selector를 사용해 해당 요소를 선택
  const element = document.querySelector(node);
  
  element.style[property] = value;
  
}

// setCss('.first', 'color', 'red');



// getCss
function getCss(node, property) {
   const element = document.querySelector(node);

   // getComputedStyle로 스타일 객체를 가져옴
   const computedStyle = getComputedStyle(element);
 
   // 원하는 CSS 속성 값 반환
   return computedStyle[property];
 }
 
 const fontSize = getCss('.first', 'font-size');
//  console.log(fontSize);


// setCss, getCss 하나로 만들기
function css(node, property, value) {
  // if(!value) {
  //   return getCss(node, property);
  // } else {
  //   setCss(node, property, value);
  // }
  
  return !value ? getCss(node, property) : setCss(node, property, value);
}

css('.first', 'color');
css('.first', 'color', 'pink');

console.log(css('.first', 'color'));

// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.