import React from "react";
import styled from "styled-components";
import headImg from "../../assets/images/headImg.png";
import activeRate from "../../assets/images/activeRate.png"
import unactiveRate from "../../assets/images/unactiveRate.png"
import {Rate, ChartImg} from "../helper/Rate"
import { Amount } from "../helper/Amount";

const BorderCard = styled.div`
  width: 193px;
  padding: 5px;
  height: 92px;
  margin:10px 0  ;
  left: 0px;
  top: 0px;
  background: rgba(66, 120, 184, 0.05);
  border-left: 2px solid #4278b8;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  @media (max-width: 900px) {
    display:inline-block;
    margin:30px 0 0 0  ;
    width: 120px;
  }
  
`;

const Head = styled.div`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #333737;
  height: 17.1px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const Img = styled.img`
  width: 22px;
  height: 20.3px;
`;


export const SmallCard = ({ header , amount="000" ,  currency = "LE",rate="00" , active=false}) => {
  return (
    <BorderCard>
      <Head>
        <Img src={headImg} />
        {header}
      </Head>
     <Amount>{`${amount} ${currency}` } </Amount>
     <Rate active={active}>{`${rate}%` } 
     {active?<ChartImg src={activeRate} />:<ChartImg src={unactiveRate} />}
     </Rate>
    </BorderCard>
  );
};
