import React, { FC, useEffect, useState } from "react";
import { Button, Typography } from "antd";
import Content from "./Content";
import "./Viewer.css";

const { Paragraph, Text } = Typography;

const pdfSrc = "https://tbwiss.github.io/tbwiss/content.pdf";

const Viewer: FC<{ onCompleted: (...args: any[]) => any }> = ({
  onCompleted,
}) => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(900);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // eslint-disable-next-line
  useEffect(() => {
    const tmpWidth = window.innerWidth * 0.9;
    const tmpHeight = window.innerHeight * 0.85;
    setWidth(tmpWidth > 900 ? 900 : tmpWidth);
    setHeight(tmpHeight > 1000 ? 1000 : tmpHeight);
  });

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div id="wrap" className="viewer-warp">
      {/* <embed
        src=""
        width={`${width}px`}
        height={`${height}px`}
        type="application/pdf"
      /> */}

      {innerWidth >= 800 ? (
        <iframe
          src={`${pdfSrc}#view=fitH`}
          style={{
            height,
            width,
          }}
          title="test PDF"
          width="100%"
          height="100%"
        />
      ) : (
        <Content />
      )}

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
