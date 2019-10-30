import React, { FunctionComponent } from "react";

interface TextProps {
  style?: any;
  // css properties
  dangerouslySetInnerHTML?: { __html: string };
}

export const Text: FunctionComponent<TextProps> = props => {
  return <span {...props}>{props.children}</span>;
};
