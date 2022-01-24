import React from "react";
import { Modal, Typography } from "antd";
import { TopBar } from "../stepper/utils";
import Spark from "../../assets/celebration-spark.svg";
import Garland from "../../assets/celebration-garland.svg";
import BadgeThumbsUp from "../../assets/badge-1360.svg";
import Medal from "../../assets/medal-1369.svg";
import Quality from "../../assets/quality-3602.svg";
import "./Modals.css";

const { Title, Paragraph, Text } = Typography;

const modals = [
  {
    id: "congrats",
    cancelText: "Close",
    okText: "Continue",
    width: 600,
    content: (
      <div className="modal-content">
        <div className="modal-sider">
          <img
            src={Spark}
            alt="Spark of joy"
            width="220px"
            height="350px"
            className="joy"
          />
        </div>
        <div className="modal-main">
          <div className="modal-top-row">
            <TopBar points={200} />
          </div>
          <div className="modal-core">
            <Typography>
              <Title level={3}>Congratulations!</Title>
              <Paragraph>
                <Text>
                  You completed the module <strong>PM Learning course 1</strong>
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>Some more filler text here</Text>
              </Paragraph>
            </Typography>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "badge",
    cancelText: "Close",
    okText: "Continue",
    width: 600,
    content: (
      <div className="modal-content">
        <div className="modal-sider">
          <img
            src={Garland}
            className="garland"
            alt="Garland"
            width="220px"
            height="350px"
          />
          <img
            src={BadgeThumbsUp}
            alt="Badge thumbs up"
            width="220px"
            height="350px"
          />
        </div>
        <div className="modal-main">
          <div className="modal-core">
            <Typography>
              <Title level={3}>What an achievement!</Title>
              <Paragraph>
                <Text>You get a brand new badge for this.</Text>
              </Paragraph>
              <Paragraph>
                <Text>Click here to share your achievement</Text>
              </Paragraph>
            </Typography>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "redirectToSurvey",
    cancelText: "Close",
    okText: "To the survey",
    width: 600,
    content: (
      <div className="modal-content">
        <div className="modal-sider">
          <img
            src={Quality}
            className="quality"
            alt="Quality"
            width="220px"
            height="350px"
          />
          <img
            src={Medal}
            className="medal"
            alt="Medal"
            width="220px"
            height="350px"
          />
        </div>
        <div className="modal-main">
          <div className="modal-core">
            <Typography>
              <Title level={3}>Thank you very much!</Title>
              <Paragraph>
                <Text>Off to the survey</Text>
              </Paragraph>
              <Paragraph>
                <Text>It only takes 2-3 minutes</Text>
              </Paragraph>
            </Typography>
          </div>
        </div>
      </div>
    ),
  },
];

const openModal = (type: number, handleOnOk: (...args: any[]) => any) => {
  Modal.confirm({
    cancelButtonProps: {
      disabled: true,
    },
    icon: null,
    content: modals[type].content,
    width: modals[type].width,
    maskClosable: false,
    closable: false,
    cancelText: modals[type].cancelText,
    okText: modals[type].okText,
    onOk: handleOnOk,
  });
};

export const openCongratsModal = (handleOnOk: (...args: any[]) => any) =>
  openModal(0, handleOnOk);
export const openBadgeModal = (handleOnOk: (...args: any[]) => any) =>
  openModal(1, handleOnOk);
export const openRedirectModal = (handleOnOk: (...args: any[]) => any) =>
  openModal(2, handleOnOk);
