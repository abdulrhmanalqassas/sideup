import React from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { Highlight } from "./helper/HighlightBox";

const values = [
  { header: "Picked", number: "45" },
  { header: "Picked", number: "45" },
  { header: "Picked", number: "45" },
  { header: "Picked", number: "45" },
];
const Frame = styled.div`
  grid-area: frame;
`;
const Header = styled.div`
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;

color: #333737;
`
const Warp = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const FrameCard = () => {
  return (
    <Frame>
      <Card isHeader={false}>
        <Warp>
          {values.map(({ header, number }) => (
            <div>
              <Header>{header}</Header>
              <Highlight>{number}</Highlight>
            </div>
          ))}
        </Warp>
      </Card>
    </Frame>
  );
};
