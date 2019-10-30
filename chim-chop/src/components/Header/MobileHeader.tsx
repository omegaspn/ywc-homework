import React, { FunctionComponent } from "react";
import { Row, Col, Collapse, Icon } from "antd";
import { Text } from "../../components";
import { navbarItem } from "../../types";
import "./styles.css";

interface MobileHeaderProps {
  navbars: navbarItem[];
}

export const MobileHeader: FunctionComponent<MobileHeaderProps> = ({ navbars }) => {
  const { Panel } = Collapse;

  const NavBar: FunctionComponent = () => {
    return (
      <Collapse bordered={false} expandIconPosition={"right"} style={{ textAlign: "right" }}>
        <Panel
          header=""
          key="1"
          // extra={
          //   <Icon
          //     className="hamburger"
          //     type="menu"
          //     style={{ paddingRight: "20px", paddingTop: "20px" }}
          //   />
          // }
        >
          <Row>
            {Object.keys(navbars).map((navbar, id) => (
              <Col key={id}>
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
              </Col>
            ))}
          </Row>
        </Panel>
      </Collapse>
    );
  };

  return (
    <>
      <Row
        type="flex"
        justify="end"
        align="middle"
        style={{
          backgroundColor: "#fff",
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 3,
        }}
      >
        <Col style={{ paddingLeft: "20px" }} span={24}>
          <img
            alt="example"
            src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"}
            style={{ width: "auto", height: "48px" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </Col>
        <Col>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};
