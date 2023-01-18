import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import { SideNave } from "./main/SideNav";
import { Nav } from "./main/Nav";
import { Dash } from "./Dash/Dash";
import { Character } from "./main/Character";
import { MobNav } from "./main/MobNav";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
const items = [
  { name: "order" },
  { name: "dashboard" },
  { name: "net" },
  { name: "dashboard" },
  { name: "My Customers" },
  { name: "My Customers" },
];

const Pane = styled.div`
  background: #fff;
  height: 100%;
  width: 11.5625rem;
  position: fixed;
  z-index: 1;
  top: 0;
  ${(props) => (props.side ? "left : 11.5625rem" : "right:  11.5625rem ")}
  overflow-x: hidden;
  padding-top: 1.25rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Main = styled.div`
  margin: ${(props) => (props.side ? "0 0 0 11.5625rem" : "0 11.5625rem 0 0")};
  @media (max-width: 900px) {
    // margin-left: 0.3125rem;
    margin: 0;
    padding: 0rem 0rem;
  }
  font-size: 1.75rem;
  padding: 0rem 0.625rem;
`;
function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Helmet
        htmlAttributes={{
          lang: locale,
          dir: locale === "en" ? "ltr" : "rtl",
        }}
      />
      {console.log(">>>>llllll>>>>>>>", locale === "en")}
      <MobNav></MobNav>
      <Pane side={locale === "en"}>
        <SideNave items={items}></SideNave>
      </Pane>
      <Main side={locale === "en"}>
        <Nav></Nav>
        <Character />
        <Dash></Dash>
      </Main>
    </LocaleContext.Provider>
  );
}

export default App;
