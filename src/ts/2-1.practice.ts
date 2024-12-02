
// 숫자만 담을 수 있는 배열
let number:Array<number>= [1,2,3];

// 문자만 담을 수 있는 배열
let str:string[] = ['a', 'b', 'c'];

// 다양한 타입을 포함 할 수 있는 배열(튜플X)
let multi:(string | number | boolean)[] = ['hi',2,true];

// 튜플로 정의
let matrix:[number, number, number][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]