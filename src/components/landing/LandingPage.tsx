import React, { FC } from "react";
import { Button, Typography } from "antd";
import "./LandingPage.css";

const { Title, Paragraph, Text } = Typography;

const LandingPage: FC<{ onGo: (...args: any[]) => any }> = ({ onGo }) => {
  return (
    <div className="landing-page">
      <Typography>
        <Title level={3} className="landing-main-title">
          Project Management education survey
        </Title>
        <Paragraph>
          <Text>
            The entire survey takes you about 15-20 minutes to complete.
            <br />
            There are three parts to this survey:
            <ul>
              <li>Survey Part 1: Background and history</li>
              <li>Experience the e-learning curriculum</li>
              <li>Survey Part 2: Experience with the curriculum</li>
            </ul>
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            On completion of the survey we will donate 100 SEK to the{" "}
            <a href="https://www.savethechildren.net/">Save the Children</a>{" "}
            fund.
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            <strong>Thank you very much</strong> for taking the time to fill out
            this survey!
          </Text>
        </Paragraph>
        <br />
        <br />
        <Paragraph>
          <Text>
            To get started press the <i>Go</i> button.
          </Text>
        </Paragraph>
        <Paragraph style={{ textAlign: "center" }}>
          <Button
            size="large"
            type="primary"
            onClick={onGo}
            style={{ width: "9em" }}
          >
            Go
          </Button>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default LandingPage;
