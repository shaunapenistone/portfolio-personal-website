import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

import { FaSchool } from 'react-icons/fa'

import './ExperienceHero.css'

const View = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex; 
  align-items: center;
  margin: 50px
`

// ['#BAB9FF', '#C9FFFE'], // blue -> purple
// ['#CEB9EC', '#FFA4F3'], // lilac -> pink

function ExperienceHero() {
  return (
    <View>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#BAB9FF', color: '#fff' }}
          contentArrowStyle={{ borderRight: '12px solid  #BAB9FF' }}
          date="2011 - present"
          iconStyle={{ background: 'white', color: '#BAB9FF' }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p className="vertical-timeline-element-para">
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFA4F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '12px solid  #FFA4F3' }}
          date="2011 - present"
          iconStyle={{ background: 'white', color: '#FFA4F3' }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p className="vertical-timeline-element-para">
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#CEB9EC', color: '#fff' }}
          contentArrowStyle={{ borderRight: '12px solid  #CEB9EC' }}
          date="2011 - present"
          iconStyle={{ background: 'white', color: '#CEB9EC' }}
          icon={<FaSchool />}
          animate={true}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p className="vertical-timeline-element-para">
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </View>
  )
}

export default ExperienceHero
