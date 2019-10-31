import React, { FunctionComponent } from "react";
import { t } from "../../i18n";
import { Row } from "antd";
import { AntTitle } from "../../components";

interface DurationProps {
  duration: string;
}

export const Duration: FunctionComponent<DurationProps> = ({ duration }) => {
  return (
    <>
      <Row type="flex" justify="center">
        <AntTitle style={{ fontFamily: "TATSanaSuksaBold", color: "#333333" }} level={4}>
          {t.fromDate}
        </AntTitle>
      </Row>
      <Row type="flex" justify="center">
        <AntTitle
          style={{
            fontFamily: "TATSanaSuksaBold",
            color: "#E6332A",
            textAlign: "center",
          }}
          level={1}
        >
          {duration}
        </AntTitle>
      </Row>
    </>
  );
};
