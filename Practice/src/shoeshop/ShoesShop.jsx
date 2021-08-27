import React, { Component } from "react";
import ProductList from "./ProductList";
import productList from "./data.json";
import ShoppingList from "./ShoppingList";

export default class ShoesShop extends Component {
  state = {
    shoppingList: [],
  };
  addToShoppingList = (shoe) => {
    const shoppingListUpdate = [...this.state.shoppingList];
    const index = shoppingListUpdate.findIndex((item) => item.id === shoe.id);
    if (index === -1) {
      const newShoe = {
        ...shoe,
        quantity: 1,
      };
      shoppingListUpdate.push(newShoe);
    } else {
      shoppingListUpdate[index].quantity += 1;
    }
    //setState lại cái obj mới
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  updateQuantity = (id, action) => {
    const shoppingListUpdate = [...this.state.shoppingList];
    const index = shoppingListUpdate.findIndex((item) => item.id === id);
    if (action) {
      shoppingListUpdate[index].quantity += 1;
    } else {
      if (shoppingListUpdate[index].quantity > 1) {
        shoppingListUpdate[index].quantity -= 1;
      }
    }
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  removeFromShoppingList = (id) => {
    const shoppingListUpdate = [...this.state.shoppingList];
    const index = shoppingListUpdate.findIndex((item) => item.id === id);
    shoppingListUpdate.splice(index, 1);
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };
  render() {
    const { shoppingList } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-7 text-right">
            <h1>Shoes Shop</h1>
            <p>
              Preliminary with sexual games,They're Both So Sexy,Des Irez & Evan
              Knox
            </p>
          </div>
          <div className="col-5 text-right">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#shoppingList"
            >
              Shopping List ({shoppingList.length})
            </button>
          </div>
        </div>
        <ShoppingList
          shoppingList={shoppingList}
          updateQuantity={this.updateQuantity}
          removeFromShoppingList={this.removeFromShoppingList}
        />
        <ProductList
          productList={productList}
          addToShoppingList={this.addToShoppingList}
        />
      </div>
    );
  }
}
