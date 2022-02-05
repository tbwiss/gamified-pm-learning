import React, { FC } from "react";
import { Button, Typography } from "antd";
import "./LandingPage.css";

const { Title, Paragraph, Text } = Typography;

const LandingPage: FC<{ onGo: (...args: any[]) => any }> = ({ onGo }) => {
  return (
    <div className="landing-page">
      <Typography className="landing-page-topo">
        <Title level={3} className="landing-main-title">
          Student survey on Project management education
        </Title>
        <Paragraph>
          <Text>
            The entire survey takes around 15-20 minutes to complete.
            <br />
            You will first have a{" "}
            <strong>
              hands-on experience of an excerpt of an e-learning curriculum
            </strong>{" "}
            and then asked to report on your experience in a survey form, all on
            this webpage.
            <br />
            The survey responses are all <strong>annonymous</strong> and in
            compliance with the GDPR rules.
            <br />
            More on ethical concerns including confidentiality and voluntary
            participation?
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
            this survey and to contribute to our Master thesis research!
          </Text>
          <br />
          <Text>In case there are any issue, contact us at: (needed?)</Text>
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
