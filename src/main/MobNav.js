import React from "react";
import styled from "styled-components";
import NotificationIcon from "../assets/images/NotificationIcon.png";
import SideupLogo from "../assets/images/SideupLogo.png";

const Notification = styled.img`
width: 40px;
height: 52px;`;

const BurgerMenu = styled.div`
  cursor: pointer;
//   font-weight: 100;
//   z-index: 5;
`;

const BurgerBar = styled.div`
  width: 2em;
  height: 0.1em;
  background-color: rgb(0, 183, 255);
  border-radius: 0.5em;
  margin-top: 8px;
  z-index: 99;
`;
const MobNavLayout = styled.nav`
@media (min-width: 900px) {
    display: none;
  
  }
padding: 0.3rem;
// position: absolute;
display: flex;
justify-content: space-between;
align-items:center;
width: 100%;
height: 92px;
left: 0px;
top: 0px;
background: #FFFFFF;
box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.15);
`;
const Logo = styled.img`
width: 75px;
height: 27px;
//   margin-top: 2.625rem;
//   margin-bottom: 1.5rem;
  align-self: center;
`;

export const MobNav = () => {
  return (
    <MobNavLayout>
      <Notification src={NotificationIcon} />
      <Logo src={SideupLogo} />
      <BurgerMenu>
        <BurgerBar/>
        <BurgerBar/>
        <BurgerBar/>
      </BurgerMenu>
    </MobNavLayout>
  );
};
