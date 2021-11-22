import React, { useState, useEffect } from 'react'
import styles from 'styles/Skills.module.css'
import { Card } from './Card';
import skillsConstant from 'constants/skills.json'

interface ISkill {
    name: string;
    src: string;
}

export const Skills = () => {
    const [skills, setSkills] = useState<ISkill[] | []>([]);
    const [resetValue, setResetValue] = useState(0);

    useEffect(() => {
        setSkills(skillsConstant);
    }, []);

    const handleRandomize = () => {
        const newSkills = [...skills];
        newSkills.sort(() => Math.random() - 0.5);
        handleReset();
        setSkills(newSkills);
    };

    const handleReset = () => {
        setResetValue(resetValue + 1);
    };

    return (
        <section className={styles.skills}>
            <h2>Skills</h2>
            <div className={styles.skills__list}>
                {skills.map(skill => (
                    <Card
                        key={skill.name}
                        name={skill.name}
                        src={skill.src}
                        reset={resetValue}
                    />
                ))}
            </div>
            <button
                onClick={handleRandomize}
                className={styles.skills__button}
            >
                Randomize my Skills
            </button>
        </section>
    )
};
