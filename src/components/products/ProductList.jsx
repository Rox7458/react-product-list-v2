import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { categories, products } from "../../helper/data";

const ProductList = () => {
  const [fromInput, setFromInput] = useState("");
  const [elected, setElected] = useState("");

  let newProducts = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(fromInput.toLowerCase().trim())
  );

  let searchedNewProducts = newProducts.filter((product) =>
    product.category.startsWith(elected === "all" ? "" : elected)
  );

  return (
    <>
      <div>
        <Navbar>
          <Container className="flex-wrap justify-content-center">
            {categories.map((category, index) => (
              <Navbar.Brand
                key={index}
                className=" rounded p-1 m-1  navbars"
                onClick={() => setElected(category)}
              >
                {category.toUpperCase()}
              </Navbar.Brand>
            ))}
          </Container>
        </Navbar>

        <div>
          <InputGroup className="d-flex justify-content-center m-3  inputStyle">
            <Form.Control
              onChange={(e) => setFromInput(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search Product..."
            />
          </InputGroup>
        </div>
      </div>

      <div
        className="d-flex flex-wrap  justify-content-center
      "
      >
        {searchedNewProducts.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
