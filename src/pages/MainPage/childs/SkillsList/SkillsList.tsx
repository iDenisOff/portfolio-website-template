import React from "react";
import styles from "./SkillsList.style.css";
import { Skill } from "./childs/Skill";
import img from "./images/face.png";

export const SkillsList: React.FC = () => {
    const repeat = 3;

    return (
        <div className={styles.container}>
            <div className={styles.skillsContainer}>
                <div className={styles.header}>{"Мои навыки"}</div>
                {[...Array(repeat)].map((e, i) => (
                    <Skill key={i} />
                ))}
            </div>
            <div className={styles.image}>
                <img src={img} alt={"face"} />
            </div>
        </div>
    );
};
