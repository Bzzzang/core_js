
import {addClass, removeClass} from './css.js'
import {getNode as $} from './getNode.js'
import {isString} from '../utils/type.js'


export function showAlert(node,message='오류 발생',timeout=1000){

  if(isString(node)) node = $(node);

  node.textContent = message

  addClass(node, 'is-active');

  setTimeout(()=>{
    removeClass(node, 'is-active');},timeout)
}
