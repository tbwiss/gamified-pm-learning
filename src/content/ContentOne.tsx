import React, { FC } from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const ContentOne: FC = () => {
  return (
    <Typography>
      <Title>Content - One</Title>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
    </Typography>
  );
};
export default ContentOne;