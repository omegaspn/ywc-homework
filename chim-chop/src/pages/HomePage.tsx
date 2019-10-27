import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { Menu, Row, Col, Layout } from "antd";
import {
  Image,
  Duration,
  RegisterButton,
  Footer as PageFooter
} from "../components";
import { t } from "../i18n";

interface navbarItem {
  label?: string;
  href?: string;
}

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

  const createDetail = () => {
    return { __html: API.detail };
  };

  const createCondition = () => {
    return { __html: API.condition };
  };

  return (
    <>
      <Layout>
        <Header className="header">
          {API.navbarItems && API.navbarItems.length === 3 && (
            <Menu selectable mode="horizontal">
              <Col span={8}>
                <Menu.Item key="alipay">
                  <a
                    href={API.navbarItems[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {API.navbarItems[0].label}
                  </a>
                </Menu.Item>
              </Col>
              <Col span={8}>
                <Menu.Item key="wefw">
                  <a
                    href={API.navbarItems[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {API.navbarItems[1].label}
                  </a>
                </Menu.Item>
              </Col>
              <Col span={8}>
                <Menu.Item key="azz">
                  <a
                    href={API.navbarItems[2].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {API.navbarItems[2].label}
                  </a>
                </Menu.Item>
              </Col>
            </Menu>
          )}
        </Header>
        <Layout>
          <Content>
            <Row justify="space-around" type="flex">
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
              <div dangerouslySetInnerHTML={createDetail()} />
            </Row>
            <Row type="flex" justify="center">
              <b>{t.conditionTitle}</b>
            </Row>
            <Row type="flex" justify="center">
              <div dangerouslySetInnerHTML={createCondition()} />
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
                ></Image>
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/CGD.png"
                  }
                ></Image>
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png"
                  }
                ></Image>
              </Col>
              <Col span={4}>
                <Image
                  src={
                    "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png"
                  }
                ></Image>
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
