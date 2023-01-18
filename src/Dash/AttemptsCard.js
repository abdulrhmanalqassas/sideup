import React from "react";
import styled from "styled-components";
import { Card } from "../Card";

import { useTranslation } from "react-i18next";

const attempts = [
  { state: "red", name: "success", value: "10" },
  { state: "green", name: "not", value: "20" },
  { state: "gray", name: "some kind of attempts", value: "30" },
  { state: "red", name: "success", value: "10" },
  { state: "green", name: "not", value: "20" },
  { state: "gray", name: "some kind of attempts", value: "30" },
];

const Left = styled.div`
  grid-area: left;
`;
const Thum = styled.div`
  display: inline-block;
  width: 0.75rem;
  height: 0.5rem;
  background: linear-gradient(90deg, #f8878c -0.91%, #ce0c14 100.42%);
`;

const Border = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 0rem;
  border: 0.0313rem solid #4278b8;
`;

const Attempt = styled.div`
  display: block;
  margin-top: 0.625rem;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;
`;

const Warb = styled.div`
  display: block;
`;

// {<Value>{value}</Value>}
const AttemptElement = ({ state, name, value }) => {
  const { t } = useTranslation();
  return (
    <>
      <Attempt>
        {" "}
        <Thum /> {t(name)}{" "}
      </Attempt>
      <Border />
    </>
  );
};
export const AttemptsCard = () => {
  return (
    <Left>
      <Card header={"left"}>
        <Warb>
          {attempts.map((att) => (
            <AttemptElement {...att} />
          ))}
        </Warb>
      </Card>
    </Left>
  );
};
