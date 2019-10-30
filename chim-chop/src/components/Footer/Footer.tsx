import React, { FunctionComponent } from "react";
import { Row, Col } from "antd";
import { Image, Text } from "../../components";
import { t } from "../../i18n";
import { navbarItem } from "../../types";

interface RenderFooterDetailProps {
  head: string;
  detail: string;
}

interface FooterProps {
  navbars: navbarItem[];
}

export const Footer: FunctionComponent<FooterProps> = ({ navbars }) => {
  const RenderFooterDetail: FunctionComponent<RenderFooterDetailProps> = ({ head, detail }) => {
    return (
      <Row>
        <Col>
          <Text
            style={{
              fontFamily: "TATSanaSuksa",
              fontSize: "18px",
              color: "#E6332A",
              padding: "15px 0 10px 0",
            }}
            dangerouslySetInnerHTML={{ __html: head }}
          ></Text>
        </Col>
        <Col>
          <Text
            style={{
              fontFamily: "TATSanaSuksa",
              fontSize: "18px",
            }}
            dangerouslySetInnerHTML={{ __html: detail }}
          ></Text>
        </Col>
      </Row>
    );
  };

  return (
    <Row>
      <Row justify="space-around" type="flex" style={{ padding: "24px 50px" }}>
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
      <Row
        justify="space-around"
        type="flex"
        style={{
          backgroundColor: "#213A8F",
          position: "absolute",
          left: "0",
          right: "0",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        {/* render first detail */}
        <Col span={4} xs={24} md={4} lg={4} style={{ paddingTop: "10px", paddingBottom: "10px", color: "#fff" }}>
          <Text style={{ fontFamily: "TATSanaSuksaBold" }}>{t.footerNav.detail}</Text>
        </Col>

        {/* render last 3 details with href */}
        {Object.values(t.footerNav).map(
          (detail, id) =>
            id !== 0 && (
              <Col
                key={id}
                span={4}
                xs={24}
                md={4}
                lg={4}
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
              >
                <Text style={{ fontFamily: "TATSanaSuksaBold" }}>
                  <a
                    key={id}
                    href={navbars[id - 1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff" }}
                  >
                    {detail}
                  </a>
                </Text>
              </Col>
            ),
        )}
      </Row>
    </Row>
  );
};
