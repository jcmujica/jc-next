import React from 'react'
import styles from 'styles/Projects.module.css'
import projectsList from 'constants/projects.json'

export const Projects = () => {
    return (
        <section className={styles.projects} id='projects'>
            <h2>My projects</h2>
            <div className={styles.projects__container}>
                {projectsList.map((project, index) => {
                    return (
                        <div className={styles.project} key={index}>
                            <a href={project.url} target='_blank' rel='noopener noreferrer'>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </a>
                        </div>
                    )
                }
                )}
            </div>
        </section>
    )
};
