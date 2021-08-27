import React, { Component } from "react";
import ProductList from "./ProductList";
import productList from "./data.json";
import ShoppingList from "./ShoppingList";
import { connect } from "react-redux";
import shoesShopReducer from "../store/reducers/ShoesShopReducer";

class ShoesShopRedux extends Component {
  render() {
    const { lengthShoppingList } = this.props;
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
              Shopping List ({lengthShoppingList})
            </button>
          </div>
        </div>
        <ShoppingList />
        <ProductList productList={productList} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lengthShoppingList: state.shoesShopReducer.shoppingList.length,
  };
};
//=>lengthShoppingList đã trỏe thành props cảu componemt ShoesShopRedux
export default connect(mapStateToProps)(ShoesShopRedux);
