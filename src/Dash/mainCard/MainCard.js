import React from "react";
import styled from "styled-components";
import  {Card} from "../../Card"
import {MainC} from "./MainC"

const Main = styled.div`
  grid-area: main;
`;

export const MainCard = ()=>{
return(
    <Main> <Card width={"31.25rem"}
    height={"17.5rem"} header={"105"} ><MainC/></Card>  </Main>
)
}