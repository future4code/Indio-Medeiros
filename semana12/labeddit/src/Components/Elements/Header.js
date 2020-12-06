import React from "react";
import { ButtonLogout, DivHeader } from "./styledHeader";

export default function Header() {
  const logoutEddit = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <DivHeader>
      <ButtonLogout onClick={logoutEddit}>LOGOUT</ButtonLogout>
    </DivHeader>
  );
}
