import React, { FC } from "react";
import { Typography } from "antd";
import pdca from "../assets/pdca_cycle.png";
import sixSigma from "../assets/six_sigma.png";
import "./Content.css";

const { Title, Paragraph, Text } = Typography;

const ContentTwo: FC = () => {
  return (
    <Typography>
      <Title className="main-title">Management tool</Title>
      <Paragraph>
        <Text>3 minutes</Text>
      </Paragraph>
      <Title level={2}>Management tools</Title>
      <Paragraph>
        There are several processes and tools available for professionals
        seeking to implement Lean. In this section we will briefly cover two:
        Six sigma and PDCA.
      </Paragraph>
      <Paragraph>
        You can use these to improve your product development workflow.
      </Paragraph>
      <Paragraph>
        When striving for continuous improvement, the tools will help you and
        your team reduce waste, improve productivity, and increase customer
        value.
      </Paragraph>
      <span className="src-tag">
        Source: https://asana.com/sv/resources/lean-project-management
      </span>
      <br />
      <br />
      <Title level={2}>Deming cycle (PDCA)</Title>
      <Paragraph>
        Dr. W. Edwards Deming developed the Deming Cycle in the 1950s. His
        method, also known as the Plan-Do-Check-Act cycle, or PDCA, was a
        revision of an earlier three-step problem-solving method created in the
        1920s by Dr. Walter Shewhart.
      </Paragraph>
      <Paragraph>There are four steps in the PDCA cycle:</Paragraph>
      <ul>
        <li>
          Plan: Investigate your workflow and identify any problems that need
          solving.
        </li>
        <li>
          Do: Find solutions to the problem by analyzing data or collaborating
          with team members.
        </li>
        <li>
          Check: Monitor whether your solutions are effective and make
          improvements to your plan if needed.
        </li>
        <li>Act: Apply revised solutions and assess what you've learned.</li>
      </ul>
      <Paragraph>
        The Deming cycle is a simple process you can apply to various
        organizational processes. When implemented correctly, this process can
        make a significant impact on your product value.
      </Paragraph>
      <Paragraph className="image-container">
        <img className="image-wrap" src={pdca} alt="Deming cycle (PDCA)" />
      </Paragraph>
      <span className="src-tag">
        Source: https://asana.com/sv/resources/lean-project-management
      </span>
      <br />
      <br />
      <Title level={2}>Lean Six Sigma project management (DMEDI)</Title>
      <Paragraph>
        Lean Six Sigma is a lean management tool you can use to identify
        problems in your workflow. This tool has steps just like the Deming
        cycle, but it also has methods of analysis you can use alongside it. The
        Lean Six Sigma steps, also known as DMEDI, are as follows: Define,
        Measure, Explore, Develop, Implement:
      </Paragraph>
      <Paragraph className="image-container">
        <img
          className="image-wrap-large"
          src={sixSigma}
          alt="Lean Six Sigma project management (DMEDI)"
        />
      </Paragraph>
      <span className="src-tag">
        Source: https://asana.com/sv/resources/lean-project-management
      </span>
      {/* <Paragraph>
        <img className="image-wrap" src={stakeholders} alt="Stakeholders" />
        <Text style={{ fontSize: "10px" }}>
          Source:
          https://mudassiriqbal.net/project-team-vs-project-management-team/
        </Text>
      </Paragraph> */}
    </Typography>
  );
};

export default ContentTwo;
