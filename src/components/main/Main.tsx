import React, { FC, useState } from "react";
import { Layout } from "antd";
import Stepper from "../stepper/Stepper";
import Viewer from "../viewer/Viewer";
import LandingPage from "../landing/LandingPage";
import Survey from "../survey/Survey";
import Spark from "../../assets/celebration-spark.svg";
import Garland from "../../assets/celebration-garland.svg";
import Medal from "../../assets/medal-1369.svg";
import Quality from "../../assets/quality-3602.svg";
import BadgeDonation from "../../assets/badge-dollar.svg";
import "./Main.css";

const { Header, Footer, Content } = Layout;

const Main: FC = () => {
  const [pageIdx, setPageIdx] = useState(0);
  const [contentIdx, setContentIdx] = useState(0);
  const [isStepper, setIsStepper] = useState(true);

  const checkContentState = () => {
    if (contentIdx === 1) {
      // done
      setPageIdx(pageIdx + 1);
    }
    setContentIdx(contentIdx + 1);
    setIsStepper(!isStepper);
  };

  const doABtestingRedirect = () => {
    const aOrb = Math.random() >= 0.5;
    setIsStepper(aOrb);
    setPageIdx(pageIdx + 1);
  };

  const renderPage = () => {
    switch (pageIdx) {
      case 0:
        return <LandingPage onGo={doABtestingRedirect} />;
      case 1:
        return (
          <>
            {isStepper ? (
              <Stepper onCompleted={checkContentState} />
            ) : (
              <Viewer onCompleted={checkContentState} />
            )}
          </>
        );
      case 2:
        return <Survey isPartOne={false} onCompleted={() => {}} />;
      default:
        break;
    }
  };

  return (
    <>
      <Layout className="layout">
        <Header className="header">Project management survey</Header>
        <Content className="content">
          {renderPage()}
          <div style={{ visibility: "hidden" }}>
            {/* Primitive way to load the svg's on page load */}
            <img src={Spark} alt="Spark" width="10px" height="10px" />
            <img src={Garland} alt="Garland" width="10px" height="10px" />
            <img src={Medal} alt="Medal" width="10px" height="10px" />
            <img src={Quality} alt="Quality" width="10px" height="10px" />
            <img src={BadgeDonation} alt="thumbs" width="10px" height="10px" />
          </div>
        </Content>
        <Footer className="footer">
          {/* Copyright of content: xxx TM; */}
          {/* Is this needed or just confusing?? Probably more confusing then helpful */}
          {/* Just in case: to the survey page */}
        </Footer>
      </Layout>
    </>
  );
};

export default Main;
