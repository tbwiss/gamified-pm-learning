import React, { FC } from "react";
import { Button, Typography } from "antd";
import "./LandingPage.css";

const { Title, Paragraph, Text } = Typography;

const LandingPage: FC<{ onGo: (...args: any[]) => any }> = ({ onGo }) => {
  return (
    <Typography className="landing-page">
      <Title level={3} className="landing-main-title">
        Project Management education survey
      </Title>
      <Paragraph>
        <Text>
          The pre-part plus the survey takes about <i>10 minutes</i> in total to
          complete.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text>Some more important info? Keep it short though!</Text>
      </Paragraph>
      <Paragraph>
        <Text>
          <strong>Thank you very much</strong> for taking the time to fill out
          this survey!
        </Text>
      </Paragraph>
      <Paragraph>
        <Text>
          To get started press the <i>Go</i> button below.
        </Text>
      </Paragraph>
      <Paragraph style={{ textAlign: "center" }}>
        <Button size="large" type="primary" onClick={onGo}>
          Go!
        </Button>
      </Paragraph>
    </Typography>
  );
};

export default LandingPage;
