import { Row, Button } from "antd";
import { t } from "../../i18n";
import React, { FunctionComponent } from "react";

export const RegisterButton: FunctionComponent = () => {
  return (
    <Row type="flex" align="middle" justify="center">
      <Button
        type="primary"
        style={{ backgroundColor: "#213A8F" }}
        href="https://regist.ชิมช้อปใช้.com/Register/"
      >
        {t.blueCardContent}
      </Button>
    </Row>
  );
};
