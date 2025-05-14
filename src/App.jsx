import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";

const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export default App;
