import React from 'react'
import styles from 'styles/Footer.module.css';
import contactLinks from 'constants/contact.json';

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__right}>
                <div className={styles.footer__links}>
                    {contactLinks.map((link: any) => (
                        <div className={styles.footer__item}>
                            <a href={link.url}
                                className={styles.footer__link}
                            >
                                <img src={link.img}
                                    alt={link.name}
                                    className={styles.footer__img}
                                />
                                <span>{link.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
                <p className={styles.footer__text}>{`Copyright JC Mujica \u00A9 ${new Date().getFullYear()}. All rights reserved.`}</p>
            </div>
            <img src="/assets/jc-blue.png" alt="JC Logo" className={styles.footer__logo} />
        </footer>
    )
};
