import React, { FunctionComponent } from "react";
import { t } from "../../i18n";
import { Row } from "antd";
import { AntTitle, Text } from "../../components";
import "./styles.css";

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
        <Text className="durationText">{duration}</Text>
      </Row>
    </>
  );
};
