import React from "react";
import c1 from "../assets/images/characters/c1.png"
import c2 from "../assets/images/characters/c2.png"
import c3 from "../assets/images/characters/c3.png"
import c4 from "../assets/images/characters/c4.png"
import styled from "styled-components";

const FullStrap = styled.div`
max-width : 100% ;
display :flex; 
justify-content:space-around;
margin-bottom:10px ;
overflow: hidden;
@media (max-width: 900px) {
    display: none;
    // width:100%;
    // flex-direction: column;
  }
`
const images = [c1,c2,c3,c4,c1,c2,c3,c4,c1] ;

export const Character = ()=>{
    return (
        <FullStrap>
            {images.map(image=>(<img alt="null" src={image}></img>)

            )}
        </FullStrap>
    )
}