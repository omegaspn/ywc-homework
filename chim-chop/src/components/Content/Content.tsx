import React, { FunctionComponent } from "react";
import { t } from "../../i18n";
import { Row, Col } from "antd";
import { Image, Text, Duration, RegisterButton } from "../../components";
import "./styles.css";

interface ContentProps {
  duration?: string;
  detail?: any;
  condition?: any;
}

export const Content: FunctionComponent<ContentProps> = ({ duration, detail, condition }) => {
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
          }}
        >
          <img
            alt="example"
            src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/banner.png"}
            style={{ display: "inline", width: "100%", height: "100%", padding: "30px 0" }}
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
        <div
          style={{
            fontSize: "32px",
            color: "#E6332A",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Text className="font-highlight" style={{ fontFamily: "TATSanaSuksaBold" }}>
            {t.highLightText}
          </Text>
        </div>
        <Text
          style={{ fontFamily: "TATSanaSuksa" }}
          dangerouslySetInnerHTML={{ __html: detail }}
        ></Text>
        <div />
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Text style={{ fontFamily: "TATSanaSuksaBold" }}>{t.conditionTitle}</Text>
        </div>
        <Text
          style={{ fontFamily: "TATSanaSuksa" }}
          dangerouslySetInnerHTML={{ __html: condition }}
        ></Text>
      </Row>

      <Row style={{ textAlign: "center" }}>
        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_KTB_SQ.png"}
          span={8}
          xsSpan={24}
          style={{ width: "100%" }}
        ></Image>

        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_CGD_Sq.png"}
          span={8}
          xsSpan={24}
          style={{ width: "100%" }}
        ></Image>

        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_TAT_Hotline_Sq.png"}
          span={8}
          xsSpan={24}
          style={{ width: "100%" }}
        ></Image>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png"}
          span={4}
          xsSpan={8}
          style={{ width: "102px" }}
        ></Image>

        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/FPO.png"}
          span={4}
          xsSpan={8}
          style={{ width: "102px" }}
        />

        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/CGD.png"}
          span={4}
          xsSpan={8}
          style={{ width: "102px" }}
        />

        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png"}
          span={4}
          xsSpan={8}
          style={{ width: "102px" }}
        />

        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png"}
          span={4}
          xsSpan={8}
          style={{ width: "102px" }}
        />

        <Image
          src={"https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/Krungthai.png"}
          span={4}
          xsSpan={8}
          style={{ width: "102px" }}
        />
      </Row>
    </>
  );
};
