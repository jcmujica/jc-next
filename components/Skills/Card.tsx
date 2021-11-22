import React, { useState, useEffect } from 'react'
import styles from 'styles/Skills.module.css'

interface ICardProps {
    name: string;
    src: string;
    reset: number;
}


export const Card = (props: ICardProps) => {
    const [clicked, setClicked] = useState(false);
    const { name = '', src = '/', reset } = props;

    useEffect(() => {
        setClicked(false);
    }, [reset]);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div
            className={
                !clicked ?
                    `${styles.card}` :
                    `${styles.card} ${styles.card__animated}`
            }
            onClick={handleClick}
        >
            <h3 className={styles.card__name}>{name}</h3>
            <img src={src} alt={name} className={styles.card__img} />
        </div>
    )
}
