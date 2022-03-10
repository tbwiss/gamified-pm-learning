import React, { FC, useState } from "react";
import { Typography, Radio, Space, Form, Button } from "antd";
import "./Content.css";

const { Title, Paragraph } = Typography;

const rules = (correctValue: number) => [
  {
    required: true,
    validateTrigger: "onSubmit",
    message: "This answer is not correct. Try again!",
    validator: (_: any, value: any) =>
      value !== correctValue ? Promise.reject() : Promise.resolve(),
  },
];

const KnowledgeCheck: FC = () => {
  const [errorFields, setErrorFields] = useState<any>(["q1", "q2", "q3"]);
  const onFinish = () => {
    setErrorFields([]);
    console.log("Successful! All questions answered correctly.");
    document.dispatchEvent(new Event("CheckDone"));
  };

  return (
    <Typography>
      <Title className="main-title">Knowledge Check</Title>

      <Paragraph>
        Choose the best response for each of the questions listed below. When
        you're done, please click on the <strong>Check your answers</strong>{" "}
        button.
      </Paragraph>

      <Form
        name="knowledge-check"
        onFinish={onFinish}
        onFinishFailed={({ values, errorFields, outOfDate }) => {
          if (errorFields) {
            const next = errorFields.map((f) => f.name).flat();
            setErrorFields(next);
          }
        }}
        initialValues={{
          q1: null,
          q2: null,
          q3: null,
        }}
      >
        <Paragraph>
          <p>1. What does PDCA stand for?</p>
          <Form.Item name="q1" rules={rules(3)}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>
                  Process, development, continuous improvement, awareness
                </Radio>
                <Radio value={2}>
                  Planning, developing, challenging, addressing
                </Radio>
                <Radio value={3}>Plan, do, check, act</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          {!errorFields.includes("q1") ? (
            <span className="correct-tag">Correct! &#10003;</span>
          ) : null}
        </Paragraph>

        <Paragraph>
          <p>2. What is meant by Muri?</p>
          <Form.Item name="q2" rules={rules(1)}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>Waste created by overburden</Radio>
                <Radio value={2}>
                  Value defined by the customer needs for a product
                </Radio>
                <Radio value={3}>Perfection</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          {!errorFields.includes("q2") ? (
            <span className="correct-tag">Correct! &#10003;</span>
          ) : null}
        </Paragraph>

        <Paragraph>
          <p>3. What is the main philosophy of Lean?</p>
          <Form.Item name="q3" rules={rules(2)}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>Deliver in iterations</Radio>
                <Radio value={2}>Eliminate waste</Radio>
                <Radio value={3}>Plan ahead</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          {!errorFields.includes("q3") ? (
            <span className="correct-tag">Correct! &#10003;</span>
          ) : null}
        </Paragraph>

        <Button type="primary" htmlType="submit">
          Check your answers
        </Button>
      </Form>
    </Typography>
  );
};

export default KnowledgeCheck;
