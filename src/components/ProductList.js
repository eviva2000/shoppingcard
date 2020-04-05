import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/CartActions";

class ProductList extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="">
            <img
              className="img-fluid card-img-top"
              //image conditional rendering
              src={item.img ? item.img : "../assets/broken-img.jpg"}
              alt={item.title}
            />
            <span
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              {" "}
              <i
                className="fa fa-plus-circle pl-3 pt-3 h4 warning"
                style={{ color: "#00BFA5", cursor: "pointer" }}
                aria-hidden="true"
              ></i>
            </span>
          </div>
          <div className="card-content p-3">
            <h4>{item.title}</h4>

            <h5>Price :${item.price}</h5>
          </div>
        </div>
      );
    });
    return (
      <div className="p-container  container">
        <h3>Our products</h3>
        <div className="card-columns">{itemList}</div>
      </div>
    );
  }
}
// Getting items from the store
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
// Adding items to the store
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
