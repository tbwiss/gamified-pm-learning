import React, { FC } from "react";
import { Typography } from "antd";
import ReactPlayer from "react-player";
import "./Content.css";

const { Title, Paragraph } = Typography;

const ContentOne: FC = () => {
  return (
    <Typography>
      <Title>Usefull Terms</Title>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>

      <Paragraph className="center-cnt">
        <ReactPlayer
          width="540px"
          url="https://www.youtube.com/watch?v=qTQsdJFG4SQ"
        />
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
export default ContentOne;
