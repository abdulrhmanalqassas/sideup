import React from "react";
import styled from "styled-components";
import headImg from "../../assets/images/headImg.png";
import activeRate from "../../assets/images/activeRate.png"
import unactiveRate from "../../assets/images/unactiveRate.png"
const BorderCard = styled.div`
  width: 193px;
  padding: 5px;
  height: 94px;
  left: 0px;
  top: 0px;
  background: rgba(66, 120, 184, 0.05);
  border-left: 2px solid #4278b8;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
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

const Amount = styled.h5`
margin:0;
padding:0;
font-weight: 400;
font-size: 19px;
line-height: 21px;
color: #333737;
`
const Rate =styled.h1`
margin:0;
padding:0;
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 32px;
color:${ props=>(props.active? " #17A21A":"#CE0C14")};
`
const ChartImg = styled.img`
`

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
