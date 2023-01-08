import React from "react";
import styled from "styled-components";
import NotificationIcon from "../assets/images/NotificationIcon.png"
const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 40px 0 20px 0;
`;
const Notification = styled.img`

`

const NavButt = styled.div`
  width: 206px;
  height: 47px;
  margin: 0 20px 0 0;
  background: ${(props) => (props.dark ? "#cb3e90" : "#F7F7F7")};
  color : ${(props) => (props.dark ? "#cb3e90" : "#F7F7F7")};
  border: 2px solid #cb3e90;
  box-shadow: 4px 6px 10px rgba(203, 62, 144, 0.05);
  border-radius: 8px;
`;
export const Nav = () => {
  return (
    <NavBar>
      <NavButt> color </NavButt>
      <NavButt> tray </NavButt>
      <NavButt dark={true}> any </NavButt>
      <Notification src={NotificationIcon} />
        <Notification src={NotificationIcon} />
    </NavBar>
  );
};
