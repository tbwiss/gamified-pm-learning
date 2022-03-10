import React, { FC } from "react";
import { Typography } from "antd";
import summary from "../assets/summary.png";
import "./Content.css";

const { Title, Paragraph, Text } = Typography;

const ContentTwo: FC = () => {
  return (
    <Typography>
      <Title className="main-title">Summary</Title>
      <Paragraph>
        <Text>1 minute</Text>
      </Paragraph>
      <Paragraph>
        Through adhering to Lean project management ideas (and its management
        tools), you can achieve the following:
      </Paragraph>
      {/* TODO: this is a list */}
      {/* <Paragraph>
        Shorter lead times Cost reduction across the board Improved quality and
        customer satisfaction Better process efficiency and predictability
      </Paragraph> */}
      <Paragraph className="image-container">
        <img className="image-wrap-slim" src={summary} alt="Summary​" />
      </Paragraph>
    </Typography>
  );
};

export default ContentTwo;
