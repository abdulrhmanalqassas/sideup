import React,{useContext} from "react";
import styled from "styled-components";
import NotificationIcon from "../assets/images/NotificationIcon.png"
import { MobNav } from "./MobNav";
import LocaleContext  from "../LocaleContext" ;
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const NavBar = styled.nav`
margin: 2.5rem 0 1.25rem 0;
`;
const Notification = styled.img`

`
const Desktop = styled.div`
display: flex;
justify-content: flex-end;
// margin: 2.5rem 0 1.25rem 0;
@media (max-width: 900px) {
  display: none;
}
`
const NavButt = styled.div`
  width: 7.75rem;
  height:2.5rem;
  display:flex;
  margin: 0 1.25rem 0 0;
  align-text:center;
  align-items:center;
  background: ${(props) => (props.dark ? "#cb3e90" : "#F7F7F7")};
  color : ${(props) => (props.dark ?"#F7F7F7" : "#cb3e90" )};
  border: 0.125rem solid #cb3e90;
  box-shadow: 0.25rem 0.375rem 0.625rem rgba(203, 62, 144, 0.05);
  border-radius: 0.5rem;
`;



export const Nav = () => {
  const { locale } = useContext(LocaleContext);
  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  const { t } = useTranslation();
 
  return (
    <NavBar>
 
      <Desktop>
      <button href="#" onClick={() => changeLocale('en')}>English</button>
              <button href="#" onClick={() => changeLocale('ar')}>العربية</button>
      <NavButt>  </NavButt>
      <NavButt> {t('order')} </NavButt>
      <NavButt dark={true}>  {t('request')} </NavButt>
      <Notification src={NotificationIcon} />
        <Notification src={NotificationIcon} />
      </Desktop>
      
    </NavBar>
  );
};
