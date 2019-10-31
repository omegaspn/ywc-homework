import React, { FunctionComponent } from "react";
import { t } from "../../i18n";
import { Row, Col } from "antd";
import { Image, Text, Duration, RegisterButton, AntText, AntTitle } from "../../components";
import "./styles.css";

interface ContentProps {
  duration?: string;
  detail?: any;
  condition?: any;
}

export const Content: FunctionComponent<ContentProps> = ({ duration, detail, condition }) => {
  const thirdPartyContact = [
    { url: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_KTB_SQ.png", phone: "021111144" },
    { url: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_CGD_Sq.png", phone: "022706400" },
    { url: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_TAT_Hotline_Sq.png", phone: "1672" },
  ];

  const thirdPartyURL = [
    {
      src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png",
      url: "https://www.mof.go.th/th/home",
    },
    {
      src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/FPO.png",
      url: "http://www.fpo.go.th",
    },
    {
      src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/CGD.png",
      url: "https://www.cgd.go.th",
    },
    {
      src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/Krungthai.png",
      url: "https://thai.tourismthailand.org",
    },
    {
      src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png",
      url: "https://www.newcb.ktb.co.th",
    },
    {
      src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png",
      url: "https://www.mots.go.th",
    },
  ];

  return (
    <>
      <Row type="flex" justify="space-around" align="middle">
        <Col
          className="banner"
          span={8}
          style={{
            backgroundImage:
              "url(https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-left.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Col>
        <Col
          className="banner"
          span={8}
          style={{
            backgroundImage:
              "url(https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-center.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt="example"
            src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/banner.png"}
            style={{ display: "inline" }}
          />
        </Col>

        <Col
          className="banner"
          span={8}
          style={{
            backgroundImage:
              "url(https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-right.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Col>
      </Row>
      <Row className="registerBox" style={{ margin: "26px 0" }}>
        <Duration duration={duration || ""} />
        <RegisterButton />
      </Row>
      <Row className="mainText">
        <AntTitle
          style={{
            color: "#E6332A",
            paddingTop: "20px",
            paddingBottom: "20px",
            fontFamily: "TATSanaSuksaBold",
          }}
          level={2}
        >
          {t.highLightText}
        </AntTitle>

        <AntText>
          <span
            style={{ fontFamily: "TATSanaSuksa" }}
            dangerouslySetInnerHTML={{ __html: detail }}
          ></span>
        </AntText>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Text style={{ fontFamily: "TATSanaSuksaBold" }}>{t.conditionTitle}</Text>
        </div>

        <AntText>
          <span
            style={{ fontFamily: "TATSanaSuksa" }}
            dangerouslySetInnerHTML={{ __html: condition }}
          ></span>
        </AntText>
      </Row>

      <Row style={{ textAlign: "center" }}>
        {thirdPartyContact.map((thirdPartyPhone, id) => (
          <a key={id} href={`tel:${thirdPartyPhone.phone}`}>
            <Image src={thirdPartyPhone.url} span={8} xsSpan={24} style={{ width: "100%" }}></Image>
          </a>
        ))}
      </Row>
      <Row className="thirdPartyContainer" style={{ textAlign: "center" }}>
        {thirdPartyURL.map((object, id) => (
          <a key={id} href={object.url} target="_blank" rel="noopener noreferrer">
            <Image src={object.src} span={4} xsSpan={8} style={{ width: "102px" }}></Image>
          </a>
        ))}
      </Row>
    </>
  );
};
