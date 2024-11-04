/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
let j = 0;
while( j <= 10){
  j++
  if(j % 2 !== 0) continue;
  console.log(j);
}

let p = 0
for(; p <= 10; ){
  p++
  if( p % 2 !== 0) continue;
  console.log('p : ' , p);
}


const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.
let index = 0;

while (index < frontEndDev.length) {
    const tech = frontEndDev[index];
    
    // SVG, jQuery는 출력하지 않고 계속 진행
    if (tech === "SVG" || tech === "jQuery") {
        index++; // 다음 인덱스로 이동
        continue; // 현재 루프의 나머지 부분을 건너뛰고 다음 루프 실행
    }
    
    // JavaScript만 출력하고 루프를 종료
    if (tech === "JavaScript") {
        console.log(tech); // JavaScript를 출력
        break; // 루프를 중단
    }
    
    index++; // 인덱스를 증가시켜 다음 항목으로 이동
}

for (let i = 0; i < l; i++) {
    const value = frontEndDev[i];
    const lower = value.toLowerCase();
    
    // SVG, jQuery는 출력하지 않고 계속 진행
    if (lower.includes('svg') || lower.includes('jquery')) {
        continue; // 현재 루프의 나머지 부분을 건너뛰고 다음 루프 실행
    }
    
    // JavaScript만 출력하고 루프를 종료
    if (value === "JavaScript") {
        console.log(value); // JavaScript를 출력
        break; // 루프를 중단
    }
}


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)