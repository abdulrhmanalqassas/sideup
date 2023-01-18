import styled from "styled-components";

export const Rate = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 1.375rem;
  line-height: 2rem;
  color: ${(props) => (props.active ? " #17A21A" : "#CE0C14")};
`;
export const ChartImg = styled.img``;
