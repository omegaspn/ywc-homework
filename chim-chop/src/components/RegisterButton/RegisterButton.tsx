import { Card, Row } from "antd";
import { t } from "../../i18n";
import React, { FunctionComponent } from "react";

export const RegisterButton: FunctionComponent = () => {
  const { Grid } = Card;
  return (
    <Row type="flex" align="middle" justify="center">
      <Card>
        <Grid
          hoverable
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "#213A8F"
          }}
        >
          {t.blueCardContent}
        </Grid>
      </Card>
    </Row>
  );
};
