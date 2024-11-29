
import { LitElement, html, css } from 'lit';


class ProductList extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
    .product-card {
      display: flex;
      align-items: center;
      border: 1px solid #ddd;
      padding: 10px;
      margin: 10px;
      width: 350px;
      border-radius: 8px;
    }
    .product-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-right: 20px;
    }
    .product-info {
      flex-grow: 1;
    }
    .product-info h3 {
      margin: 0;
      font-size: 18px;
    }
    .product-price {
      font-size: 16px;
      font-weight: bold;
      margin-top: 5px;
    }
    .product-quantity {
      font-size: 14px;
      color: gray;
      margin-top: 5px;
    }
  `

  static properties = {
    products: { type: Array },
  }

  constructor() {
    super()

    this.products = [
      { id: 1, product: '소고기 샤브샤브 밀키트', price: 15900, quantity: 3 },
      { id: 2, product: '비빔밥 세트', price: 11900, quantity: 5 },
      { id: 3, product: '차돌박이 숙주 볶음', price: 10900, quantity: 2 },
    ];
  }

  render() {
    return html`
      <div>
        ${this.products.map(
          (product) => html`
            <div class="product-card">
              <img class="product-image" src="https://picsum.photos/100/100" alt="${product.product}">
              <div class="product-info">
                <h3>${product.product}</h3>
                <p class="product-price">${product.price.toLocaleString()} 원</p>
                <p class="product-quantity">${product.quantity}</p>
              </div>
            </div>
          `
        )}
      </div>
    `
  }
}

customElements.define('product-list', ProductList);

app.append(document.createElement('product-list'));
