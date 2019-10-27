import React, { FunctionComponent } from "react";
import { Menu } from "antd";
import { navbarItem } from "../../types";

interface HeaderProps {
  navbars: navbarItem[];
}

export const Header: FunctionComponent<HeaderProps> = ({ navbars }) => {
  const { Item } = Menu;

  return (
    <>
      <Menu
        selectable
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "none"
        }}
      >
        <Item key="register">
          <a href={navbars[0].href} target="_blank" rel="noopener noreferrer">
            {navbars[0].label}
          </a>
        </Item>
        <Item key="process">
          <a href={navbars[1].href} target="_blank" rel="noopener noreferrer">
            {navbars[1].label}
          </a>
        </Item>
        <Item key="shop">
          <a href={navbars[2].href} target="_blank" rel="noopener noreferrer">
            {navbars[2].label}
          </a>
        </Item>
      </Menu>
    </>
  );
};
