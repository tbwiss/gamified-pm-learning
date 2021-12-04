import React, { FC } from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const Intro: FC<{}> = () => {
  return (
    <Typography>
      <Title className="main-title">Introduction</Title>
      <Paragraph>
        <Text>1 minute</Text>
      </Paragraph>

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
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>

      <Title level={2}>Learning objectives</Title>
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
      </Paragraph>
    </Typography>
  );
};

export default Intro;
