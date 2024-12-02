/* void type */
function sayHi() {
    return 'Hi';
}
function printHi() {
    console.log("Hi");
}
/* never type */
// 존재하지 않는 / 불가능한 / 어떤 값도 정의할 수 없는 타입
function showError(message) {
    throw new Error(message);
}
showError('Error!');
export {};
