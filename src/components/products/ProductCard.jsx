import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ data }) => {
  const [heart, setHeart] = useState(false);

  return (
    <Card className="card m-1">
      <Card.Body className="d-flex justify-content-between">
        <Card.Text>{data.price} $</Card.Text>
        <Card.Text>
          <FaHeart
            onClick={() => setHeart(!heart)}
            className={heart == false ? "text-black h1" : "text-danger h1"}
          />
        </Card.Text>
      </Card.Body>

      <Card.Img className="cardImg" src={data.image} />
      <Card.Body className="hideLabel position-absolute end-0 rounded w-100 h-25 d-flex justify-content-center align-items-center text-light">
        <Card.Text className="">{data.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
