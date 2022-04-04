import React from "react";
import styles from "./Skill.style.css";

export const Skill: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>{"Adobe Photoshop"}</div>
            <div className={styles.progressbarContainer}>
                <div className={styles.progress} />
            </div>
        </div>
    );
};
