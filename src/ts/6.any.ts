
/* any type */
let obj;

obj = {x:!0}
obj = 123



/* unknown */
let arr:unknown;

arr = 1;
arr = 'Hi';

// 타입 좁히기(narrowing)
if(typeof arr == 'number'){
  arr.toFixed();
}