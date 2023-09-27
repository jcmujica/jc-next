import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { IoLogoJavascript } from "react-icons/io"
import { DiReact } from "react-icons/di"
import styles from 'styles/Experience.module.css'
import 'react-vertical-timeline-component/style.min.css'

const JOBS = [
  {
    position: 'Fontend Tech Lead',
    company: 'FZ Sports',
    date: '2023 - Present',
    description: 'Leading frontend development for FZ Sports streaming services web platform.',
    icon: <DiReact />,
    iconStyle: { background: '#139aed', color: '#fff' }
  },
  {
    position: 'Frontend Developer',
    company: 'FZ Sports',
    date: '2020 - 2023',
    description: 'Frontend developer resposible for the development of the FZ Sports streaming services web platform.',
    icon: <DiReact />,
    iconStyle: { background: '#139aed', color: '#fff' }
  },
  {
    position: 'Software Engineer',
    company: 'Trajectory Inc.',
    date: '2018 - 2020',
    description: 'Javascript developer for Oracle Netsuite ERP.',
    icon: <IoLogoJavascript />,
    iconStyle: { background: '#f7df1e', color: '#000' }
  }
]

export const Experience = () => {
  return (
    <section
      className={styles.container}
      id='experience'
    >
      <h2>My experience</h2>
      <VerticalTimeline
        layout='1-column-left'
      >
        {JOBS.map(job => (
          <VerticalTimelineElement
            key={job.position}
            className='vertical-timeline-element--work'
            contentStyle={{ background: '#fff', color: '#2c2c2c' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date={job.date}
            iconStyle={job.iconStyle}
            icon={job.icon}
          >
            <h3 className='vertical-timeline-element-title'>{job.position}</h3>
            <h4
              className='vertical-timeline-element-subtitle'
              style={{
                color: '#2c2c2c',
                opacity: 0.5
              }}
            >
              {job.company}
            </h4>
            <p>{job.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}