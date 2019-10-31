import React, { FunctionComponent } from "react";
import { Menu } from "antd";
import { Text } from "../../components";
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
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 2,
          height: "58px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          boxShadow: "0 15px 30px 0 rgba(28, 78, 132, 0.4)",
        }}
      >
        {Array.from(Array(3).keys()).map((x, id) => (
          <Item key={id}>
            <Text style={{ fontFamily: "TATSanaChon" }}>
              <a
                href={navbars[id].href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#333333" }}
              >
                {navbars[id].label}
              </a>
            </Text>
          </Item>
        ))}
      </Menu>
    </>
  );
};
