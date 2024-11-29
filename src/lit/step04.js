
import { LitElement, html} from 'lit'

class NameTag extends LitElement {

  static properties = {
    name:{}
  }

  constructor(){
    super();

    this.name = '이름이 뭐야?'
  }

  handleInput(e){
    this.name = e.target.value;
  }

  handleClick(){
    alert(this.name)
  }

  render(){
    return html /*html*/ `
      <p>안녕, ${this.name}</p>
      <input @input=${this.handleInput} type="text" palceHolder="이름을 입력해주세요." />
      <button @click=${this.handleClick} type="button">Click!</button>
    `
  }
}

customElements.define('name-tag',NameTag);
app.append(document.createElement('name-tag'));