/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 15;

switch (a) {
  case 10:
    alert('10');
    break;
  case 13:
    alert("13");
    break;
  case 15:
    alert("15");
    break;
  case 20:
    alert("20");
    break;
  default:
    alert('숫자가 없습니다.');
    break;
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = LUNCH;

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
    case LUNCH:
      console.log('자주 가는 식당에 가서 식사를 한다.');
      break;
    case DINNER:
      console.log('동네 한바퀴를 조깅한다.');
      break;
    case NIGHT:
      console.log('친구에게 전화를 걸어 수다를 떤다.');
      break;
    case LATE_NIGHT:
    case DAWN:
      console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
      break;
}

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime == MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime == LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime == DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime == NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} 

console.clear();

// prompt를 통해 숫자를 입력 받는다.(0~6)
// 받은 숫자를 사용해서 switch case 돌리기
// 0: 일
// 1: 월
// 2: 화 ...
function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(num) {
  const value = getRandom(7);

  switch (value) {
    case 0:
      alert("일요일");
      break;
    case 1:
      alert("월요일");
      break;
    case 2:
      alert("화요일");
      break;
    case 3:
      alert("수요일");
      break;
    case 4:
      alert("목요일");
      break;
    case 5:
      alert("금요일");
      break;
    case 6:
      alert("토요일");
      break;
  }
}

// getDay 함수로 주말, 평일 구분하는 함수 만들기
// weekend
function getDay2(num) {

  switch (num) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
}

function weekend() {
  const today = getDay2(getRandom(7));

  if (today.includes('토') || today.includes('일')) {
    return '주말';
  } else {
    return "평일";
  }
}

const day = weekend();