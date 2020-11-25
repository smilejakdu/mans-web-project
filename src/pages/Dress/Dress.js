import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import dress1 from "../../util/images/dress1.jpeg";

import { DressCardBorder } from "./Dress.styled";

const HairDataList = [
  {
    id: 1,
    image: dress1,
    content: "정장",
    name: "공유",
  },
  {
    id: 2,
    image: dress1,
    content: "정장",
    name: "원빈",
  },
  {
    id: 3,
    image: dress1,
    content: "정장",
    name: "남주혁",
  },
  {
    id: 4,
    image: dress1,
    content: "정장",
    name: "공유",
  },
  {
    id: 5,
    image: dress1,
    content: "정장",
    name: "원빈",
  },
  {
    id: 6,
    image: dress1,
    content: "정장",
    name: "남주혁",
  },
  {
    id: 7,
    image: dress1,
    content: "정장",
    name: "공유",
  },
  {
    id: 8,
    image: dress1,
    content: "정장",
    name: "원빈",
  },
  {
    id: 9,
    image: dress1,
    content: "정장",
    name: "남주혁",
  },
];
const Dress = () => {
  return (
    <div>
      {HairDataList.map((hair) => (
        <DressCardBorder>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={hair.image} height="350" />
            <Card.Body>
              <Card.Title>{hair.content}</Card.Title>
              <Card.Text>{hair.name}</Card.Text>
              <Button variant="primary">자세히보기</Button>
            </Card.Body>
          </Card>
        </DressCardBorder>
      ))}
    </div>
  );
};
export default Dress;
