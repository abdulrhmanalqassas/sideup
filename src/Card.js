import React from "react";
import styled from "styled-components";

const CardInit = styled.div`
  width:  ${props =>(props.width)};
  height: ${props =>(props.height)};
  left: 56.75rem;
  top: 38.8125rem;
  background: #fdfef9;
  box-shadow: 0.25rem 0.375rem 0.625rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;
const Head = styled.div`
color:#000000`;

export const Card = ({ header, children ,height="8.125rem", width="10rem"}) => {
  return (
    <CardInit height={height} width={width}>
      <Head>{header}</Head>
      {children}
    </CardInit>
  );
};
