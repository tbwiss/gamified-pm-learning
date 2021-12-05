import React, { FC, useEffect, useState } from "react";
import { Button, Typography } from "antd";
import "./Viewer.css";

const { Paragraph, Text } = Typography;

const testPdfSrc = "http://www.africau.edu/images/default/sample.pdf"

const Viewer: FC<{ onCompleted: (...args: any[]) => any }> = ({
  onCompleted,
}) => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(900);

  useEffect(() => {
    const tmpWidth = window.innerWidth * 0.9;
    const tmpHeight = window.innerHeight * 0.8;
    setWidth(tmpWidth > 900 ? 900 : tmpWidth);
    setHeight(tmpHeight > 1000 ? 1000 : tmpHeight);
  });

  return (
    <div id="wrap" className="viewer-warp">
      {/* <embed
        src=""
        width={`${width}px`}
        height={`${height}px`}
        type="application/pdf"
      /> */}

      <iframe
        src={`${testPdfSrc}#view=fitH`}
        style={{
          height,
          width
        }}
        title="test PDF"
        width="100%"
        height="100%"
      />

      <Typography style={{ marginTop: "2em" }}>
        <Paragraph>
          <Text>
            Are you done reading? Please press <strong>Continue</strong>
          </Text>
        </Paragraph>
        <Paragraph>
          <Button size="large" type="primary" onClick={() => onCompleted()}>
            Continue
          </Button>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Viewer;
