import React, { FunctionComponent } from "react";
import { Row, Col } from "antd";
import { Image } from "../../components";
import { t } from "../../i18n";

interface RenderFooterDetailProps {
  head: string;
  detail: string;
}

export const Footer: FunctionComponent = () => {
  const RenderFooterDetail: FunctionComponent<RenderFooterDetailProps> = ({
    head,
    detail
  }) => {
    return (
      <>
        <div
          style={{
            fontSize: "18px",
            color: "#E6332A",
            padding: "15px 0 10px 0"
          }}
          dangerouslySetInnerHTML={{ __html: head }}
        />

        <div
          style={{
            fontSize: "18px"
          }}
          dangerouslySetInnerHTML={{ __html: detail }}
        />
      </>
    );
  };

  return (
    <>
      <Row justify="space-around" type="flex">
        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"}
          span={4}
          xsSpan={24}
          style={{ width: "108px" }}
        ></Image>
        <Col span={4} xs={24} md={4} lg={4}>
          <RenderFooterDetail
            head={t.footer.citizenRegisInfo.head}
            detail={t.footer.citizenRegisInfo.detail}
          ></RenderFooterDetail>
        </Col>
        <Col span={4} xs={24} md={4} lg={4}>
          <RenderFooterDetail
            head={t.footer.businessRegisInfo.head}
            detail={t.footer.businessRegisInfo.detail}
          ></RenderFooterDetail>
        </Col>
        <Col span={4} xs={24} md={4} lg={4}>
          <RenderFooterDetail
            head={t.footer.moreInfo.head}
            detail={t.footer.moreInfo.detail}
          ></RenderFooterDetail>
        </Col>
      </Row>
    </>
  );
};
