import React, { FC } from "react";
import { Typography, Radio, Space, Form, Button } from "antd";
import "./Content.css";

const { Title, Paragraph, Text } = Typography;

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
  const onFinish = () => {
    console.log("Successful! All questions answered correctly.");
    document.dispatchEvent(new Event("CheckDone"));
  };

  return (
    <Typography>
      <Title className="main-title">Knowledge Check</Title>
      <Paragraph>
        <Text>2 minutes</Text>
      </Paragraph>

      <Paragraph>
        We have to have a bit of filler text here. nothing useful just some
        text. different design specs and implementations would be involved,
        which might cause designers and developers difficulties and duplication
        and reduce the efficiency of development.
      </Paragraph>

      <Paragraph>
        Choose the best response for each question. Then select{" "}
        <strong>Check your answers</strong>.
      </Paragraph>

      <Form
        name="knowledge-check"
        onFinish={onFinish}
        initialValues={{
          q1: null,
          q2: null,
          q3: null,
        }}
      >
        <Paragraph>
          <p>1. What is the color?</p>
          <Form.Item name="q1" rules={rules(1)}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
                <Radio value={3}>Option C</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Paragraph>

        <Paragraph>
          <p>2. What is the term of currenvy?</p>
          <Form.Item name="q2" rules={rules(1)}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
                <Radio value={3}>Option C</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Paragraph>

        <Paragraph>
          <p>3. Select the answer that fits best:</p>
          <Form.Item name="q3" rules={rules(1)}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
                <Radio value={3}>Option C</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Paragraph>

        <Button type="primary" htmlType="submit">
          Check your answers
        </Button>
      </Form>
    </Typography>
  );
};

export default KnowledgeCheck;
