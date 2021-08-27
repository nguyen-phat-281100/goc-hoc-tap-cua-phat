import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    const { shoe, addToShoppingList } = this.props;
    return (
      <div className="col-4 mb-3" style={{ padding: "0.6rem" }}>
        <div className="card " style={{ border: "1px solid orange" }}>
          <img className="card-img-top" src={shoe.image} alt />
          <div className="card-body" style={{ borderTop: "1px solid green" }}>
            <h4 className="card-title">{shoe.name}</h4>
            <p className="card-text font-weight-bold">Price: {shoe.price}$</p>
            <button
              className="btn btn-success"
              // onClick={() => addToShoppingList(shoe)}
              onClick={() => addToShoppingList(shoe)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToShoppingList: (shoe) => {
      const action = {
        type: "ADD_TO_SHOPPING_LIST",
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
// khi dispatchtoprops xong thì nó sẽ trỏ thành props của component này,
//gọi func để dispatch action lên reducer
export default connect(
  null,
  //mapstate
  mapDispatchToProps
  //mapdispatch
)(ProductItem);
