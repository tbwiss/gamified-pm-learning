import React from "react";
import { Modal } from "antd";
import "./Modals.css";

const modals = [
  {
    id: "congrats",
    cancelText: "Close",
    okText: "Okay!",
    content: (
      <>
        <div>Add content here</div>
        <div>Another 200 points!</div>
      </>
    ),
  },
  {
    id: "badge",
    cancelText: "Close",
    okText: "Okay!",
    content: (
      <>
        <div>Add content here</div>
        <div>Great! a badge</div>
      </>
    ),
  },
  {
    id: "redirectToSurvey",
    cancelText: "Close",
    okText: "Okay!",
    content: (
      <>
        <div>Thank you very much!</div>
        <div>Off to the survey</div>
        <div>It only takes 2-3 minutes</div>
      </>
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
