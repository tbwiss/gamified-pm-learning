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
    const tmpWidth = window.innerWidth * 1;
    const tmpHeight = window.innerHeight * 0.85;
    setWidth(tmpWidth > 900 ? 900 : tmpWidth);
    setHeight(tmpHeight > 1000 ? 1100 : tmpHeight);
  });

  return (
    <div id="wrap" className="survey-warp">
      {/* <iframe
        src={`https://docs.google.com/forms/d/e/1FAIpQLSdv-gsi6flW19NSOHtWJkOnXeYFCXSwPuKuXgdYqxXktsxRcA/viewform?embedded=true&entry.1931746735=${getUniqueId()}`}
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
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZ__rJ3PZxUMVgwRDA4VURJVFNXV0xUMlVYUFdLRU9OMS4u&embed=true"
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
                Did you finalize the survey by clicking <strong>submit</strong>?
              </Text>
              <p>
                <Text>
                  Thank you very much! We really appreciate you taking the time!
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
