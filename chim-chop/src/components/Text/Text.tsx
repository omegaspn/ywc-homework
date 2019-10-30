import React, { FunctionComponent } from "react";

interface TextProps {
  className?: string;
  style?: any;
  // any -> css properties type
  dangerouslySetInnerHTML?: { __html: string };
}

export const Text: FunctionComponent<TextProps> = props => {
  return <span {...props}>{props.children}</span>;
};
