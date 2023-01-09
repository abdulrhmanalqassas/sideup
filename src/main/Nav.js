import React from "react";
import styled from "styled-components";
import NotificationIcon from "../assets/images/NotificationIcon.png"
const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 2.5rem 0 1.25rem 0;
`;
const Notification = styled.img`

`

const NavButt = styled.div`
  width: 7.75rem;
  height:2.5rem;
  margin: 0 1.25rem 0 0;
  background: ${(props) => (props.dark ? "#cb3e90" : "#F7F7F7")};
  color : ${(props) => (props.dark ? "#cb3e90" : "#F7F7F7")};
  border: 0.125rem solid #cb3e90;
  box-shadow: 0.25rem 0.375rem 0.625rem rgba(203, 62, 144, 0.05);
  border-radius: 0.5rem;
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
