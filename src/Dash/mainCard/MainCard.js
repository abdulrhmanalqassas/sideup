import React from "react";
import styled from "styled-components";
import { Card } from "../../Card";
import { MainC } from "./MainC";
import {SmallCard} from "./SmallCard"

const Main = styled.div`
  grid-area: main;
`;

export const MainCard = () => {
  return (
    <Main>
      <Card header={"105"}>
        <SmallCard/>
        <SmallCard/>
        <MainC/>
      </Card>
    </Main>
  );
};
