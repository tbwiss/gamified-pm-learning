import React from "react";
import { Modal, Typography } from "antd";
import { TopBar } from "../stepper/utils";
import Spark from "../../assets/celebration-spark.svg";
import Garland from "../../assets/celebration-garland.svg";
import BadgeDollar from "../../assets/badge-dollar.svg";
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
                  You completed the module{" "}
                  <strong>Lean project management</strong>.
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  You should now have basic knowledge about the benefits and
                  background of Lean project management, the lean principles,
                  the Deming cycle, and six sigma.
                </Text>
              </Paragraph>
              <br />
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
            src={BadgeDollar}
            alt="Badge donation"
            width="220px"
            height="350px"
          />
        </div>
        <div className="modal-main">
          <div className="modal-core">
            <Typography>
              <Title level={3}>What an achievement!</Title>
              <Paragraph>
                <Text>
                  This unlocks the donation to the{" "}
                  <strong>Save the Children</strong> fund. Well done!
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  With this achievement you also get the{" "}
                  <strong>"Fundraiser" badge</strong>. Great!
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>We will add this badge to your collection.</Text>
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
