import React from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { Donut } from "./donut";
const Card1 = styled.div`
  grid-area: card1;
`;
const Card2 = styled.div`
  grid-area: card2;
`;
const Card3 = styled.div`
  grid-area: card3;
`;


export const BottomCards = () => {
  return (
    <>
      <Card1>
        <Card  header={"1"}>
        <Donut/>

        </Card>
      </Card1>
      <Card2>
        <Card header={"2"}> <Donut type="pie" /></Card>
       
      </Card2>
      <Card3>
        <Card header={"3"}></Card>
      </Card3>
    </>
  );
};
