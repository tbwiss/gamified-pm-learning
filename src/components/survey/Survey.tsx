import React, { FC, useEffect, useState } from "react";
import { Button, Typography } from "antd";
import "./Survey.css";

const { Paragraph, Text } = Typography;

const Survey: FC<{
  isPartOne: boolean;
  onCompleted: (...args: any[]) => any;
}> = ({ isPartOne = true, onCompleted }) => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(900);

  // eslint-disable-next-line
  useEffect(() => {
    const tmpWidth = window.innerWidth * 0.95;
    const tmpHeight = window.innerHeight * 0.9;
    setWidth(tmpWidth > 900 ? 900 : tmpWidth);
    setHeight(tmpHeight > 1000 ? 1100 : tmpHeight);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrap" className="survey-warp">
      {/* <iframe
        src={`https://docs.google.com/forms/d/e/xxxxxxxxxxxxx/viewform?embedded=true&entry.1931746735=${getUniqueId()}`}
        style={{
          height,
          width,
          // border: "1px solid lightgrey",
          border: 0,
        }}
        title="Part-one-Survey"
        width="100%"
        height="100%"
      /> */}
      <iframe
        title="Survey"
        width="100%"
        height="100%"
        id="survey-frame"
        src={`https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZ__rJ3PZxUN0RaWE84MVU4SzBCNkxJRjRVUElMMVYzVC4u&embed=true`}
        style={{
          height,
          width,
          // border: "1px solid lightgrey",
          border: 0,
        }}
      />

      <Typography style={{ marginTop: "2em" }}>
        {isPartOne ? (
          <React.Fragment>
            <Paragraph>
              <Text>
                Are you asked to <strong>experience the learning</strong>?
                Please press the button below.
              </Text>
            </Paragraph>
            <Paragraph>
              <Button size="large" type="primary" onClick={() => onCompleted()}>
                Continue to experience
              </Button>
            </Paragraph>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Paragraph>
              <Text>
                Did you finalize the questionnaire by clicking "
                <strong>Submit</strong>" at the very end?
              </Text>
              <p>
                <br />
                <Text>
                  <strong>Thank you very much!</strong> We really appreciate it!
                </Text>
              </p>
            </Paragraph>
          </React.Fragment>
        )}
      </Typography>
    </div>
  );
};

export default Survey;
