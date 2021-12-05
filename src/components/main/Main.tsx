import React, { FC } from "react";
import { Layout } from "antd";
import { openRedirectModal } from "../modal/Modals";
import Stepper from "../stepper/Stepper";
// import Viewer from "../viewer/Viewer";
import "./Main.css";

const { Header, Footer, Content } = Layout;

const doRedirect = () => {
  openRedirectModal(() => {
    // Do redirect
    console.log("Main: Redirect to survey now..");
  });
};

const Main: FC = () => (
  <>
    <Layout className="layout">
      <Header className="header">
        Discuss Project Management fundamental concepts
      </Header>
      <Content className="content">
        <Stepper onCompleted={doRedirect} />
        {/* <Viewer onCompleted={doRedirect} /> */}
      </Content>
      <Footer>
        Copyright of content: xxx TM; Just in case: Link to the survey
      </Footer>
    </Layout>
  </>
);

export default Main;
