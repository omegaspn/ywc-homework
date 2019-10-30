import { t } from "../../i18n";
import { Row } from "antd";
import React, { FunctionComponent } from "react";

interface DurationProps {
  duration: string;
}

export const Duration: FunctionComponent<DurationProps> = ({ duration }) => {
  return (
    <>
      <Row type="flex" justify="center">
        <div
          style={{
            fontSize: "16px",
          }}
        >
          {t.fromDate}
        </div>
      </Row>
      <Row type="flex" justify="center">
        <div
          style={{
            fontSize: "32px",
            color: "#E6332A",
          }}
        >
          {duration}
        </div>
      </Row>
    </>
  );
};
