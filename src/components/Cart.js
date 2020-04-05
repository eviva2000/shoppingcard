import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/CartActions";

class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  render() {
    console.log(this.props.total);
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="collection-item " key={item.id}>
            <div className="item-img ">
              <img src={item.img} alt={item.title} className="cart-img" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <div>
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </div>
                <div>
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    arrow_drop_down
                  </i>
                </div>
              </div>
              <button
                className=" btn  btn-warning "
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
            <hr style={{ borderTop: "1px solid white" }} />
          </div>
        );
      })
    ) : (
      <p id="empty"> Shopping card is empty</p>
    );
    return (
      <div className="cart-container ">
        <div className="cart">
          {/* <h5>You have ordered:</h5> */}
          <div className="collection ">{addedItems}</div>
          <div id="total">Total: {this.props.total} $</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
