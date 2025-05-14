import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { categories, products } from "../../helper/data";

const ProductList = () => {
  const [fromInput, setFromInput] = useState("");
  const [birkategori, setBirkategori] = useState("electronics");
  console.log(birkategori);

  let newProducts = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(fromInput.toLowerCase().trim())
  );

  const fonksiyoncalis = () => {
    newProducts = products.filter((product) =>
      product.category.toLocaleLowerCase().includes(setBirkategori)
    );
    setBirkategori();
  };

  return (
    <>
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container className="d-flex flex-*-wrap justify-content-center">
            <Navbar.Brand>ALL</Navbar.Brand>
            <Navbar.Brand onClick={fonksiyoncalis}>ELECTRONICS</Navbar.Brand>
            <Navbar.Brand>JEWELERY</Navbar.Brand>
            <Navbar.Brand>MEN'S CLOTHING</Navbar.Brand>
            <Navbar.Brand>WOMEN'S CLOTHING</Navbar.Brand>
          </Container>
        </Navbar>

        <div>
          <InputGroup className="mb-3 mt-3">
            <Form.Control
              onChange={(e) => setFromInput(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search Product..."
            />
          </InputGroup>
        </div>
      </div>

      <div>
        {newProducts.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
