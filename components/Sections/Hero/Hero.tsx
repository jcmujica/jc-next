import { ParticlesComponent } from 'components/Particles/Particles';
import React from 'react'
import styles from 'styles/Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>
                    JC Mujica
                </h1>
                <h2 className={styles.hero__subtitle}>
                    Front end Developer
                </h2>
                <ParticlesComponent />
            </div>
        </section>
    )
};
