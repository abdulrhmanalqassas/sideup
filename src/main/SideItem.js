import React from "react";
import styled from "styled-components";
import sideIcon from '../assets/images/sideIcon.png'
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Item = styled.div`
border-left: ${props=>(props.active &&  "0.625rem solid red")} ;
width: 14.3125rem;
height: 3.1875rem;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 1rem;
color: #333737;
display:flex; 

`
const Icon = styled.img`
width: 20px;
height: 19px;
margin-left : 2.375rem;
margin-right : 0.3125rem;
// width: 1.25rem;
// height: 1.1875rem;
`

export const SideItem = ({ name  ,active=false }) => {
  const { t } = useTranslation();   
  return (
      <Item active={active}>
        <Icon src={sideIcon} /> {t(name)}
        </Item>
        
    );
  };
  