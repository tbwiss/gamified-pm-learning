import React, { FC, useState } from "react";
import { Layout } from "antd";
import { openRedirectModal } from "../modal/Modals";
import Stepper from "../stepper/Stepper";
import Viewer from "../viewer/Viewer";
import "./Main.css";
import LandingPage from "../landing/LandingPage";

const { Header, Footer, Content } = Layout;

const doRedirect = () => {
  openRedirectModal(() => {
    // TODO: Do redirect
    console.log("Main: Redirect to survey now..");
  });
};

const Main: FC = () => {
  const [isStepper, setIsStepper] = useState(true);
  const [isLandingPage, setIsLandingPage] = useState(true);

  const doABtestingRedirect = () => {
    setIsLandingPage(false);
    const aOrb = Math.random() >= 0.5;
    setIsStepper(aOrb);
  };

  return (
    <>
      <Layout className="layout">
        <Header className="header" onClick={() => setIsStepper(!isStepper)}>
          Discuss Project Management fundamental concepts
        </Header>
        <Content className="content">
          {isLandingPage ? (
            <LandingPage onGo={doABtestingRedirect} />
          ) : (
            <>
              {isStepper ? (
                <Stepper onCompleted={doRedirect} />
              ) : (
                <Viewer onCompleted={doRedirect} />
              )}
            </>
          )}
        </Content>
        <Footer onClick={() => setIsLandingPage(true)}>
          Copyright of content: xxx TM; Just in case: Link to the survey
        </Footer>
      </Layout>
    </>
  );
};

export default Main;
