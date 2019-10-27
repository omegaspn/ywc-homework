import React, { FunctionComponent } from "react";
import { Row, Col } from "antd";
import { Image } from "../../components";
import { t } from "../../i18n";

interface RenderFooterDetailProps {
  head: string;
  detail: string;
}

export const Footer: FunctionComponent = () => {
  console.log("length", Object.keys(t.footer).length);

  const RenderFooterDetail: FunctionComponent<RenderFooterDetailProps> = ({
    head,
    detail
  }) => {
    return (
      <>
        <div
          style={{
            fontSize: "18px",
            color: "#E6332A"
          }}
        >
          {head}
        </div>
        <div
          style={{
            fontSize: "18px"
          }}
        >
          {detail}
        </div>
      </>
    );
  };

  return (
    <>
      <Row justify="space-around" type="flex">
        <Col span={4}>
          <Image
            src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"}
          ></Image>
        </Col>
        <Col span={4}>
          <RenderFooterDetail
            head={t.footer.citizenRegisInfo.head}
            detail={t.footer.citizenRegisInfo.detail}
          ></RenderFooterDetail>
        </Col>
        <Col span={4}>
          <RenderFooterDetail
            head={t.footer.businessRegisInfo.head}
            detail={t.footer.businessRegisInfo.detail}
          ></RenderFooterDetail>
        </Col>
        <Col span={4}>
          <RenderFooterDetail
            head={t.footer.moreInfo.head}
            detail={t.footer.moreInfo.detail}
          ></RenderFooterDetail>
        </Col>
      </Row>
      <Row
        justify="space-around"
        type="flex"
        style={{
          backgroundColor: "#213A8F",
          position: "absolute",
          width: "100%"
        }}
      >
        <Col span={4} style={{ color: "#fff" }}>
          {t.footerNav.detail}
        </Col>
        <Col span={4} style={{ color: "#fff" }}>
          {t.footerNav.detail2}
        </Col>
        <Col span={4} style={{ color: "#fff" }}>
          {t.footerNav.detail3}
        </Col>
        <Col span={4} style={{ color: "#fff" }}>
          {t.footerNav.detail4}
        </Col>
      </Row>
    </>
  );
};
