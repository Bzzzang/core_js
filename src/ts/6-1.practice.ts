// 문제: unknownValue 변수에 unknown 타입을 명시 후 아래와 같은 메서드가 실행돨 수 있도록 만들어주세요

let unknownValue:unknown;

// unknownValue.toFixed(2)
// unknownValue.toUpperCase()
// unknownValue.getTime()
// unknownValue.nextElementSibling()

if (typeof unknownValue === 'number') {
  console.log(unknownValue.toFixed(2)); 
}

unknownValue = 'hello';

if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase());  
}

unknownValue = new Date();

if (unknownValue instanceof Date) {
  console.log(unknownValue.getTime());  
}

unknownValue = document.createElement('div');

if (unknownValue instanceof HTMLElement) {
  console.log(unknownValue.nextElementSibling);  
}