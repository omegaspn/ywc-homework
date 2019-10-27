import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Layout } from "antd";
import { navbarItem } from "../types";
import {
  Header as PageHeader,
  Image,
  Duration,
  RegisterButton,
  Footer as PageFooter
} from "../components";
import { t } from "../i18n";

interface PanJS {
  navbarItems?: navbarItem[];
  duration?: string;
  detail?: any;
  condition?: any;
}

const init = {
  navbarItems: [{ label: "", href: "" }],
  duration: "",
  detail: "",
  condition: ""
};

const HomePage: FunctionComponent = () => {
  const [API, setAPI] = useState<PanJS>(init);
  const { Header, Sider, Content, Footer } = Layout;

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`https://panjs.com/ywc.json`);
      setAPI(response.data);
    } catch (error) {
      //do nothing
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Layout>
        <Header
          className="header"
          style={{ height: "fit-content", backgroundColor: "#fff" }}
        >
          {API.navbarItems && API.navbarItems.length === 3 && (
            <PageHeader navbars={API.navbarItems} />
          )}
        </Header>
        <Layout>
          <Content>
            <Row justify="space-around" type="flex">
              <Col>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/banner.png"
                  }
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    width: "fit-content"
                  }}
                ></Image>
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-left.png"
                  }
                ></Image>
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-center.png"
                  }
                ></Image>
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-right.png"
                  }
                ></Image>
              </Col>
            </Row>
            <Duration duration={API.duration || ""} />
            <RegisterButton />
            <Row type="flex" justify="center">
              <div
                style={{
                  fontSize: "32px",
                  color: "#E6332A"
                }}
              >
                {t.highLightText}
              </div>
            </Row>
            <Row type="flex" justify="center">
              <div dangerouslySetInnerHTML={{ __html: API.detail }} />
            </Row>
            <Row type="flex" justify="center">
              <b>{t.conditionTitle}</b>
            </Row>
            <Row type="flex" justify="center">
              <div dangerouslySetInnerHTML={{ __html: API.condition }} />
            </Row>
            <Row>
              <Col span={8}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_KTB_SQ.png"
                  }
                ></Image>
              </Col>
              <Col span={8}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_CGD_Sq.png"
                  }
                ></Image>
              </Col>
              <Col span={8}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_TAT_Hotline_Sq.png"
                  }
                ></Image>
              </Col>
            </Row>
            <Row justify="space-around" type="flex">
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png"
                  }
                ></Image>
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/FPO.png"
                  }
                />
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/CGD.png"
                  }
                />
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png"
                  }
                />
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png"
                  }
                />
              </Col>
            </Row>
          </Content>
          <Sider collapsible collapsedWidth={0} theme="light">
            Sider
          </Sider>
        </Layout>
        <Footer>
          <PageFooter />
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
