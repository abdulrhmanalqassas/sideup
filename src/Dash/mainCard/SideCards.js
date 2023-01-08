import React from "react";
import styled from "styled-components";
import { Card } from "../../Card";
const SideCard1 = styled.div`
  grid-area: side-card1;
`;
const SideCard2 = styled.div`
  grid-area: side-card2;
`;
const SideCard3 = styled.div`
  grid-area: side-card3;
`;
export const SideCards = () => {
  return (
    <>
      <SideCard1>
        <Card header={"h1"}></Card>
      </SideCard1>
      <SideCard2>
        <Card header={"h2"}></Card>
      </SideCard2>
      <SideCard3>
        <Card header={"h3"}></Card>
      </SideCard3>
    </>
  );
};
