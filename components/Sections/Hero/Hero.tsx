import { ParticlesComponent } from 'components/Particles/Particles'
import Image from 'next/image'
import React from 'react'
import styles from 'styles/Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__title}>
            JC Mujica
          </h1>
          <h2 className={styles.hero__subtitle}>
            Frontend Developer
          </h2>
        </div>
        <Image
          src={'/assets/profile-picture.png'}
          alt="JC Mujica"
          width={200}
          height={200}
          className={styles.hero__image}
        />
      </div>
      <ParticlesComponent />
    </section>
  )
}
