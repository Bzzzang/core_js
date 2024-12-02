
/* alias type */

type User = {  // 별칭은 항상 대문자로
  id:number,
  name:string,
  auth:string,
  isPaid:boolean
}

interface _User {
  id:number,
  name:string,
  auth:string,
  isPaid:boolean
}

const user1:User = {
  id: 1,
  name: 'bzzang',
  auth: 'admin',
  isPaid: true
}

const user2:User = {
  id: 2,
  name: 'tiger',
  auth: 'admin',
  isPaid: true
}

