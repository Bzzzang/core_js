/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

console.log('creator' in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(javaScript.hasOwnProperty('nickname'));
console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickname'));
console.log(Object.hasOwn(javaScript, 'nickname'));

// 안전하게 내가 원하는 대상을 가져오기 위해서


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
for (const key in javaScript) {
  if (Object.hasOwn(javaScript,key)) {
    const value = javaScript[key];
    console.log(value);
  }
}

// - 배열 객체 순환에 사용할 경우?
// 배열도 for ~ in 문으로 순환이 가능은 하다.
// for ~ in 은 객체애 양보
// 배열은 순서에 굉장히 민감 => for ~ in은 순서 보장 X
const tens = [10,100,1000,10000];

for (const key in tens) {
  console.log(tens[key]);
}