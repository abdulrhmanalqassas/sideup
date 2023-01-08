import React from "react";
import styled from "styled-components";

const CardInit = styled.div`
  width:  ${props =>(props.width)};
  height: ${props =>(props.height)};
  left: 908px;
  top: 621px;
  background: #fdfef9;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
const Head = styled.div`
color:#000000`;

export const Card = ({ header, children ,height="130px", width="160px"}) => {
  return (
    <CardInit height={height} width={width}>
      <Head>{header}</Head>
      {children}
    </CardInit>
  );
};
