import React, { FC } from "react";
import { Typography, Radio } from "antd";
import "./Content.css";

const { Title, Paragraph, Text } = Typography;

const ContentThree: FC = () => {
  return (
    <Typography>
      <Title className="main-title">Knowledge Check</Title>
      <Paragraph>
        <Text>2 minutes</Text>
      </Paragraph>

      <Paragraph>
        1. What is the color?
        <ul className="question">
          <li>
            <Radio>Blue</Radio>
          </li>
          <li>
            <Radio>Red</Radio>
          </li>
          <li>
            <Radio>Green</Radio>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
    </Typography>
  );
};
export default ContentThree;
