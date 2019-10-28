import React, { FunctionComponent } from "react";
import { Row, Col, Icon } from "antd";
import "./styles.css";

export const MobileHeader: FunctionComponent = () => {
  return (
    <Row type="flex" justify="space-between" align="middle">
      <Col>
        <img
          alt="example"
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"}
          style={{ width: "25%", height: "auto" }}
        />
      </Col>
      <Col style={{ paddingRight: "20px" }}>
        <Icon className="hamburger" type="menu" />
      </Col>
    </Row>
  );
};
