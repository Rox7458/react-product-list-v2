import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { categories, products } from "../../helper/data";

const ProductList = () => {
  const [inputData, setInputData] = useState("");
  console.log(inputData);

  return (
    <>
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container className="d-flex flex-*-wrap justify-content-center">
            <Navbar.Brand href="#home">ALL</Navbar.Brand>
            <Navbar.Brand href="#home">ELECTRONICS</Navbar.Brand>
            <Navbar.Brand href="#home">JEWELERY</Navbar.Brand>
            <Navbar.Brand href="#home">MEN'S CLOTHING</Navbar.Brand>
            <Navbar.Brand href="#home">WOMEN'S CLOTHING</Navbar.Brand>
          </Container>
        </Navbar>

        <div>
          <InputGroup className="mb-3 mt-3">
            <Form.Control
              onChange={(e) => inputData(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search Product..."
            />
          </InputGroup>
        </div>
      </div>

      <div>
        {products.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
