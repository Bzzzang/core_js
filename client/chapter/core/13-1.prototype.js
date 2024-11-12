/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/* object literal function */

const animal = {
  legs:4,
  tail:true,
  stomach:[],
  getEat(){
    return this.stomach
  },
  setEat(food){
    this.stomach.push(food)
  }
}

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__:animal
}


const 백두산호랑이 = {
  name:'백돌이',
  color:'white',
  __proto__:tiger
}

/* object constructor function */
// 생성자 함수 

function Animal(){
  this.legs = 4;
  this.tail = true;
  this.getEat = function(){
    return this.stomach
  }
  this.setEat = function(food){
    this.stomach = [];
    this.stomach.push(food)
  }
}

const a = new Animal();

function Tiger(name){
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
}
Tiger.prototype = a;

const 금강산호랑이 = new Tiger('금순이');


// 함수의 역할
// call => 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수 : 값
// apply => 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수 :  배열
// bind => 함수를 대신 실행 X -> 빌려쓰기

