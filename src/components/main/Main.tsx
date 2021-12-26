import React, { FC, useState } from "react";
import { Layout } from "antd";
import { openRedirectModal } from "../modal/Modals";
import Stepper from "../stepper/Stepper";
import Viewer from "../viewer/Viewer";
import LandingPage from "../landing/LandingPage";
import Spark from "../../assets/celebration-spark.svg";
import Garland from "../../assets/celebration-garland.svg";
import Medal from "../../assets/medal-1369.svg";
import Quality from "../../assets/quality-3602.svg";
import BadgeThumbsUp from "../../assets/badge-1360.svg";
import "./Main.css";

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
          <div style={{ visibility: "hidden" }}>
            {/* Primitive way to load the svg's on page load */}
            <img src={Spark} alt="Spark" width="10px" height="10px" />
            <img src={Garland} alt="Garland" width="10px" height="10px" />
            <img src={Medal} alt="Medal" width="10px" height="10px" />
            <img src={Quality} alt="Quality" width="10px" height="10px" />
            <img src={BadgeThumbsUp} alt="thumbs" width="10px" height="10px" />
          </div>
        </Content>
        <Footer onClick={() => setIsLandingPage(true)}>
          Copyright of content: xxx TM; Just in case: Link to the survey
        </Footer>
      </Layout>
    </>
  );
};

export default Main;
