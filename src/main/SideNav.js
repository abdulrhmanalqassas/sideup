import React from "react";
import styled from "styled-components";
import { SideItem } from "./SideItem";
import SideupLogo from "../assets/images/SideupLogo.png";

const Side = styled.section`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 116px;
  height: 42px;
  margin-top :42px ;
  margin-bottom :24px ;
  align-self:center;
  
`;

export const SideNave = ({ items }) => {
  return (
    <Side>
      <Logo src={SideupLogo} />

      {items.map((item, i) => {
        return <SideItem key={i} logo={item.logo} name={item.name} />;
      })}
    </Side>
  );
};
