

import {getNode} from './getNode.js'
import {isString} from '../utils/type.js'

export function endScroll(node){

  if(isString(node)) node = getNode(node);
  Node.scrollTop = node.scrollHeight
}