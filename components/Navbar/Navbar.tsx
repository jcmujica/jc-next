import { useScroll } from 'hooks/useScroll';
import React from 'react'
import styles from 'styles/Navbar.module.css'

export const Navbar = () => {
    const scroll = useScroll();
    const scrolled = scroll !== 'top';

    return (
        <nav className={styles.navbar} style={{
            backgroundColor: scrolled ? 'rgba(19, 22, 95, 0.9)' : 'transparent'
        }} >
            <span className={styles.navbar__brand}>
                <a href="/" className={styles.navbar__brand__link}>
                    <img src="/assets/jc-blue.png"
                        alt="logo"
                        className={styles.navbar__brand__logo}
                    />
                </a>
            </span>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}>
                    <a href="#about" className={styles.navbar__link}>About</a>
                </li>
                <li className={styles.navbar__item}>
                    <a href="#contact" className={styles.navbar__link}>Contact</a>
                </li>
            </ul>
        </nav>
    )
};