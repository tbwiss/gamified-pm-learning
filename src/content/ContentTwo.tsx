import React, { FC } from "react";
import { Typography } from "antd";
import stakeholders from "./assets/stakeholders.jpeg";
import "./Content.css";

const { Title, Paragraph, Text } = Typography;

const ContentTwo: FC = () => {
  return (
    <Typography>
      <Title>The Gamification Theory</Title>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>

      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>

      <Paragraph>
        <img className="image-wrap" src={stakeholders} alt="Stakeholders" />
        <Text style={{ fontSize: "10px" }}>
          Source:
          https://mudassiriqbal.net/project-team-vs-project-management-team/
        </Text>
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
export default ContentTwo;
