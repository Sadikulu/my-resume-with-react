import React from "react";
import Avatar from "./avatar/avatar";
import MobileMenu from "./mobile-menu/mobile-menu";
import "./header.css";
import Name from "./name/name";
import SocialIcons from "./social-icons/social-icons";
import MainNav from "./main-navbar/main-nav";
import Copyright from "./copyright/copyright";
const Header = () => {
  return (
    <header className="header pull-left">
      <MobileMenu />
      <Avatar />
      <Name />
      <SocialIcons />
      <MainNav />
      <Copyright />
    </header>
  );
};
export default Header;
