
import { LitElement, html } from 'lit'

class TodoList extends LitElement {

  static properties = {
    todoItems:{type:Array}
  }

  constructor(){
    super();
    this.todoItems = JSON.parse(localStorage.getItem('todo')) || [];
  }

  handleAddItem(){
    const newItem = {id:Date.now(), value:'', checked:false}
    this.todoItems = [...this.todoItems, newItem]
    this.saveData();
  }

  handleDelete(id){
    this.todoItems = this.todoItems.filter(item => item.id !== id);
    this.saveData();
  }

  saveData(){
    localStorage.setItem('todo', JSON.stringify(this.todoItems));
  }

  render(){
    return html `
      <div class="container">
        <h1>To Do List</h1>
        <ul class="todo">
          ${
            this.todoItems.map(item =>
              html `
                <li>${item.value} list</li>
              `
            )
          }
        </ul>
        <button type="button" class="add-item" @click=${this.handleAddItem}>+</button>
      </div>
    `
  }
}

customElements.define('todo-list',TodoList);