import React, { FC } from "react";
import { Layout } from "antd";
import Stepper from "../stepper/Stepper";
import Viewer from "../viewer/Viewer";
import "./Main.css";

const SHOW = "stepper";
// const SHOW = 'viewer'

const { Header, Footer, Content } = Layout;

const Main: FC = () => (
  <>
    <Layout className="layout">
      <Header className="header">
        Discuss Project Management fundamental concepts
      </Header>
      <Content className="content">
        {SHOW === "stepper" ? <Stepper /> : <Viewer />}
      </Content>
      <Footer>Copyright of content: xxx TM</Footer>
    </Layout>
  </>
);

export default Main;
