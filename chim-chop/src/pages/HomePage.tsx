import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "antd";
import { navbarItem } from "../types";
import {
  Header as PageHeader,
  MobileHeader,
  Content as PageContent,
  Footer as PageFooter,
} from "../components";

interface APIModel {
  navbarItems?: navbarItem[];
  duration?: string;
  detail?: any;
  condition?: any;
}

const init = {
  navbarItems: [],
  duration: "",
  detail: "",
  condition: "",
};

const HomePage: FunctionComponent = () => {
  const [API, setAPI] = useState<APIModel>(init);
  const [isMobile, setIsMobile] = useState(false);

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
          style={{
            height: "fit-content",
            padding: "0 20px 0 20px",
          }}
        >
          {API.navbarItems && API.navbarItems.length === 3 && !isMobile && (
            <PageHeader navbars={API.navbarItems} />
          )}
          {API.navbarItems && API.navbarItems.length === 3 && isMobile && (
            <MobileHeader navbars={API.navbarItems} />
          )}
        </Header>
        <Layout>
          <Content className="content" style={{ backgroundColor: "#fff", paddingTop: "47px" }}>
            <PageContent duration={API.duration} detail={API.detail} condition={API.condition} />
          </Content>

          <Sider
            collapsed
            collapsedWidth={0}
            breakpoint="md"
            onBreakpoint={broken => {
              setIsMobile(broken);
            }}
            zeroWidthTriggerStyle={{ top: "0", right: "0" }}
            trigger={null}
          />
        </Layout>
        <Footer className="footer" style={{ padding: "0" }}>
          {API.navbarItems && API.navbarItems.length === 3 && (
            <PageFooter navbars={API.navbarItems} />
          )}
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
