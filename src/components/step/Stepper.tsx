import React, { FC } from "react";
import { Steps, Button, Badge, Typography, Row, Divider } from "antd";
import { successModal } from "../modal/SuccessModal";
import Intro from "../../content/Intro";
import ContentOne from "../../content/ContentOne";
import ContentTwo from "../../content/ContentTwo";
import ContentThree from "../../content/ContentThree";
import { CheckOutlined } from "@ant-design/icons";
import "./Stepper.css";

const { Step } = Steps;
const { Title } = Typography;

const steps = [
  {
    title: "Introduction",
    content: <Intro />,
  },
  {
    title: "Important Terms",
    content: <ContentOne />,
  },
  {
    title: "The G Theory",
    content: <ContentTwo />,
  },
  {
    title: "Knowledge Check",
    content: <ContentThree />,
  },
];

const TopBar: FC = () => (
  <>
    <Badge
      style={{
        padding: "0.5em",
        borderRadius: "10px",
        backgroundColor: "#52c41a",
      }}
      count={
        <span>
          <CheckOutlined /> 100 pt
        </span>
      }
      overflowCount={999}
    />
  </>
);

const Stepper: FC = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const contentForNext = () => {
    const next = current + 1;
    if (next === steps.length) {
      return "Finish";
    }
    return steps[next].title;
  };

  return (
    <div className="steps-wrap">
      <Steps className="steps-base" direction="vertical" current={current}>
        {steps.map((item, idx) => (
          <Step
            key={item.title}
            title={item.title}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </Steps>
      <div className="steps-container">
        <div className="steps-top-bar">
          <TopBar />
        </div>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          <Divider style={{ margin: "0 0 1.5em 0" }} />
          {current !== steps.length - 1 && (
            <Row>
              <Title level={3}>Next: {contentForNext()}</Title>
            </Row>
          )}
          <Row>
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => successModal()}>
                Done
              </Button>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
