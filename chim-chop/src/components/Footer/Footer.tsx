import React, { FunctionComponent } from "react";
import { Row, Col } from "antd";
import { Image, AntText } from "../../components";
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
      <Row gutter={[0, 8]}>
        <Col>
          <AntText>
            <span
              style={{
                fontFamily: "TATSanaSuksa",
                color: "#E6332A",
              }}
              dangerouslySetInnerHTML={{ __html: head }}
            />
          </AntText>
        </Col>
        <Col>
          <AntText>
            <span
              style={{
                fontFamily: "TATSanaSuksa",
              }}
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          </AntText>
        </Col>
      </Row>
    );
  };
  return (
    <Row>
      <Row justify="space-around" type="flex" style={{ padding: "24px 50px" }} gutter={[0, 16]}>
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
          padding: "15px 50px",
        }}
        gutter={[0, 16]}
      >
        {/* render first detail */}
        <Col span={4} xs={24} md={4} lg={4}>
          <AntText>
            <span style={{ color: "#fff", fontFamily: "TATSanaSuksaBold" }}>
              {t.footerNav.detail}
            </span>
          </AntText>
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
                // style={{ paddingTop: "10px", paddingBottom: "10px" }}
              >
                <AntText>
                  <a
                    key={id}
                    href={navbars[id - 1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", fontFamily: "TATSanaSuksaBold" }}
                  >
                    {detail}
                  </a>
                </AntText>
              </Col>
            ),
        )}
      </Row>
    </Row>
  );
};
