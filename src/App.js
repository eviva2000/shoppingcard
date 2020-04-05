import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./app.css";
function App() {
  return (
    <div className="App">
      <div className="my-container">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
