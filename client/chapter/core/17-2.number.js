// 원운동

function toRadian(degree){
  return degree * (Math.PI / 180);
}

function toDegree(radian){
  return radian * (180 / Math.Pi);
}

const circle = document.querySelector('.circle');

let degree = 45;
let radius = 10;

function animate(){
  ++degree

  const x = Math.cos(toRadian(degree)) * radius;
  const y = Math.sin(toRadian(degree)) * radius;

  circle.style.transform = `translate(${x}px, ${-y}px)`;

}

setInterval(animate,10);