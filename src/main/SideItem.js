import React from "react";
import styled from "styled-components";
import sideIcon from '../assets/images/sideIcon.png'
const Item = styled.div`
border-left: ${props=>(props.active &&  "10px solid red")} ;
width: 229px;
height: 51px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #333737;
display:flex; 

`
const Icon = styled.img`
padding-left : 38px;
padding-right : 5px;
width: 20px;
height: 19px;
`

export const SideItem = ({ name  ,active=false }) => {
    return (
      <Item active={active}>
        <Icon src={sideIcon} />{name}
        </Item>
        
    );
  };
  