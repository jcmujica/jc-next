import { useState } from 'react'
import styles from 'styles/About.module.css'

const LENGTH_VALUES = {
  SHORT: 'shorter',
  MEDIUM: 'medium',
  LONG: 'longer'
}

export const About = () => {
  const [length, setLength] = useState(LENGTH_VALUES.SHORT)

  const handleLength = (length: string) => {
    switch (length) {
      case LENGTH_VALUES.SHORT:
        return (
          <p>{'Hello, I\'m JC Mujica, a passionate front-end developer, currently residing in the vibrant city of Santiago, Chile 🇨🇱. My journey in web development is fueled by a relentless pursuit of clean architecture and the art of creating highly reusable components in the front end.'}</p>
        )
      case LENGTH_VALUES.MEDIUM:
        return (
          <>
            <p>{'Hello, I\'m JC Mujica, a passionate front-end developer, currently residing in the vibrant city of Santiago, Chile 🇨🇱. My journey in web development is fueled by a relentless pursuit of clean architecture and the art of creating highly reusable components in the front end.'}</p>
            <p>{'My toolbox primarily consists of React.js ⚛️ and Javascript 🧑‍💻, but I\'m constantly excited to explore and embrace new technologies that can enhance the experiences I craft in my projects. With over [5+ years] of hands-on experience, I bring a wealth of knowledge in creating intuitive and dynamic user interfaces.'}</p>
          </>
        )
      case LENGTH_VALUES.LONG:
        return (
          <>
            <p>{'Hello, I\'m JC Mujica, a passionate front-end developer, currently residing in the vibrant city of Santiago, Chile 🇨🇱. My journey in web development is fueled by a relentless pursuit of clean architecture and the art of creating highly reusable components in the front end.'}</p>
            <p>{'My toolbox primarily consists of React.js ⚛️ and Javascript 🧑‍💻, but I\'m constantly excited to explore and embrace new technologies that can enhance the experiences I craft in my projects. With over [5+ years] of hands-on experience, I bring a wealth of knowledge in creating intuitive and dynamic user interfaces.'}</p>
            <p>{'Let\'s embark on a journey of innovation and creativity together. Feel free to explore my portfolio and discover the magic of web development through my eyes.'}</p>
          </>
        )
      default:
        break
    }
  }

  const handleLengthChange = (length: string) => {
    setLength(length)
  }

  return (
    <section className={styles.about} id='about'>
      <div className={styles.about__content}>
        <h2>About me</h2>
          {handleLength(length)}
      </div>
      <div className={styles.about__selector}>
        {Object.values(LENGTH_VALUES).map(key => (
          <button
            key={key}
            onClick={() => handleLengthChange(key)}
            className={`${length === key ? styles.about__button__active : styles.about__button}`}
          >
            {key}
          </button>
        ))}
      </div>
    </section>
  )
}
