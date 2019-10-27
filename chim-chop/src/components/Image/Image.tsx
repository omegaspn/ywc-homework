import { Card } from "antd";
import React, { FunctionComponent } from "react";

interface ImageProps {
  src: string;
}

export const Image: FunctionComponent<ImageProps> = ({ src }) => {
  return <Card bordered={false} cover={<img alt="example" src={src} />}></Card>;
};
