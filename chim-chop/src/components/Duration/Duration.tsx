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
        <Text style={{ fontFamily: "TATSanaSuksaBold" }}>{t.fromDate}</Text>
      </Row>
      <Row type="flex" justify="center">
        <AntTitle
          style={{
            color: "#E6332A",
            fontFamily: "TATSanaSuksaBold",
          }}
          level={3}
        >
          {duration}
        </AntTitle>
      </Row>
    </>
  );
};
