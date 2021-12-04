import React, { FC } from "react";
import { Layout } from "antd";
import Stepper from "../step/Stepper";
import "./Main.css";

const { Header, Footer, Content } = Layout;

const Main: FC = () => (
  <>
    <Layout className="layout">
      <Header>PM fundamentals</Header>
      <Content>
        <Stepper />
      </Content>
      <Footer>Copyright of content: xxx TM</Footer>
    </Layout>
  </>
);

export default Main;
