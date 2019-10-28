import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "antd";
import { navbarItem } from "../types";
import {
  Header as PageHeader,
  Content as PageContent,
  Footer as PageFooter
} from "../components";

interface APIModel {
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
  const [API, setAPI] = useState<APIModel>(init);
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
          <Content className="content" style={{ backgroundColor: "#fff" }}>
            <PageContent
              duration={API.duration}
              detail={API.detail}
              condition={API.condition}
            />
          </Content>
          <Sider collapsible defaultCollapsed collapsedWidth={0} theme="light">
            Sider
          </Sider>
        </Layout>
        <Footer className="footer">
          <PageFooter />
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
