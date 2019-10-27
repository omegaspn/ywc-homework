import { Card } from "antd";
import React, { FunctionComponent } from "react";

interface ImageProps {
  src: string;
  style?: React.CSSProperties;
}

export const Image: FunctionComponent<ImageProps> = ({ src, style }) => {
  return (
    <Card
      bordered={false}
      cover={<img alt="example" src={src} style={style} />}
    ></Card>
  );
};
