/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


class Animal {

}

const a = new Animal();
/*
1. 버튼 선택
2. 클릭 이벤트
3. 카운트
4. 태그 화면에 랜더링 하기
*/

// class
class Button {
  constructor(selector){
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  createTag(){
    return `<div>${++this.count + '클릭'}</div>`
  }

  _render(){
    document.body.insertAdjacentHTML('beforeend',this.createTag())
  }

  handleClick(){
    this._render()
  }

  attachEvent(){
    this.button.addEventListener('click',this.handleClick.bind(this))
  }
}

const button = new Button('.btn');






// const _button = document.querySelector('.btn');

// let count = 0;

// function createTag(){
//   return `<div>${++count + 'clicked'}</div>`
// }

// function render(data){
//   document.body.insertAdjacentHTML('beforeend',data)
// }

// function handleClick(){

//   render(createTag());
  
// }

// _button.addEventListener('click',handleClick)




class User {
  #password;

  constructor(userID, userPW){
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw){
    return 'hashCODE' + pw + 'salt';
  }

  checkPassword(pw){
    return this.#password == this.hashPassword(pw);
  }
}

const user = new User('tiger','hello')


