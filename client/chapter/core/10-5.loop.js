/* --------------- */
/* For Of Loop     */
/* --------------- */

// enumerable => 열거 가능한
// iterable => 반복 가능한
// mutable => 변경 가능한 ⭐️⭐️⭐️⭐️⭐️

// for ~ of => iterable 요소만 사용 가능
// 배열은 iterable 하다
// 1. 순서(index)가 있다
// 2. length 존재

// 유사배열
const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3
}


// for ~ of 문
// - 특정 조건에서 건너띄기 (Java 문자 포함시) continue
// - 특정 조건에서 중단하기

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];


// 1. name 조회
// 2. 포함 여부 확인
// 3. if문 작성
// 4. continue 지시자 사용하기
for (const value of languages) {
  const name = value.name;
  if (name.includes('Java') && name.length < 5) {
    continue; // 'Java'가 포함된 경우 다음 반복으로 넘어감
  }

  // 'Java'가 포함되지 않은 경우 출력
  console.log(value);
}

// for문 : 모든 데이터 순환용 => 작성 코드가 많다 => 무한루프 여지 
// for..in문 : 객체 순환용 => 정해진 아이템의 갯수만큼 => 배열 순환 x 
// for..of문 : iterable 요소 순환용 => 정해진 아이템의 갯수만큼 => 배열 순환 o

// 객체의 static method
const obj = {
  nickName:'b',
  age:20
}

const keys = Object.keys(obj); // 객체의 key들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const values = Object.values(obj); // 객체의 value들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const entries = Object.entries(obj); // 객체의 [key,value]들을 모아 한 쌍의 배열을 이루는 새로운 배열을 '반환' 하는 유틸 함수

// 배열 구조 분해 할당

for(const [key,value] of Object.entries(obj)){
  console.log(value);
}


const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 재귀함수
for(const keyValue of Object.entries(randomUser)){
  const key = keyValue[0];
  const value = keyValue[1];

  if(typeof value === 'object'){
    
    for(const keyValue of Object.entries(value)){
      const key = keyValue[0];
      const value = keyValue[1];

      if(typeof value === 'object'){
        
        for(const keyValue of Object.entries(value)){
          const key = keyValue[0];
          const value = keyValue[1];
        }
      }
    }
  }
}

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

// 객체의 static method
// const keys = Object.keys(obj);