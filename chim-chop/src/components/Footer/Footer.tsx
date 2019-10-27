import React, { FunctionComponent } from "react";
import { t } from "../../i18n";

export const Footer: FunctionComponent = () => {
  console.log("length", Object.keys(t.footer).length);

  return <>{t.footer.citizenRegisInfo.detail}</>;
};
