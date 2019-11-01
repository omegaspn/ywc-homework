import React, { FunctionComponent } from "react";
import { Row, Col, Collapse, Icon } from "antd";
import { Text } from "../../components";
import { navbarItem } from "../../types";
import "./styles.css";

interface MobileHeaderProps {
  navbars: navbarItem[];
}

const MenuNavBar: FunctionComponent = () => {
  return <Icon type="menu" className="menuIcon" />;
};

export const MobileHeader: FunctionComponent<MobileHeaderProps> = ({ navbars }) => {
  const { Panel } = Collapse;

  const NavBar: FunctionComponent = () => {
    return (
      <Collapse
        bordered={false}
        expandIconPosition={"right"}
        style={{ textAlign: "right" }}
        expandIcon={() => <MenuNavBar />}
      >
        {/* panel create warning */}
        <Panel header="" key="1">
          <Row gutter={[0, 24]}>
            {Object.keys(navbars).map((navbar, id) => (
              <Col key={id}>
                <Text style={{ fontFamily: "TATSanaSuksa" }}>
                  <a
                    href={navbars[id].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgba(0,0,0,.5)" }}
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
        // justify="end"
        align="middle"
        style={{
          backgroundColor: "#fff",
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <Col span={24}>
          <img
            alt="example"
            src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"}
            style={{ height: "64px", display: "flex", padding: "8px 16px" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </Col>
        <Col span={24}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};
