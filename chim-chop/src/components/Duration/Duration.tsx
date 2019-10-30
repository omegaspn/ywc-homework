import React, { FunctionComponent } from "react";
import { t } from "../../i18n";
import { Row } from "antd";
import { Text } from "../../components";

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
        <Text style={{ fontFamily: "TATSanaSuksaBold", color: "#E6332A" }}>{duration}</Text>
      </Row>
    </>
  );
};
