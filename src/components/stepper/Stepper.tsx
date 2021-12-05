import React, { FC } from "react";
import {
  Steps,
  Button,
  Badge,
  Typography,
  Row,
  Divider,
  Statistic,
} from "antd";
import {
  openCongratsModal,
  openBadgeModal,
  openRedirectModal,
} from "../modal/Modals";
import Intro from "../../content/Intro";
import ContentOne from "../../content/ContentOne";
import ContentTwo from "../../content/ContentTwo";
import KnowledgeCheck from "../../content/KnowledgeCheck";
import { CheckOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Stepper.css";

const visitedSteps = new Set([0]);

const { Step } = Steps;
const { Title } = Typography;

const steps = [
  {
    id: 0,
    points: 100,
    title: "Introduction",
    content: <Intro />,
  },
  {
    id: 1,
    points: 200,
    title: "Important Terms",
    content: <ContentOne />,
  },
  {
    id: 2,
    points: 100,
    title: "The G Theory",
    content: <ContentTwo />,
  },
  {
    id: 3,
    points: 300,
    title: "Knowledge Check",
    content: <KnowledgeCheck />,
  },
];

const TopBar: FC<{ points: number }> = ({ points }) => (
  <>
    <Badge
      style={{
        padding: "0.5em",
        borderRadius: "10px",
        backgroundColor: "#52c41a",
      }}
      count={
        <span>
          <CheckOutlined /> {points} pt
        </span>
      }
      overflowCount={999}
    />
  </>
);

const Stats: FC<{ points: number }> = ({ points }) => (
  <div className="stats">
    <Statistic
      title="Your points: "
      value={points}
      precision={0}
      valueStyle={{ color: "#096dd9" }}
      suffix="Pt"
    />
  </div>
);

const Stepper: FC<{ onCompleted: (...args: any[]) => any }> = ({
  onCompleted,
}) => {
  const [points, setTotalPoints] = React.useState(100);
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    const next = current + 1;
    if (!visitedSteps.has(next)) {
      visitedSteps.add(next);
      setTotalPoints(points + steps[next].points);
    }
    setCurrent(next);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onHandleDirectClick = (idx: number) => {
    if (!visitedSteps.has(idx)) {
      visitedSteps.add(idx);
      setTotalPoints(points + steps[idx].points);
    }
    setCurrent(idx);
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
      <div className="steps-sider">
        <Steps className="steps-base" direction="vertical" current={current}>
          {steps.map((item, idx) => (
            <Step
              key={item.title}
              title={item.title}
              onClick={() => onHandleDirectClick(idx)}
            />
          ))}
        </Steps>
        <Stats points={points} />
      </div>
      <div className="steps-container">
        <div className="steps-nav-bar">
          {current > 0 ? (
            <Button
              type="link"
              style={{ margin: "0 8px" }}
              onClick={() => prev()}
            >
              <LeftOutlined /> Previous
            </Button>
          ) : (
            <span></span>
          )}
          {current < steps.length - 1 ? (
            <Button type="link" onClick={() => next()}>
              Next <RightOutlined />
            </Button>
          ) : (
            <span></span>
          )}
        </div>
        <div className="steps-top-bar">
          <TopBar points={steps[current].points} />
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
              <Button
                size="large"
                style={{ margin: "0 8px" }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button size="large" type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                size="large"
                type="primary"
                // onClick={() => {
                //   openCongratsModal(() => {
                //     // Add points
                //     openBadgeModal(() => {
                //       // Add badge
                //       onCompleted()
                //     });
                //   });
                // }}
                onClick={() => {
                  openCongratsModal(() => {
                    // Add points
                  });
                }}
              >
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
