import React from 'react'
import styles from 'styles/Footer.module.css';

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <p>{`Copyright JC Mujica \u00A9 ${new Date().getFullYear()}. All rights reserved.`}</p>
        </footer>
    )
};
