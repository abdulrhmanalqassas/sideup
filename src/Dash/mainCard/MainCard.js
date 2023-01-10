import { Layout } from "@amcharts/amcharts5";
import React from "react";
import styled from "styled-components";
import { Card } from "../../Card";
import { MainC } from "./MainC";
import {SmallCard} from "./SmallCard"

const Main = styled.div`
  grid-area: main;
`;

const MainCardLayout = styled.div`
  display:inline-flex;
  // width:0;
  margin:-10px;
  padding:0;
 justify-content:space-between;
 @media (max-width: 900px) {
  display: flex;
  width:100%;
  flex-direction: column;
}
 
`
const MainCart = styled.div`
width:min-content;
@media (max-width: 900px) {
  display: none;
 
  overflow: hidden;
}`
export const MainCard = () => {
  return (
    <Main>
     
      <Card header={"105"}>
      <MainCardLayout>
        <div>
        <SmallCard/>
        <SmallCard/>
        </div>        
        <MainCart>
        <MainC/>
        </MainCart>
       
        </MainCardLayout>
      </Card>
     
    </Main>
  );
};
