import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="row ">
        {productList.map((shoe, idx) => {
          return <ProductItem key={idx} shoe={shoe} />;
        })}
      </div>
    );
  }
}
