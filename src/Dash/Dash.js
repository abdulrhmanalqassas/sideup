import React from "react";
import styled from "styled-components";
import { MainCard } from "./mainCard/MainCard";
import { Card } from "../Card";
import { SideCards } from "./SideCards";
import {BottomCards} from "./bottomCards";
import {AttemptsCard} from "./AttemptsCard"


const Parent = styled.div`
  padding: 1.7rem;

  display: grid;
  height: 400px;
  grid-template-areas:
    "main   main    main   side-card1  frame frame"
    "main  main    main   side-card2  left  left"
    "card1 card2   card3   side-card3  left  left";
  gap: 0.625rem;
  @media (max-width: 900px) {
    margin:0 auto;
    padding: 0em;
    display: flex;
    max-width:85%;
    // flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    justify-content:space-around;
  }
`;


const Frame = styled.div`
  grid-area: frame;
`;


// const Attempt 
export const Dash = () => {
  return (
    <Parent>
      <AttemptsCard/>
       <BottomCards/>
      <SideCards />
      <MainCard />
      <Frame>
        <Card isHeader={false}></Card>
      </Frame>
      
    </Parent>
  );
};
