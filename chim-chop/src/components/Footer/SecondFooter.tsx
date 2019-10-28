import React, { FunctionComponent } from "react";
import { Row, Col } from "antd";
import { t } from "../../i18n";

export const SecondFooter: FunctionComponent = () => {
  return (
    <Row
      justify="space-around"
      type="flex"
      style={{
        backgroundColor: "#213A8F",
        position: "absolute",
        left: "0",
        right: "0",
        paddingLeft: "50px",
        paddingRight: "50px"
      }}
    >
      {Object.values(t.footerNav).map((k, id) => (
        <Col
          key={id}
          span={4}
          xs={24}
          md={4}
          lg={4}
          style={{ color: "#fff", paddingTop: "10px", paddingBottom: "10px" }}
        >
          <div key={id}>{k}</div>
        </Col>
      ))}
    </Row>
  );
};
