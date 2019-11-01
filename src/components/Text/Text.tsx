import React, { FunctionComponent, CSSProperties } from "react";

interface TextProps {
  className?: string;
  style?: CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
}

export const Text: FunctionComponent<TextProps> = props => {
  return <span {...props}>{props.children}</span>;
};
