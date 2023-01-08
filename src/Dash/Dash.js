import React from "react";
import styled from "styled-components";
import { MainCard } from "./mainCard/MainCard";
import { Card } from "../Card";
import { SideCards } from "./mainCard/SideCards";
const Parent = styled.div`
  padding: 40px;
  display: grid;
  grid-template-areas:
    "main main    main   side-card1  frame frame"
    "main main    main   side-card2  left  left"
    "card card    card   side-card3      left  left";
  gap: 10px;
  width: fit-content;
  background-color: #2196f3;
`;

const MCard = styled.div`
  grid-area: card;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Frame = styled.div`
  grid-area: frame;

`;
const Left = styled.div`
  grid-area: left;
  
`;

export const Dash = () => {
  return (
    <Parent>
      <MainCard />
    <SideCards/>
      <MCard>
        <Card height="100%" header={"3"}>
         
        </Card>
        <Card height="100%" header={"3"}>
        
        </Card>
        <Card height="100%" header={"3"}>
          
        </Card>
      </MCard>

      <Frame>
        <Card width="320px" header={"left top"}></Card>
      </Frame>
      <Left>
        <Card width="320px" height="100%" header={"left"}></Card>
      </Left>
    </Parent>
  );
};
