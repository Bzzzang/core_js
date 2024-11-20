

import data from './data/data.js';
import {
  getNode as $,
  getRandom,
  insertLast,
  clearContents,
  addClass,
  removeClass,
  showAlert,
  isNumericString,
  shake,
  copy,
} from './lib/index.js'

// phase1

// 1. 주접 떨기 버튼을 클릭 하는 함수
//   - 주접 떨기 버튼 가져오기
//   - 이벤트 연결

// 2. input 값 가져오기
//   - 콘솔에 출력

// 3. data함수에서 하나 

// 4. result에 랜더링하기
//   - insertLast()

// phase2

// 5. 예외처리
//   - 이름이 없을 경우 콘솔 에러 표시

 
const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');


function handleSubmit(e){
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];



  if(!name || name.replaceAll(' ','')===''){

    showAlert('.alert-error', '제대로 된 이름을 입력해주세요.', 1200)

    shake(nameField)

    return;
  }

  if(!isNumericString(name)){
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요.', 1200)
    shake(nameField)
    return;
  }

  clearContents(result);
  insertLast(result,pick)
}

function handleCopy(){
  const text = this.textContent;

  copy(text)
  .then(()=>{
    showAlert('.alert-success','복사 완료');
  })
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click',handleCopy);