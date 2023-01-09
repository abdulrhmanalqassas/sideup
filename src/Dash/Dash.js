import React from "react";
import styled from "styled-components";
import { MainCard } from "./mainCard/MainCard";
import { Card } from "../Card";
import { SideCards } from "./SideCards";
import {BottomCards} from "./bottomCards"
const Parent = styled.div`
  // padding: 2.5rem;
  display: grid;
  height: 400px;
  grid-template-areas:
    "main   main    main   side-card1  frame frame"
    "main  main    main   side-card2  left  left"
    "card1 card2   card3   side-card3  left  left";
  gap: 0.625rem;
   
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
      <SideCards />
      <BottomCards/>
      

      <Frame>
        <Card header={"left b"}></Card>
      </Frame>
      <Left>
        <Card  header={"left"}></Card>
      </Left>
    </Parent>
  );
};
