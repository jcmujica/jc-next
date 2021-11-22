import React from 'react'
import styles from 'styles/About.module.css'

export const About = () => {
    return (
        <section className={styles.about} id='about'>
            <div className={styles.about__content}>
                <h2>About me</h2>
                <p>I'm a front end developer born in Venezuela 🇻🇪 but currently living in Santiago, Chile 🇨🇱. I have a passion for clean architecture in the front end and component reusability.</p>
                <p>I work moslty with React.js ⚛️ and Javascript 🧑‍💻 but I'm always eager to work with and learn new technologies to implement them in my projects.</p>
            </div>
            <div className={styles.about__avatar} />
        </section>
    )
};
