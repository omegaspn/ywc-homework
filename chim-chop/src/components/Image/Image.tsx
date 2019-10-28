import { Col } from "antd";
import React, { FunctionComponent } from "react";

interface ImageProps {
  src: string;
  span: number;
  xsSpan: number;
  style?: React.CSSProperties;
}

export const Image: FunctionComponent<ImageProps> = ({
  src,
  span,
  xsSpan,
  style
}) => {
  return (
    <Col span={span} xs={xsSpan} md={span} lg={span}>
      <img alt="example" src={src} style={style} />
    </Col>
  );
};
