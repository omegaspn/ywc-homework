import { Col } from "antd";
import React, { FunctionComponent } from "react";

interface ImageProps {
  imgClassName?: string;
  src: string;
  span: number;
  xsSpan: number;
  style?: React.CSSProperties;
}

export const Image: FunctionComponent<ImageProps> = ({
  imgClassName,
  src,
  span,
  xsSpan,
  style,
}) => {
  return (
    <Col span={span} xs={xsSpan} md={span} lg={span}>
      <img className={imgClassName} alt="example" src={src} style={style} />
    </Col>
  );
};
