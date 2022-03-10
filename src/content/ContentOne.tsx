import React, { FC } from "react";
import { Typography } from "antd";
import "./Content.css";

const { Title, Paragraph, Text } = Typography;

const ContentOne: FC = () => {
  return (
    <Typography>
      <Title className="main-title">Background and Definition</Title>
      <Paragraph>
        <Text>2 minutes</Text>
      </Paragraph>
      <Title level={2}>Background</Title>
      <Paragraph>Lean Manufacturing - Toyota Production System</Paragraph>
      <Paragraph>
        Japanese engineers at Toyota invented the Toyota Production System (TPS)
        between 1948 and 1975, which served as the inspiration for what we know
        as the lean methodology today. The TPS was used to improve manufacturing
        and enhance interactions with suppliers and customers, as well as
        eliminate waste.
      </Paragraph>
      <Paragraph>
        John Krafcik was the one to introduce the lean approach to project
        management in his 1988 article titled, “Triumph of the Lean Production
        System.” Lean project management has influenced a whole subset of
        methodologies, including Agile, Kanban, and Scrum.
      </Paragraph>
      <span className="src-tag">
        Source: https://asana.com/sv/resources/lean-project-management
      </span>
      <br />
      <br />
      <Title level={2}>Definition of a lean project</Title>
      <Paragraph>
        Lean project management was developed in manufacturing, but the lean
        principles have spread to many different industries since. A lean
        project is simply one in which there is continuous improvement.
      </Paragraph>
      <Paragraph>
        That makes it part of the larger agile project management environment,
        in that it's flexible and willing to change as needed. It's all about
        delivering value to the customers and stakeholders, which is the same
        whether you're manufacturing a car or an app.
      </Paragraph>
      <Paragraph>
        One of the aspects of a lean project, that makes it unique from
        traditionally managed projects, is that it applies the five principles
        of lean project management. That's the first step in a lean project;
        identifying the five lean principles, then applying them to your
        project.
      </Paragraph>
      <Paragraph>
        Lean philosophy is focused on waste elimination. Any activity or
        material, which does not add value to the end product, has to be treated
        as waste.
      </Paragraph>
      <span className="src-tag">
        Source: https://www.sciencedirect.com/topics/engineering/lean-philosophy
      </span>
      <br />
      <span className="src-tag">
        Source: https://www.projectmanager.com/blog/lean-project-management
      </span>
      {/* <Paragraph className="center-cnt">
        <ReactPlayer
          width="100%"
          url="https://www.youtube.com/watch?v=qTQsdJFG4SQ"
        />
      </Paragraph> */}
    </Typography>
  );
};

export default ContentOne;
