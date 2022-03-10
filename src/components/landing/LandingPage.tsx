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
            The entire survey takes approximately 20 minutes to complete.
            <br />
            <br />
            <hr />
            <h4>Procedure</h4>
            On this webpage you will have a{" "}
            <strong>
              hands-on experience of an excerpt of an e-learning curriculum.
            </strong>
            <br />
            (1) We will show you a conventional text-based (PDF) version of the
            course content excerpt as well as a gamified version of the content.
            The order of the versions is chosen at random.
            <br />
            (2) You are kindly asked to report on your experience of the two
            different versions in a <strong>questionnaire</strong> form.
            <br />
            <i>Please note that this is all done on this webpage.</i>
            <br />
            <br />
            <h4>Information</h4>
            The survey responses are <strong>completely annonymous</strong> and
            in compliance with the GDPR rules.
            <br />
            The data is handeled confidential and will only be used for the
            purpose of this thesis work.
            <br />
            Participation is on a voluntary basis.
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            <h4>For the good cause</h4>
            We will donate to the{" "}
            <a
              href="https://www.savethechildren.net/"
              target="_blank"
              rel="noreferrer"
            >
              Save the Children
            </a>{" "}
            fund on your behalf on completion of the survey.
            <br />
          </Text>
        </Paragraph>
        <Paragraph>
          <br />
          <Text>
            <strong>Thank you very much</strong> for your contribution to our
            Master thesis research!
          </Text>
        </Paragraph>
        <br />
        <Paragraph>
          <hr />

          <Text>
            <h5>Consent</h5>
            By continuing you agree that your answers to the survey questions
            will be used for research at Stockholm University. You will remain
            anonymous and the data will not be used for other purposes.
          </Text>
          <br />
          <br />
          <Text>
            To continue and get started, please press the <i>Go</i> button.
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
