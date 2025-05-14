import React from "react";
import Card from "react-bootstrap/Card";

const ProductCard = ({ data }) => {
  return (
    <Card>
      <Card.Body className="d-flex">
        <Card.Text>{data.price} $</Card.Text>
        <Card.Text>heart</Card.Text>
      </Card.Body>

      <Card.Img className="w-25" src={data.image} />
      <Card.Body>
        <Card.Text>{data.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
