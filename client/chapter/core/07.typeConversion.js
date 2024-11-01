/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024
console.log(YEAR); // 2024
console.log(typeof YEAR); // number

// undefined, null
const und = undefined
console.log(und); // undefined

let nu = null
console.log(nu); // null

// boolean
const a = 1
console.log(Boolean(a)); // true

const b = 0
console.log(Boolean(b)); // false

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let x = undefined
console.log(Number(x)); // NaN

// null
let y = null
console.log(Number(y)); // 0

// boolean
let bool = true
console.log(Number(bool)); // 1

// string
let str = "       123       "
console.log(Number(str)); // 123

// numeric string
let width = "120.5px"
console.log(width); // 120.5px
console.log(width * 1); // NaN
console.log(parseInt(width)); // 정수형

console.clear();

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(x)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
console.log(!!{}); // true