import React, { Component } from "react";

export default class ShoppingList extends Component {
  render() {
    const { shoppingList, updateQuantity, removeFromShoppingList } = this.props;
    return (
      <div>
        <div
          className="modal fade "
          id="shoppingList"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Shopping List</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {shoppingList.length > 0 ? (
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shoppingList.map((shoe, idx) => {
                        const { id, image, name, price, quantity } = shoe;
                        return (
                          <tr key={idx}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                              <img src={image} width="40px" />
                            </td>
                            <td>{price}</td>
                            <td>
                              <button
                                className="btn btn-success"
                                onClick={() => updateQuantity(id, true)}
                              >
                                +
                              </button>{" "}
                              {quantity}{" "}
                              <button
                                className="btn btn-danger"
                                onClick={() => updateQuantity(id, false)}
                              >
                                -
                              </button>
                            </td>
                            <td>{quantity * price}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => removeFromShoppingList(id)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center my-3">
                    There is no item, let's shopping
                  </div>
                )}
                {shoppingList.length > 0 && (
                  <div className="text-right">
                    <span className="font-weight-bold">Total payment:</span>{" "}
                    <span>
                      {shoppingList.reduce((total, current) => {
                        return (total += current.price * current.quantity);
                      }, 0)}
                      $ {/* 0 là giá trị ban đầu của total */}
                    </span>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
