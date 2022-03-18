import React, { FC } from "react";
import { Button, Typography } from "antd";
import "./LandingPage.css";

const { Title, Paragraph, Text } = Typography;

const LandingPage: FC<{ onGo: (...args: any[]) => any }> = ({ onGo }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page">
      <Typography className="landing-page-topo">
        <Title level={3} className="landing-main-title">
          Invitation to participate in project management education research
        </Title>
        <Paragraph>
          <Text>
            For our master thesis in the main field of study: Computer and
            Systems Sciences (specialization: IT project management), we are
            researching <strong>technology-based gamification</strong> as an aid
            in <strong>upskilling project professionals</strong>.
            <br />
            <br />
            As a part of this research, we are inviting you to participate in
            this test that is designed to give us the data we need to analyze
            this topic.{" "}
            <strong>
              We expect the entire experience to last approximately 20 minutes
              for you, but our gratitude will last forever
            </strong>{" "}
            .
            <br />
            <br />
            <hr />
            <h4>This is how the test will work: </h4>
            <ol style={{ margin: 0 }}>
              <li>
                When clicking the link, you will first be directed to a landing
                page where you will get instructions about the test, as well as
                a notice of consent. Of course, your participation is completely
                anonymous and GDPR compliant.
              </li>
              <li>
                Then you will be exposed to a <strong>short</strong> project
                management training module, in both a gamified version and a
                conventional version (slide deck converted to PDF).
              </li>
              <li>
                Once finished with the training, you will get a survey starting
                with:
                <ul style={{ margin: 0 }}>
                  <li>
                    First: a few questions on your background and{" "}
                    <strong>
                      previous experience with studies in terms of delivery
                      model
                    </strong>
                  </li>
                  <li>
                    Then: two sections covering questions on your{" "}
                    <strong>
                      experiences of the delivery model in the conventional and
                      gamified version of the training.
                    </strong>
                  </li>
                </ul>
              </li>
            </ol>
            <br />
            <strong>
              &#x2192; Please note that this is all done on this webpage.
            </strong>
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
