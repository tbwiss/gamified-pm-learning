import React, { FC } from "react";
import { Badge } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export const TopBar: FC<{ points: number }> = ({ points }) => (
  <>
    <Badge
      style={{
        padding: "0.5em",
        borderRadius: "10px",
        backgroundColor: "#52c41a",
      }}
      count={
        <span>
          <CheckOutlined /> {points} pt
        </span>
      }
      overflowCount={999}
    />
  </>
);
