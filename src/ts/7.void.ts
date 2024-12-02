
/* void type */

function sayHi():string{
  return 'Hi'
}

function printHi():void{
  console.log("Hi");
}



/* never type */
// 존재하지 않는 / 불가능한 / 어떤 값도 정의할 수 없는 타입

function showError(message:string):never{
  throw new Error(message)
}

showError('Error!')
