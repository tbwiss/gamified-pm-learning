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
            <br />
            <h5>Structure</h5>
            On this webpage you will have a{" "}
            <strong>
              hands-on experience of an excerpt of an e-learning curriculum.
            </strong>
            <br />
            (1) We will show you a text-based/PDF version of the course content
            excerpt as well as a gamified version of the content. The order of
            the versions is chosen at random.
            <br />
            (2) You are kindly asked to report on your experience of the two
            different versions in a <strong>survey</strong> form.
            <br />
            This is all done on this webpage.
            <br />
            <br />
            <h5>Information</h5>
            The survey responses are <strong>annonymous</strong> and in
            compliance with the GDPR rules.
            <br />
            The data is handeled confidential and will only be used for the
            purpose of this thesis work.
            <br />
            Participation is on a voluntary basis.
            <br />
            More on ethical concerns including confidentiality and voluntary
            participation?
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            <h5>For the good cause</h5>
            On completion of each survey we will donate 100 SEK to the{" "}
            <a href="https://www.savethechildren.net/">
              Save the Children
            </a>{" "}
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
