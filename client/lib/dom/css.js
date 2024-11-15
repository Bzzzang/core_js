
/* ----------------------------------- */
/*               css class             */
/* ----------------------------------- */

/**
 * @function DOM element에 클래스를 추가하는 함수
 * @param {HTMLElement | string} node 
 * @param  {string | array | pbject} className 
 * @return {void}
 */

function addClass(node,...className){

  if(isString(node)) node = getNode(node);
  
  className.forEach((c)=>{
    
    if(isObject(c)) c = Object.values(c);

    if(c.includes(',')){
      c = c.replace(/\s*/g,'').split(',');
    }

    if(isArray(c)){
      c.forEach(c => node.classList.add(c))
    }else{
      node.classList.add(c);
    }
  })
}

function removeClass(node,className){
  if(isString(node)) node = getNode(node);
  if(!className){
    node.className = '';
  }
  node.classList.remove(className);
}

function toggleClass(node,className){
  if(isString(node)) node = getNode(node);
  return node.classList.toggle(className);
}



/* ----------------------------------- */
/*                Style                */
/* ----------------------------------- */


function getCss(node,prop){
  if(isString(node)) node = getNode(node);
  if(!(prop in document.body.style)) throw new SyntaxError('getCss 함수의 두번째 인수는 유효한 css 속성이어야 합니다.')
  return getComputedStyle(node)[prop]
}

function setCss(node,prop,value){
  if(isString(node)) node = getNode(node);
  if(!(prop in document.body.style)) throw new SyntaxError('setCss 함수의 두번째 인수는 유효한 css 속성이어야 합니다.')
  if(!value) throw new SyntaxError('setCss 함수의 세번째 인수는 필수 입력값입니다.')
  node.style[prop] = value;
}

const css = (node,prop,value) => !value ? getCss(node,prop) : setCss(node,prop,value);