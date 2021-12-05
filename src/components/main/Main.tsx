import React, { FC, useState } from "react";
import { Button, Layout } from "antd";
import { LayoutOutlined } from "@ant-design/icons";
import { openRedirectModal } from "../modal/Modals";
import Stepper from "../stepper/Stepper";
import Viewer from "../viewer/Viewer";
import "./Main.css";

const { Header, Footer, Content } = Layout;

const doRedirect = () => {
  openRedirectModal(() => {
    // Do redirect
    console.log("Main: Redirect to survey now..");
  });
};

const Main: FC = () => {
  const [isStepper, setIsStepper] = useState(true);

  return (
    <>
      <Layout className="layout">
        <Header className="header">
          Discuss Project Management fundamental concepts
          <Button
            style={{ marginLeft: "1em" }}
            type="link"
            onClick={() => setIsStepper(!isStepper)}
          >
            <LayoutOutlined />
          </Button>
        </Header>
        <Content className="content">
          {isStepper ? (
            <Stepper onCompleted={doRedirect} />
          ) : (
            <Viewer onCompleted={doRedirect} />
          )}
        </Content>
        <Footer>
          Copyright of content: xxx TM; Just in case: Link to the survey
        </Footer>
      </Layout>
    </>
  );
};

export default Main;
