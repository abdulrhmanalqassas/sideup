import React from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { Donut } from "./helper/donut";
import activeRate from "../assets/images/activeRate.png"
import unactiveRate from "../assets/images/unactiveRate.png"
import {Rate, ChartImg} from "./helper/Rate"
import { Amount } from "./helper/Amount";

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
        <Amount>{`${5000} ${"USD"}` } </Amount>
        <Donut/>

        </Card>
      </Card1>
      <Card2>
      
        <Card header={"2"}> 
        <Amount>{`${5000} ${"USD"}` } </Amount>
        <Donut type="pie" />
       
        </Card>
       
      </Card2>
      <Card3>
        <Card header={"3"}>
        <Amount>{`${5000} ${"USD"}` } </Amount>
     <Rate active={false}>{`${30}%` } 
     {false?<ChartImg src={activeRate} />:<ChartImg src={unactiveRate} />}
     </Rate>

        </Card>
      </Card3>
    </>
  );
};
