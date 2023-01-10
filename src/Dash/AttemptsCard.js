import React from "react";
import styled from "styled-components";
import { Card } from "../Card";

const attempts = [
  { state: "red", name: "success attempts ", value: "10" },
  { state: "green", name: "not good attempts ", value: "20" },
  { state: "gray", name: "some kind of attempts", value: "30" },
  { state: "red", name: "success attempts ", value: "10" },
  { state: "green", name: "not good attempts ", value: "20" },
  { state: "gray", name: "some kind of attempts", value: "30" },
];

const Left = styled.div`
  grid-area: left;
   
`;
const Thum = styled.div`
display: inline-block;
width: 12px;
height: 8px;
background: linear-gradient(90deg, #F8878C -0.91%, #CE0C14 100.42%);
`;

const Border = styled.div`
width: 90%;
margin :0 auto ;
height: 0px;
border: 0.5px solid #4278B8;`

const Attempt = styled.div`
display:block;  
margin-top:10px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
`
const Value =  styled.div`
margin : 0 0 auto 0 ;

`
const Warb=  styled.div`
display:block;

`
// {<Value>{value}</Value>}
const AttemptElement = ({ state, name, value }) => {
  return <>
  < Attempt> <Thum/> {name}  </ Attempt>
  <Border/>
  </>;
};
export const AttemptsCard = () => {
  return (
    <Left>

      <Card  header={"left"}>
       <Warb>
{attempts.map(att=>(<AttemptElement {...att}  />))}
       </Warb >
      </Card>
    </Left>
  );
};
