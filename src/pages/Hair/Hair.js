import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import person1 from "../../util/images/person1.jpeg";
import person2 from "../../util/images/person2.jpeg";
import person3 from "../../util/images/person3.jpeg";

import { HairCardBorder } from "./Hair.styled";

const HairDataList = [
  {
    id: 1,
    image: person1,
    content: "배우",
    name: "공유",
  },
  {
    id: 2,
    image: person2,
    content: "배우",
    name: "원빈",
  },
  {
    id: 3,
    image: person3,
    content: "배우",
    name: "남주혁",
  },
  {
    id: 4,
    image: person1,
    content: "배우",
    name: "공유",
  },
  {
    id: 5,
    image: person2,
    content: "배우",
    name: "원빈",
  },
  {
    id: 6,
    image: person3,
    content: "배우",
    name: "남주혁",
  },
  {
    id: 7,
    image: person1,
    content: "배우",
    name: "공유",
  },
  {
    id: 8,
    image: person2,
    content: "배우",
    name: "원빈",
  },
  {
    id: 9,
    image: person3,
    content: "배우",
    name: "남주혁",
  },
];
const Hair = () => {
  return (
    <div>
      {HairDataList.map((hair) => (
        <HairCardBorder>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={hair.image} height="350" />
            <Card.Body>
              <Card.Title>{hair.content}</Card.Title>
              <Card.Text>{hair.name}</Card.Text>
              <Button variant="primary">자세히 보기</Button>
            </Card.Body>
          </Card>
        </HairCardBorder>
      ))}
    </div>
  );
};
export default Hair;
