import React, { FC } from "react";
import { Typography } from "antd";
import stakeholders from "../../assets/stakeholders.jpeg";
import "./Viewer.css";

const { Paragraph, Text } = Typography;

const Content: FC = () => (
  <Typography className="viewer-content-wrap">
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum
      justo a nibh vehicula consectetur. Proin scelerisque ex sed enim
      imperdiet, ut varius felis faucibus. Ut tempor erat id turpis fringilla
      sagittis. Etiam ut augue vitae lacus dignissim scelerisque. Aliquam erat
      volutpat. Nam ultricies, dui vitae tristique ornare, neque neque imperdiet
      massa, at mollis turpis ligula a magna. Etiam et mollis urna. Donec id
      placerat massa, eget viverra mi.
    </Paragraph>

    <Paragraph>
      Maecenas id quam vel odio tempus maximus. Nam sed dui neque. Nam tincidunt
      in erat porta vestibulum. Nunc ultrices egestas erat eget volutpat.
      Curabitur in pharetra sapien. Vivamus massa justo, posuere rutrum volutpat
      eget, porttitor eu velit. Praesent porta dui purus, a aliquam odio finibus
      vel. Suspendisse sagittis ut mauris ac efficitur.
    </Paragraph>

    <Paragraph>
      Vestibulum sit amet elementum arcu. Fusce ullamcorper urna a mi auctor
      tincidunt. Duis mattis turpis nibh, vel eleifend mi ullamcorper vel. Ut
      sit amet nisl et velit dictum gravida ut et nulla. Phasellus a iaculis
      sem, et dignissim erat. Integer sed ipsum leo. Suspendisse tristique sit
      amet nisi et condimentum. Aliquam erat volutpat. Cras sapien lectus,
      tincidunt a consectetur quis, euismod ut elit.
    </Paragraph>

    <Paragraph>
      Ut tincidunt justo mi, ac congue quam pharetra id. Fusce eleifend magna ut
      libero imperdiet fringilla. Mauris eleifend velit ac arcu euismod finibus.
      Aenean facilisis, arcu quis lobortis vestibulum, tellus ligula feugiat
      urna, quis efficitur enim purus elementum nisi. Sed vel tellus congue,
      rutrum tortor nec, tincidunt lacus. Suspendisse pellentesque condimentum
      sapien, sed venenatis augue pretium ac. Aenean pulvinar purus a lacus
      ullamcorper, eu dapibus leo lacinia. Aliquam luctus est odio, auctor
      laoreet massa varius quis. Etiam et accumsan ligula. Aenean at malesuada
      libero. Praesent vel finibus velit. Nullam vehicula vulputate lacinia.
    </Paragraph>

    <Paragraph>
      <img className="image-wrap" src={stakeholders} alt="Stakeholders" />
      <Text style={{ fontSize: "10px" }}>
        Source:
        https://mudassiriqbal.net/project-team-vs-project-management-team/
      </Text>
    </Paragraph>

    <Paragraph>
      Pellentesque ac sollicitudin ante. Maecenas facilisis nulla eleifend neque
      elementum facilisis quis sit amet risus. Mauris ac diam sed nulla accumsan
      posuere eu sit amet orci. Nullam et erat at ex aliquet suscipit. In sit
      amet nulla eu dui congue bibendum id sed enim. Fusce consequat purus vitae
      vulputate fermentum. Nulla quam diam, gravida ut consequat ut, scelerisque
      et nibh. Mauris in viverra erat. Integer tincidunt augue at magna
      scelerisque interdum a vitae dui. Suspendisse dictum eros tincidunt
      venenatis aliquet. Ut eu augue nisi. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Aliquam sit amet
      fringilla nulla.
    </Paragraph>
  </Typography>
);

export default Content;
