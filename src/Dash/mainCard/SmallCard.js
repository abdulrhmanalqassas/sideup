import React from "react";
import styled from "styled-components";
import headImg from "../../assets/images/headImg.png";
import activeRate from "../../assets/images/activeRate.png";
import unactiveRate from "../../assets/images/unactiveRate.png";
import { Rate, ChartImg } from "../helper/Rate";
import { Amount } from "../helper/Amount";

const BorderCard = styled.div`
  width: 9.5625rem;
  padding: 0.3125rem;
  height: 5.125rem;
  margin: 0.625rem 0;
  left: 0rem;
  top: 0rem;
  background: rgba(66, 120, 184, 0.05);
  border-left: 0.125rem solid #4278b8;
  box-shadow: 0.25rem 0.375rem 0.625rem rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  @media (max-width: 900px) {
    display: inline-block;
    margin: 1.875rem 0 0 0;
    width: 7.5rem;
  }
`;

const Head = styled.div`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.25rem;
  color: #333737;
  height: 1.0688rem;
  display: flex;
  align-items: center;
  color: #000000;
`;

const Img = styled.img`
  width: 1.375rem;
  height: 1.2688rem;
`;

export const SmallCard = ({
  header,
  amount = "000",
  currency = "LE",
  rate = "00",
  active = false,
}) => {
  return (
    <BorderCard>
      <Head>
        <Img src={headImg} />
        {header}
      </Head>
      <Amount>{`${amount} ${currency}`} </Amount>
      <Rate active={active}>
        {`${rate}%`}
        {active ? (
          <ChartImg src={activeRate} />
        ) : (
          <ChartImg src={unactiveRate} />
        )}
      </Rate>
    </BorderCard>
  );
};
