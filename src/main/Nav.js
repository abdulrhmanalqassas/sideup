import React, { useContext } from "react";
import styled from "styled-components";
import NotificationIcon from "../assets/images/NotificationIcon.png";
import enFlag from "../assets/images/enFlag.png";



import LocaleContext from "../LocaleContext";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const NavBar = styled.nav`
  margin: 40px 0 20px 0;
`;
const Notification = styled.img``;
const Desktop = styled.div`
  display: flex;
  justify-content: flex-end;
  // margin: 40px 0 20px 0;
  @media (max-width: 56.25rem) {
    display: none;
  }
`;
const NavButt = styled.div`
  height: fit-content;
  cursor: pointer;
  // display: flex;
  padding: 0.0625rem;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  horizontal-align: middle;
  margin: 0 20px 0 0;
  align-items: center;
  background: ${(props) => (props.dark ? "#cb3e90" : "#F7F7F7")};
  color: ${(props) => (props.dark ? "#F7F7F7" : "#cb3e90")};
  border: 2px solid #cb3e90;
  box-shadow: 4px 6px 10px rgba(203, 62, 144, 0.05);
  border-radius: 8px;
`;

const Languages = styled.div`
  margin: -33.6px 0 20px 0;
  display: flex;
  flex-direction: column;
  // width: 3.75rem;
`;
const LanguageButton = styled.div`
  cursor: pointer;
`;
const LanguageIcon = styled.img`
  border-left: 0.0625rem solid #dc4097;
  padding: 0 0.625rem;
  cursor: pointer;
  filter: drop-shadow(0.25rem 0.375rem 0.625rem rgba(0, 0, 0, 0.02));
`;
const LanguageText = styled.span`
  width: 1.4375rem;
  padding: 0.3125rem 0.625rem;
  height: 1.25rem;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.125rem;
`;

export const Nav = () => {
  const { locale } = useContext(LocaleContext);
  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  const { t } = useTranslation();

  return (
    <NavBar>
      <Desktop>
        <NavButt>{t("request")} </NavButt>
        <NavButt> {t("order")} </NavButt>
        <NavButt dark={true}> {t("request")} </NavButt>
        <Notification src={NotificationIcon} />
        <Notification src={NotificationIcon} />
        <Languages>
          <LanguageButton href="#" onClick={() => changeLocale("en")}>
            <LanguageText>En</LanguageText>
            <LanguageIcon src={enFlag} />
          </LanguageButton>
          <LanguageButton href="#" onClick={() => changeLocale("ar")}>
            <LanguageText>Ar</LanguageText>
            <LanguageIcon src={enFlag} />
          </LanguageButton>
        </Languages>
      </Desktop>
    </NavBar>
  );
};
