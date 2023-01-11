import React from "react";
import styled from "styled-components";
import headImg from "./assets/images/headImg.png";
import { useTranslation } from "react-i18next";

const CardInit = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 20px;
  box-sizing: border-box;
  background: #fdfef9;
  box-shadow: 0.25rem 0.375rem 0.625rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  width: 100%;
  @media (max-width: 900px) {
    width:fit-content;
    height:fit-content;
    @media (max-width: 900px) {
      // display: flex;
      max-width:100%;
    
    }
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

const HeadImg = styled.img`
width:22px;
height: 20.3px;
`;

export const Card = ({ header, children, height = "100%", width , isHeader = true}) => {
  const { t } = useTranslation();
  return (
    <CardInit height={height} width={width}>
     {isHeader && <Head>
        <HeadImg src={headImg} />
        {t(header)}
      </Head>}
      {children}
    </CardInit>
  );
};
