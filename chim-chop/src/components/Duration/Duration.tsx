import React, { FunctionComponent } from "react";
import { t } from "../../i18n";
import { Row } from "antd";
import { Text, AntTitle } from "../../components";

interface DurationProps {
  duration: string;
}

export const Duration: FunctionComponent<DurationProps> = ({ duration }) => {
  return (
    <>
      <Row type="flex" justify="center">
        <Text style={{ fontFamily: "TATSanaSuksaBold", color: "#333333" }}>{t.fromDate}</Text>
      </Row>
      <Row type="flex" justify="center">
        <AntTitle
          style={{
            fontFamily: "TATSanaSuksaBold",
            color: "#E6332A",
          }}
          level={2}
        >
          {duration}
        </AntTitle>
      </Row>
    </>
  );
};
