

const {localStorage:storage} = window;

// storage.setItem('user',JSON.stringify({name:'bzzang',age:20}));

export function setStorage(key,value){

  return new Promise((resolve,reject)=>{
    if(typeof key == 'string'){
      storage.setItem(key,JSON.stringify(value));
      resolve()
    } else{
      reject({message:'첫 번째 인수는 문자 타입이어야 합니다.'})
    }
  })

}

// setStorage('user',{name:'bzzang',age:20})
// .then(()=>{
//   console.log('완료');
// })

const value = storage.getItem('user');

export function getStorage(key){

  return new Promise((resolve,reject)=>{
    if(typeof key == 'string'){
      resolve(JSON.parse(storage.getItem(key)));
    } else{
      reject()
    }
  })

}

export function deleteStorage(key){

  return new Promise((resolve,reject)=>{
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  })

}

export function setCookieValue(name,value,days,path='/'){
  
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=${path}`

  if(days){
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    cookieString += `' expires=${date.toUTCString()}`
  }

  document.cookie = cookieString;
}

// setCookieValue('username','bzzang',1)

export function getCookieValue(name){

  const value = `; ${document.cookie}`

  const parts = value.split(`; ${encodeURIComponent(name)}=`);

  if(parts.length == 2){
    return decodeURIComponent(parts.pop().split(';').shift())
  }

  return null;

}

// getCookieValue('username')



