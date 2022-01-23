import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

import { FaSchool } from 'react-icons/fa'

import './ExperienceHero.css'
import SkillsHero from './SkillsHero';

const View = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex; 
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
`

// ['#BAB9FF', '#C9FFFE'], // blue -> purple
// ['#CEB9EC', '#FFA4F3'], // lilac -> pink

function ExperienceHero() {
  return (
    <View>
      <h1 className='title-experience'>My Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#BAB9FF', color: '#fff' }}
          contentArrowStyle={{ borderRight: '12px solid  #BAB9FF' }}
          date="2021 - present"
          iconStyle={{ background: 'white', color: '#BAB9FF' }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">Learning how to Code</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Courses and Self Taught</h4>
          <p className="vertical-timeline-element-para">
          For the past year I have been following a coding roadmap to learn HTML, CSS, Javascript, React, React Native, UX, Redux and Node.js. This has involved the successful completion of the following online courses:
            <ul>
              <li>The Complete React Native Course - Coursera </li>
              <li>Learn HTML, CSS, JavaScript, Redux and The Command Line - CodeAcademy</li>
              <li>Practical Javascript - Watch and Code</li>
              <li>CS50 - Harvard Computer Science Lectures </li>
              <li>Reading JavaScript and React documentation</li> 
            </ul>
            I have also applied this knowledge by building large and small projects which you can find on my GitHub profile. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ADD8E6', color: '#fff' }}
          contentArrowStyle={{ borderRight: '12px solid  #ADD8E6' }}
          date="2020 - present"
          iconStyle={{ background: 'white', color: '#ADD8E6' }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">Tech Recruiter</h3>
          <h4 className="vertical-timeline-element-subtitle">Better Placed Tech</h4>
          <p className="vertical-timeline-element-para">
          I am currently working as a recruiter specialising in software development in the North West, and have worked with a variety of companies, from unicorns to startups. This role has helped me gain a top-level understanding of digital products, technical terminology and improved my communication skills in a professional setting. Although this isn't a development role, I have gained a number of transferable soft skills like adaptability, initiative, teamwork and persistence.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#CEB9EC', color: '#fff' }}
          contentArrowStyle={{ borderRight: '12px solid  #CEB9EC' }}
          date="2018 - 2020"
          iconStyle={{ background: 'white', color: '#CEB9EC' }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">Recruitment Consultant</h3>
          <h4 className="vertical-timeline-element-subtitle">DR Newitt - IT, Development and Digital</h4>
          {/* <p className="vertical-timeline-element-para">
          I am currently working as a recruiter specialising in software development in the North West, and have worked with a variety of companies, from unicorns to startups. This role has helped me gain a top-level understanding of digital products, technical terminology and improved my communication skills in a professional setting. Although this isn't a development role, I have gained a number of transferable soft skills like adaptability, initiative, teamwork and persistence.
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFA4F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '12px solid  #FFA4F3' }}
          date="2009 - 2014"
          iconStyle={{ background: 'white', color: '#FFA4F3' }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">A Levels and GCSEs</h3>
          <h4 className="vertical-timeline-element-subtitle">Ashton Sixth Form and Mossley Hollins High</h4>
          <p className="vertical-timeline-element-para">
            A Levels: Maths (B), Physics (C), Chemistry (C), Biology (C)
            GCSEs: 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </View>
  )
}

export default ExperienceHero
