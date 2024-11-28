
import { TodoService as s } from "../../service/TodoService.js";

const todoItemtemplate = document.createElement('template');

todoItemtemplate.innerHTML = `
<style>@import url('./components/TodoItem/TodoItem.css');</style>
  <li class="item">
    <input type="checkbox" />
    <div class="content">
      <input type="text" />
    </div>
    <button type="button" class="delete-item"> x </button>
  </li>
`


export class TodoItem extends HTMLElement {

  constructor(id,value,checked){
    super();
    this.attachShadow({mode:'open'});
    this.render()

    this.item = this.shadowRoot.querySelector('.item');
    this.checkbox = this.shadowRoot.querySelector('input[type="checkbox"]');
    this.contentInput = this.shadowRoot.querySelector('input[type="text"]');
    this.deleteButton = this.shadowRoot.querySelector('.delete-item');

    this.id = id;
    this.contentInput.value = value;
    this.checkbox.checked = checked;

    if(checked){
      this.contentInput.classList.add('.done')
    }
  }

  connectedCallback(){
    this.contentInput.value = 'TASK' + this.id;
    this.deleteButton.addEventListener('click',()=>this.handleDelete())
    this.checkbox.addEventListener('click',()=>this.handleToggleChecked())
    this.contentInput.addEventListener('blur',()=>this.handleUpdate())
    this.contentInput.addEventListener('keydown',(e)=>this.handleEnterPress())

    s.AddTodoItem(this.id,this.contentInput.value,this.checkbox.checked)
  }

  handleEnterPress({keyCode}){
    if(keyCode === 13){
      this.nextElementSibling.shadowRoot.querySelector('input[type="text"]');

      
    }
  }

  handleUpdate(){
    s.UpdateTodoItem(this.id,this.contentInput.value)
  }

  handleDelete(){
    this.remove()
    s.DeleteTodoItem(this.id)
  }

  handleToggleChecked(){
    this.checkbox.checked
    if(this.checkbox.checked){
      this.contentInput.classList.add('done');
    }else{
      this.contentInput.classList.remove('done');
    }

    s.CheckTodoItem(this.id, this.checkbox.checked)
  }

  render(){
    this.shadowRoot.append(todoItemtemplate.content.cloneNode(true))
  }
}