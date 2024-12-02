
/* Array Type */

let arr:number[] = [1,2,3];

let str:string[] = ['a', 'b', 'c'];


/* generic type 타입 변수 => 함수 */

let _arr:Array<number> = [1,2,3];

// 유니온 타입 
let multi:(string | number | boolean)[] = ['hi',2,true];


/* Tuple Type */
// 길이가 고정되어 있다.(배열처럼 길이가 동적으로 변하지 않음)
// 자리가 정해져 있다.

let tupleA:[number,number] = [1,2];


// 다차원 배열
const user:[string,number][] = [
  ['a',20],
  ['b',21],
  ['c',22]
]