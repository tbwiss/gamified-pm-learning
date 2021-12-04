import React from "react";
import { Modal } from "antd";

export const successModal = () => {
  Modal.success({
    content: "some messages...some messages...",
  });
};
