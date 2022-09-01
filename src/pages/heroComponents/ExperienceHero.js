import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaSchool } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import "./ExperienceHero.css";

const View = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
`;

function ExperienceHero() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <View>
      <motion.h1
        className="title-experience"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        My Experience
      </motion.h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#CEB9EC", color: "#fff" }}
          contentArrowStyle={{ borderRight: "12px solid  #CEB9EC" }}
          date="Feb '22 - Present"
          iconStyle={{ background: "white", color: "#CEB9EC" }}
          icon={<MdWork />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Jisc - Octopus</h4>
          <p className="vertical-timeline-element-para">
            I'm currently working on the open source Octopus project, a tech
            startup that enables scientists to publish their work online. I work
            as a full stack developer, and can independently and productively
            write clean and maintainable code for both the front and back end.
            In addition, I have successfully built RESTful API endpoints and
            user friendly components.
          </p>
          <p className="vertical-timeline-element-para">
            I've written tests for all of the API endpoints I've created and am
            currently learning how to write tests for the front-end. I've
            created several features such as a bookmark feature, static pages, a
            complex form which enables authors to add affiliated organisations
            and I regularly resolve bugs.
          </p>
          <p className="vertical-timeline-element-para">
            I work with the following tech stack: React, Serverless, JavaScript,
            Github, Next, TypeScript, Prisma, Tailwind, HTML and Jest.
          </p>
          <p className="vertical-timeline-element-para">
            Outside of coding, I attend daily stand-ups, meet with our product
            manager to understand requirements for features, review other
            programmer's code, assist in planning sprints and pair program.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFA4F3", color: "#fff" }}
          contentArrowStyle={{ borderRight: "12px solid  #FFA4F3" }}
          date="Dec '21 - Present"
          iconStyle={{ background: "white", color: "#FFA4F3" }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer (Freelance)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Lavandi Talent</h4>
          <p className="vertical-timeline-element-para">
            I am currently building a new website for Lavandi Talent using Next,
            React, Javascript, Tailwind, Contentful and Github. This is a
            standalone role that I fulfil in the evenings or weekends and is due
            to launch by the end of September. Lavandi's new website is built
            with a optimum performance, onsite SEO, a memorable, unique UX and
            design in mind.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#BAB9FF", color: "#fff" }}
          contentArrowStyle={{ borderRight: "12px solid  #BAB9FF" }}
          date="2021 - present"
          iconStyle={{ background: "white", color: "#BAB9FF" }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">
            Learning how to Code
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Online Courses and Self Taught
          </h4>
          <p className="vertical-timeline-element-para">
            For the past year I have been following a coding roadmap to learn
            HTML, CSS, Javascript, React, React Native, UX, Redux and Node.js.
            This has involved the successful completion of the following online
            courses:
            <ul>
              <li>The Complete React Native Course - Coursera </li>
              <li>
                Learn HTML, CSS, JavaScript, Redux and The Command Line -
                CodeAcademy
              </li>
              <li>Practical Javascript - Watch and Code</li>
              <li>CS50 - Harvard Computer Science Lectures </li>
              <li>Reading JavaScript and React documentation</li>
            </ul>
            I have also applied this knowledge by building large and small
            projects which you can find on my GitHub profile.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ADD8E6", color: "#fff" }}
          contentArrowStyle={{ borderRight: "12px solid  #ADD8E6" }}
          date="2020 - present"
          iconStyle={{ background: "white", color: "#ADD8E6" }}
          icon={<MdWork />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">Tech Recruiter</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Better Placed Tech
          </h4>
          <p className="vertical-timeline-element-para">
            I am currently working as a recruiter specialising in software
            development in the North West, and have worked with a variety of
            companies, from unicorns to startups. This role has helped me gain a
            top-level understanding of digital products, technical terminology
            and improved my communication skills in a professional setting.
            Although this isn't a development role, I have gained a number of
            transferable soft skills like adaptability, initiative, teamwork and
            persistence.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#CEB9EC", color: "#fff" }}
          contentArrowStyle={{ borderRight: "12px solid  #CEB9EC" }}
          date="2018 - 2020"
          iconStyle={{ background: "white", color: "#CEB9EC" }}
          icon={<MdWork />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">
            Recruitment Consultant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            DR Newitt - IT, Development and Digital
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFA4F3", color: "#fff" }}
          contentArrowStyle={{ borderRight: "12px solid  #FFA4F3" }}
          date="2009 - 2014"
          iconStyle={{ background: "white", color: "#FFA4F3" }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">
            A Levels and GCSEs
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ashton Sixth Form and Mossley Hollins High
          </h4>
          <p className="vertical-timeline-element-para">
            A Levels: Maths, Physics, Chemistry, Biology GCSEs:
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </View>
  );
}

export default ExperienceHero;
