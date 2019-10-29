import { Row, Button } from "antd";
import { t } from "../../i18n";
import React, { FunctionComponent } from "react";
import "./styles.css";

export const RegisterButton: FunctionComponent = () => {
  return (
    <Row
      type="flex"
      align="middle"
      justify="center"
      style={{ padding: "0 15px" }}
    >
      <Button
        type="primary"
        className="registerButton"
        style={{
          backgroundColor: "#213A8F",
          height: "fit-content",
          width: "100%"
        }}
        href="https://regist.ชิมช้อปใช้.com/Register/"
      >
        <div dangerouslySetInnerHTML={{ __html: t.blueCardContent }}></div>
      </Button>
    </Row>
  );
};
