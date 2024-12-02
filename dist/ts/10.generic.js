/* ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ generic type ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ */
function sumFunc(value) {
    return value;
}
function sum(value) {
    return value;
}
const a = sumFunc(10);
const b = sumFunc('Hi');
function swapAtoB(a, b) {
    return [b, a];
}
swapAtoB(1, true);
// T : Type
// U : Unknown or Unique
// K : Key
// V : Value
// E : Element
// R : Return
function getLength(data) {
    return data.length;
}
const b1 = getLength([1, 2, 3]); // 3
export {};
