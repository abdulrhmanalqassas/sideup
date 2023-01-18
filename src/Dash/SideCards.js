import React from "react";
import styled from "styled-components";
import { Card } from "../Card";
import activeRate from "../assets/images/activeRate.png";
import unactiveRate from "../assets/images/unactiveRate.png";
import { Rate, ChartImg } from "./helper/Rate";
import { Amount } from "./helper/Amount";
import { Highlight } from "../Dash/helper/HighlightBox";
import gift from "../assets/images/gift.png";
import { UnderLined } from "./helper/UnderLined";
const SideCard1 = styled.div`
  grid-area: side-card1;
`;
const SideCard2 = styled.div`
  grid-area: side-card2;
`;
const SideCard3 = styled.div`
  grid-area: side-card3;
`;

const test = (
  <>
    <Amount>{`${10} ${"USD"}`} </Amount>
    <Rate active={true}>
      {`${50}%`}
      {true ? <ChartImg src={activeRate} /> : <ChartImg src={unactiveRate} />}
    </Rate>
  </>
);
export const SideCards = () => {
  return (
    <>
      <SideCard1>
        <Card header={"h1"}> {test}</Card>
      </SideCard1>
      <SideCard2>
        <Card header={"h2"}> {test}</Card>
      </SideCard2>
      <SideCard3>
        <Card header={"h3"}>
          {" "}
          <Highlight>
            <UnderLined>35</UnderLined>
            <img alt="nul" src={gift}></img>
          </Highlight>{" "}
        </Card>
      </SideCard3>
    </>
  );
};
