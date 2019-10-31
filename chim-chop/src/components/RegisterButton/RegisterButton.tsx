import React, { FunctionComponent } from "react";
import { Row, Button } from "antd";
import { t } from "../../i18n";
import { Text } from "../../components";
import "./styles.css";

export const RegisterButton: FunctionComponent = () => {
  return (
    <Row type="flex" justify="center" style={{ padding: "0 15px" }}>
      <Button
        type="primary"
        className="registerButton"
        style={{
          backgroundColor: "#213A8F",
          height: "fit-content",
          width: "100%",
          boxShadow: "0 15px 30px 0 rgba(28, 78, 132, 0.4)",
          whiteSpace: "normal",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 0",
        }}
        href="https://regist.ชิมช้อปใช้.com/Register/"
      >
        <Text
          style={{ fontFamily: "TATSanaSuksaBold", fontSize: "18px" }}
          dangerouslySetInnerHTML={{ __html: t.blueCardContent }}
        ></Text>
      </Button>
    </Row>
  );
};
