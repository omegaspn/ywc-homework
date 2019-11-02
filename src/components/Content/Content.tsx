import React, { FunctionComponent } from "react";
import { t } from "../../i18n";
import { Row, Col } from "antd";
import { Image, Duration, RegisterButton, Text } from "../../components";
import "./styles.css";

interface ContentProps {
  duration?: string;
  detail?: string;
  condition?: string;
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
      url: "https://www.newcb.ktb.co.th",
    },
    {
      src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png",
      url: "https://www.mots.go.th",
    },
    {
      src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png",
      url: "https://thai.tourismthailand.org",
    },
  ];

  const Banner: FunctionComponent = () => (
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
  );

  const MainContent: FunctionComponent = () => {
    return (
      <Row className="container" gutter={[0, 16]} style={{ margin: "70px 0" }}>
        <Col>
          <Text
            className="mainContentRedText"
            style={{
              color: "#E6332A",
              fontFamily: "TATSanaSuksaBold",
              fontSize: "24px",
            }}
          >
            {t.highLightText}
          </Text>
        </Col>
        <Col>
          {detail && (
            <span
              className="mainContentFont"
              style={{ fontFamily: "TATSanaSuksa", color: "#333333" }}
              dangerouslySetInnerHTML={{ __html: detail }}
            ></span>
          )}
        </Col>
        <Col>
          <Row gutter={[0, 8]}>
            <Col>
              <span
                className="mainContentFont"
                style={{ fontFamily: "TATSanaSuksaBold", color: "#333333" }}
                dangerouslySetInnerHTML={{ __html: t.conditionTitle }}
              />
            </Col>
            <Col>
              {condition && (
                <span
                  className="mainContentFont"
                  style={{ fontFamily: "TATSanaSuksa", color: "#333333" }}
                  dangerouslySetInnerHTML={{ __html: condition }}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Banner />
      <Row className="registerBox" style={{ margin: "26px 0" }}>
        <Duration duration={duration || ""} />
        <RegisterButton />
      </Row>
      <MainContent />
      <Row
        className="container"
        style={{ textAlign: "center", margin: "70px 0" }}
        gutter={[32, 32]}
      >
        {thirdPartyContact.map((thirdPartyPhone, id) => (
          <a key={id} href={`tel:${thirdPartyPhone.phone}`}>
            <Image src={thirdPartyPhone.url} span={8} xsSpan={24} style={{ width: "100%" }}></Image>
          </a>
        ))}
      </Row>
      <Row
        className="container"
        style={{ textAlign: "center", margin: "40px 0" }}
        gutter={[28, 28]}
      >
        <Col className="thirdPartyContainer">
          {thirdPartyURL.map((object, id) => (
            <a key={id} href={object.url} target="_blank" rel="noopener noreferrer">
              <Image src={object.src} span={4} xsSpan={8}></Image>
            </a>
          ))}
        </Col>
      </Row>
    </>
  );
};
