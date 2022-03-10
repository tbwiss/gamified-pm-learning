import React, { FC } from "react";
import { Typography } from "antd";
import principles from "../assets/lean_principles.png";
import diffAgile from "../assets/diff_agile_lean.png";
import "./Content.css";

const { Title, Paragraph, Text } = Typography;

const ContentTwo: FC = () => {
  return (
    <Typography>
      <Title className="main-title">The Lean principles</Title>
      <Paragraph>
        <Text>3 minutes</Text>
      </Paragraph>
      <Title level={2}>The lean principles</Title>
      <Paragraph>
        These principles have been around for a while, but were codified in 1997
        by the Lean Enterprises Institute (LEI):
      </Paragraph>
      <Paragraph>
        <strong>Identifying customer value</strong>: Value is defined by your
        customer, client or stakeholder. Value can be the quality, timeline or
        price point of your deliverable—though it's likely a bit of all three.
        Know what requirements you need, and what expectations to meet.
      </Paragraph>
      <Paragraph>
        <strong>Managing the value Stream</strong>: You have defined value, now
        it's time to map all the steps and processes in your manufacturing
        cycle. That sequence of steps is known as a value stream in lean project
        management. Identify every action that must take place in the project,
        including design, procurement, production, HR, admin and more. It's
        helpful to draw this value stream map on one page to illustrate the flow
        of resources.
      </Paragraph>
      <Paragraph>
        <strong>Continuous Flow</strong>: There shouldn't be any points that
        will create bottlenecks or interrupt production. According to LEI, “Make
        the value stream steps occur in tight sequence so that the product or
        service will have a continuous flow toward the customer.” It often
        requires cross-functional teams, but results in greater productivity.
      </Paragraph>
      <Paragraph>
        <strong>Pull System</strong>: This is when the customer, client or
        stakeholder “pulls” the product or service from the project as needed.
        In other words, the improvements of the prior step leads to faster
        time-to-market. The advantage of the pull system is no warehousing or
        stockpiling. That saves money for the business that can then be passed
        on to their customers.
      </Paragraph>
      <Paragraph>
        <strong>Perfection</strong>: The final step is spreading the philosophy
        throughout the entirety of your business. Lean is about continuous
        improvement. Therefore, everyone in the business must always striving to
        better themselves and the processes they're involved with. Often it
        takes several go-throughs to get to the value and really reduce the
        waste.
      </Paragraph>
      <Paragraph className="image-container">
        <img
          className="image-wrap"
          src={principles}
          alt="The five lean principles"
        />
      </Paragraph>
      <span className="src-tag">
        Source: https://www.projectmanager.com/blog/lean-project-management
      </span>
      <br />
      <br />
      <Title level={2}>Difference between agile and lean</Title>
      <Paragraph>
        Lean and Agile terms are sometimes used interchangeably, which - while
        harmless - isn't necessarily correct. Both Lean and Agile describe a way
        of approaching work in a value-focused way, but they recommend somewhat
        different ways of achieving it. The scale to which the two approaches
        can extend in a company is also a strong differentiator here.
      </Paragraph>
      <Paragraph>
        Lean originates from manufacturing practices and is more of a systematic
        approach, an organization-wide method of streamlining how to generate
        value.
      </Paragraph>
      <Paragraph>
        Agile, with its roots in software engineering, also focuses on producing
        high value fast. But does it through applying short iterations and
        through attention to perfecting team collaboration.
      </Paragraph>
      <Paragraph>
        The bottom line is that both Lean and Agile help teams and companies to
        work better and deliver higher quality to their customers. Therefore,
        it's common for organizations to take advantage of both methods'
        recommendations to achieve the best possible results.
      </Paragraph>
      <Paragraph className="image-container">
        <img
          className="image-wrap"
          src={diffAgile}
          alt="Difference between agile and lean"
        />
      </Paragraph>
      <span className="src-tag">
        Source: https://kanbantool.com/kanban-guide/lean-project-management
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
