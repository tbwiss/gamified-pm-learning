import React, { FC } from "react";
import { Typography } from "antd";
import "./Content.css";

const { Title, Paragraph, Text } = Typography;

const Intro: FC<{}> = () => {
  return (
    <Typography>
      <Title className="main-title">Introduction</Title>
      <Paragraph>
        <Text>2 minutes</Text>
      </Paragraph>

      <Title level={2}>What this course is about</Title>

      <Paragraph>
        This module is designed to give a short introduction into the topic of
        Lean project management. It has no formal prerequisites, but it is
        helpful to have some prior knowledge of project management.
      </Paragraph>
      <Paragraph>
        Upon completing this module, you should have basic knowledge about the
        benefits and background of Lean project management, the lean principles,
        the Deming cycle, and six sigma.
      </Paragraph>

      <Title level={2}>Introduction</Title>
      <Paragraph>
        Lean project management focuses on delivering a manufacturing project
        with more value and less waste. It does this by systematically
        eliminating waste in the value stream of the lean manufacturing process.
      </Paragraph>
      <Paragraph>
        To work, lean project management relies on continuous improvement. That
        means that every process in the overall business value stream is
        improved by applying the principle of greater value, reduced waste.
      </Paragraph>
      <Paragraph>
        Lean manufacturing was developed by Toyota, which is why it uses
        Japanese words to refer to the elimination of waste in a manufacturing
        system (Muda), waste created by overburden (Muri) and waste that comes
        about because of uneven workloads (Mura).
      </Paragraph>
      <Paragraph>
        The lean manufacturing methodology has 5 lean principles: value, value
        stream, pull system, continuous flow, and perfection. We'll learn about
        those in this module.
      </Paragraph>
      <span className="src-tag">
        Source: https://www.projectmanager.com/blog/lean-project-management
      </span>

      {/* <Title level={2}>Learning objectives</Title>
      <Paragraph>
        Upon completion of this module, you'll be able to:
        <ul>
          <li>Nam congue vestibulum diam, quis feugiat.</li>
          <li>Quisque aliquam lacus pharetra dolor rutrum.</li>
          <li>Maecenas dignissim commodo tellus sed cursus.</li>
        </ul>
      </Paragraph>

      <Title level={2}>Prerequisites</Title>
      <Paragraph>
        You should be familiar with basics of Project Management fundamentals.
      </Paragraph> */}
    </Typography>
  );
};

export default Intro;
