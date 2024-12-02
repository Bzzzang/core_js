
/* ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ generic type ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ */

function sumFunc<Type>(value:Type):Type{
  return value;
}

function sum<T>(value:T):T{
  return value;
}

const a = sumFunc(10);
const b = sumFunc('Hi');


function swapAtoB<T,U>(a:T,b:U): (T|U)[] { 
  return [b,a]
}

swapAtoB(1, true)

// T : Type
// U : Unknown or Unique
// K : Key
// V : Value
// E : Element
// R : Return


function getLength<T extends {length:number}>(data:T):number{
  return data.length
}

const b1 = getLength([1,2,3]) // 3