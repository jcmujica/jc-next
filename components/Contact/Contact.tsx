import React from 'react'
import styles from 'styles/Contact.module.css'
import contactLinks from 'constants/contact.json'

interface ILink {
    name: string;
    url: string;
    img: string;
}

export const Contact = () => {
    return (
        <section className={styles.contact} id='contact'>
            <h2>Contact</h2>
            <div className={styles.contact__list}>
                {contactLinks.map((link: any) => (
                    <div className={styles.contact__item}>
                        <a href={link.url}
                            className={styles.contact__link}
                        >
                            <img src={link.img}
                                alt={link.name}
                                className={styles.contact__img}
                            />
                            {link.name}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}