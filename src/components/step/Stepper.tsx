import React, { FC } from "react";
import { Steps, Button } from "antd";
import { successModal } from "../modal/SuccessModal";
import Intro from "../../content/Intro";
import ContentOne from "../../content/ContentOne";
import ContentTwo from "../../content/ContentTwo";
import "./Stepper.css";

const { Step } = Steps;

const steps = [
  {
    title: "Introduction",
    content: <Intro />,
  },
  {
    title: "Some content",
    content: <ContentOne />,
  },
  {
    title: "Finish line",
    content: <ContentTwo />,
  },
];

const Stepper: FC = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="steps-wrap">
      <Steps className="steps-base" direction="vertical" current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-container">
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
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
        </div>
      </div>
    </div>
  );
};

export default Stepper;
