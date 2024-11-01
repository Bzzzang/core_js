/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 내 버전
// 영화 봤니?
// let didWatchMovie = confirm("영화 봤어?");

// 영화 볼거니?
// let goingToWatchMovie = confirm("영화 볼 거야?");

// if (didWatchMovie == true){
//   console.log("YES");
// } else if(didWatchMovie == false){
//   confirm("영화 볼 거야?");
// } else if (goingToWatchMovie == true){
//   console.log("응");
// } else if (goingToWatchMovie == false){
//  console.log("아니");
// }

// 영화 봤니?
function watchinMovie() {
    let didWatchMovie = confirm("영화 봤어?");
    if(didWatchMovie){
      console.log("good");
    } else {
  // 영화 볼 거니?
      let goingToWatchMovie = confirm("영화 볼 거야?");
      if(goingToWatchMovie) {
        let withWho = prompt("누구랑?");

        if (withWho == 'you') {
          console.log("좋아");
        } else {
          console.log("너무해");
        }
      } else {
        console.log("gg");
      }
    }
 }

// 삼항 조건식
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const msg = didWatchMovie.includes('yes') ? '재밌더라' : goingToWatchMovie.includes('yes') ? '언제 볼래?' : '오키'

console.log(msg);


// 조건부 연산자

// 멀티 조건부 연산자 식