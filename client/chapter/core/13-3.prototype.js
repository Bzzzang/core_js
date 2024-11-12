// Model => 데이터
// View => 랜더링
// Control => event

class Todo {

  constructor({input, button, renderPlace}){

    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);

    this.todoListArray = [];
    this.attachEvent();
  }

  get currentInputTodoData(){
    return this.input.value;
  }

  set currentInputTodoData(value){
    this.input.value = value;
  }

  // 버튼에 클릭 이벤트 등록 input 값이 콘솔창에 나올 수 있도록
  // 1. 해당 메서드 안에서 버튼에게 클릭 이벤트 바인딩
  // 2. 클릭 이벤트에 연결할 handleClick 메서드를 만든다
  // 3. handleClick 함수 안에서 input의 value를 가져온다
  // 4. 콘솔창에 출력한다
  // 5. 태그 만들기
  // 6. 랜더링 하기

  addTodoData(){
    this.todoListArray.push(this.currentInputTodoData);
  }

  createTag() {
    return `<li> ${this.currentInputTodoData} </li>`
  }

  #render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.createTag())
    this.input.value = ''
  }

  handleClick() {
    console.log(this.currentInputTodoData);
    this.#render()
  }

  attachEvent() {
    this.button.addEventListener('click',(e)=> {
      e.preventDefault();
      this.addTodoData()
      this.handleClick()
    })
  }

}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList'
})