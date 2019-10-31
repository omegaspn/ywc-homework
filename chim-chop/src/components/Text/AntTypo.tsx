import React, { FunctionComponent, CSSProperties } from "react";
import { Typography } from "antd";

interface AntTitleProps {
  level?: 1 | 2 | 3 | 4;
  style?: CSSProperties;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

export const AntTitle: FunctionComponent<AntTitleProps> = props => {
  const { Title } = Typography;
  return (
    <Title {...props} level={props.level}>
      {props.children}
    </Title>
  );
};

export const AntText: FunctionComponent = props => {
  const { Text } = Typography;
  return <Text {...props}>{props.children}</Text>;
};
