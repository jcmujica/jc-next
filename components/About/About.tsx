import { useState } from 'react'
import styles from 'styles/About.module.css'

const LENGTH = {
    SHORT: 'shorter',
    MEDIUM: 'medium',
    LONG: 'longer'
}

export const About = () => {
    const [length, setLength] = useState(LENGTH.LONG);

    const handleLength = (length: string) => {
        switch (length) {
            case LENGTH.SHORT:
                return (
                    <p>I'm a front end developer born in Venezuela 🇻🇪 but currently living in Santiago, Chile 🇨🇱.</p>
                )
            case LENGTH.MEDIUM:
                return (
                    <p>I'm a front end developer born in Venezuela 🇻🇪 but currently living in Santiago, Chile 🇨🇱. I have a passion for clean architecture in the front end and component reusability.</p>
                )
            case LENGTH.LONG:
                return (
                    <>
                        <p>I'm a front end developer born in Venezuela 🇻🇪 but currently living in Santiago, Chile 🇨🇱. I have a passion for clean architecture in the front end and component reusability.</p>
                        <p>I work moslty with React.js ⚛️ and Javascript 🧑‍💻 but I'm always eager to work with and learn new technologies to implement them in my projects.</p>
                    </>
                )
            default:
                break;
        }
    }

    const handleLengthChange = (length: string) => {
        setLength(length);
    }

    return (
        <section className={styles.about} id='about'>
            <div className={styles.about__content}>
                <h2>About me</h2>
                {handleLength(length)}
            </div>
            <div className={styles.about__avatar} />
            <div className={styles.about__selector}>
                {Object.values(LENGTH).map(key => (
                    <button
                        key={key}
                        onClick={() => handleLengthChange(key)}
                        className={length === key ? styles.about__button__active : styles.about__button}
                    >
                        {key}
                    </button>
                ))}
            </div>
        </section>
    )
};
