import React, { FC } from "react";
import { Typography } from "antd";
import principles from "../../assets/lean_principles.png";
import diffAgile from "../../assets/diff_agile_lean.png";
import pdca from "../../assets/pdca_cycle.png";
import sixSigma from "../../assets/six_sigma.png";
import "./Viewer.css";

const { Paragraph, Text, Title } = Typography;

const Content: FC = () => (
  <Typography className="viewer-content-wrap">
    <Title className="main-title">Introduction</Title>
    <Paragraph>
      <Text>2 minutes</Text>
    </Paragraph>

    <Title level={2}>What this course is about</Title>

    <Paragraph>
      This module is designed to give a short introduction into the topic of
      Lean project management. It has no formal prerequisites, but it is helpful
      to have some prior knowledge of project management.
    </Paragraph>
    <Paragraph>
      Upon completing this module, you should have basic knowledge about the
      benefits and background of Lean project management, the lean principles,
      the Deming cycle, and six sigma.
    </Paragraph>

    <Title level={2}>Introduction</Title>
    <Paragraph>
      Lean project management focuses on delivering a manufacturing project with
      more value and less waste. It does this by systematically eliminating
      waste in the value stream of the lean manufacturing process.
    </Paragraph>
    <Paragraph>
      To work, lean project management relies on continuous improvement. That
      means that every process in the overall business value stream is improved
      by applying the principle of greater value, reduced waste.
    </Paragraph>
    <Paragraph>
      Lean manufacturing was developed by Toyota, which is why it uses Japanese
      words to refer to the elimination of waste in a manufacturing system
      (Muda), waste created by overburden (Muri) and waste that comes about
      because of uneven workloads (Mura).
    </Paragraph>
    <Paragraph>
      The lean manufacturing methodology has 5 lean principles: value, value
      stream, pull system, continuous flow, and perfection. We'll learn about
      those in this module.
    </Paragraph>
    <span className="src-tag">
      Source: https://www.projectmanager.com/blog/lean-project-management
    </span>

    <br />
    <br />

    {/* NEXT */}
    <Title className="main-title">Background and Definition</Title>
    <Paragraph>
      <Text>2 minutes</Text>
    </Paragraph>
    <Title level={2}>Background</Title>
    <Paragraph>Lean Manufacturing - Toyota Production System</Paragraph>
    <Paragraph>
      Japanese engineers at Toyota invented the Toyota Production System (TPS)
      between 1948 and 1975, which served as the inspiration for what we know as
      the lean methodology today. The TPS was used to improve manufacturing and
      enhance interactions with suppliers and customers, as well as eliminate
      waste.
    </Paragraph>
    <Paragraph>
      John Krafcik was the one to introduce the lean approach to project
      management in his 1988 article titled, “Triumph of the Lean Production
      System.” Lean project management has influenced a whole subset of
      methodologies, including Agile, Kanban, and Scrum.
    </Paragraph>
    <span className="src-tag">
      Source: https://asana.com/sv/resources/lean-project-management
    </span>
    <br />
    <br />
    <Title level={2}>Definition of a lean project</Title>
    <Paragraph>
      Lean project management was developed in manufacturing, but the lean
      principles have spread to many different industries since. A lean project
      is simply one in which there is continuous improvement.
    </Paragraph>
    <Paragraph>
      That makes it part of the larger agile project management environment, in
      that it's flexible and willing to change as needed. It's all about
      delivering value to the customers and stakeholders, which is the same
      whether you're manufacturing a car or an app.
    </Paragraph>
    <Paragraph>
      One of the aspects of a lean project, that makes it unique from
      traditionally managed projects, is that it applies the five principles of
      lean project management. That's the first step in a lean project;
      identifying the five lean principles, then applying them to your project.
    </Paragraph>
    <Paragraph>
      Lean philosophy is focused on waste elimination. Any activity or material,
      which does not add value to the end product, has to be treated as waste.
    </Paragraph>
    <span className="src-tag">
      Source: https://www.sciencedirect.com/topics/engineering/lean-philosophy
    </span>
    <br />
    <span className="src-tag">
      Source: https://www.projectmanager.com/blog/lean-project-management
    </span>

    <br />
    <br />
    {/* NEXT */}
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
      it's time to map all the steps and processes in your manufacturing cycle.
      That sequence of steps is known as a value stream in lean project
      management. Identify every action that must take place in the project,
      including design, procurement, production, HR, admin and more. It's
      helpful to draw this value stream map on one page to illustrate the flow
      of resources.
    </Paragraph>
    <Paragraph>
      <strong>Continuous Flow</strong>: There shouldn't be any points that will
      create bottlenecks or interrupt production. According to LEI, “Make the
      value stream steps occur in tight sequence so that the product or service
      will have a continuous flow toward the customer.” It often requires
      cross-functional teams, but results in greater productivity.
    </Paragraph>
    <Paragraph>
      <strong>Pull System</strong>: This is when the customer, client or
      stakeholder “pulls” the product or service from the project as needed. In
      other words, the improvements of the prior step leads to faster
      time-to-market. The advantage of the pull system is no warehousing or
      stockpiling. That saves money for the business that can then be passed on
      to their customers.
    </Paragraph>
    <Paragraph>
      <strong>Perfection</strong>: The final step is spreading the philosophy
      throughout the entirety of your business. Lean is about continuous
      improvement. Therefore, everyone in the business must always striving to
      better themselves and the processes they're involved with. Often it takes
      several go-throughs to get to the value and really reduce the waste.
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
      different ways of achieving it. The scale to which the two approaches can
      extend in a company is also a strong differentiator here.
    </Paragraph>
    <Paragraph>
      Lean originates from manufacturing practices and is more of a systematic
      approach, an organization-wide method of streamlining how to generate
      value.
    </Paragraph>
    <Paragraph>
      Agile, with its roots in software engineering, also focuses on producing
      high value fast. But does it through applying short iterations and through
      attention to perfecting team collaboration.
    </Paragraph>
    <Paragraph>
      The bottom line is that both Lean and Agile help teams and companies to
      work better and deliver higher quality to their customers. Therefore, it's
      common for organizations to take advantage of both methods'
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

    <br />
    <br />
    {/* NEXT */}

    <Title className="main-title">Management tool</Title>
    <Paragraph>
      <Text>3 minutes</Text>
    </Paragraph>
    <Title level={2}>Management tools</Title>
    <Paragraph>
      There are several processes and tools available for professionals seeking
      to implement Lean. In this section we will briefly cover two: Six sigma
      and PDCA.
    </Paragraph>
    <Paragraph>
      You can use these to improve your product development workflow.
    </Paragraph>
    <Paragraph>
      When striving for continuous improvement, the tools will help you and your
      team reduce waste, improve productivity, and increase customer value.
    </Paragraph>
    <span className="src-tag">
      Source: https://asana.com/sv/resources/lean-project-management
    </span>
    <br />
    <br />
    <Title level={2}>Deming cycle (PDCA)</Title>
    <Paragraph>
      Dr. W. Edwards Deming developed the Deming Cycle in the 1950s. His method,
      also known as the Plan-Do-Check-Act cycle, or PDCA, was a revision of an
      earlier three-step problem-solving method created in the 1920s by Dr.
      Walter Shewhart.
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
      Lean Six Sigma is a lean management tool you can use to identify problems
      in your workflow. This tool has steps just like the Deming cycle, but it
      also has methods of analysis you can use alongside it. The Lean Six Sigma
      steps, also known as DMEDI, are as follows: Define, Measure, Explore,
      Develop, Implement:
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

    <br />
    <br />
    {/* NEXT */}

    <Title className="main-title">Summary</Title>
    <Paragraph>
      Through adhering to Lean project management ideas (and its management
      tools), you can achieve the following:
    </Paragraph>
    <ul>
      <li>Shorter lead times</li>
      <li>Cost reduction across the board </li>
      <li>Improved quality and customer satisfaction</li>
      <li>Better process efficiency and predictability</li>
    </ul>

    <br />
    <br />
    {/* NEXT */}

    <Title className="main-title">Knowledge Check</Title>

    <Paragraph>
      Choose the best response for each of the questions listed below.
    </Paragraph>

    <Paragraph>
      <Text>1. What does PDCA stand for?</Text>
      <ul>
        <li>Process, development, continuous improvement, awareness</li>
        <li>Planning, developing, challenging, addressing</li>
        <li>Plan, do, check, act</li>
      </ul>
    </Paragraph>

    <Paragraph>
      <Text>2. What is meant by Muri?</Text>
      <ul>
        <li>Waste created by overburden</li>
        <li>Value defined by the customer needs for a product</li>
        <li>Perfection</li>
      </ul>
    </Paragraph>

    <Paragraph>
      <Text>3. What is the main philosophy of Lean?</Text>
      <ul>
        <li>Deliver in iterations</li>
        <li>Eliminate waste</li>
        <li>Plan ahead</li>
      </ul>
    </Paragraph>
  </Typography>
);

export default Content;
