import React from "react";
import styled from "styled-components";
import  {Card} from "../../Card"
import {MainC} from "./MainC"

const Main = styled.div`
  grid-area: main;
`;

export const MainCard = ()=>{
return(
    <Main> <Card width={"500px"}
    height={"280px"} header={"105"} ><MainC/></Card>  </Main>
)
}