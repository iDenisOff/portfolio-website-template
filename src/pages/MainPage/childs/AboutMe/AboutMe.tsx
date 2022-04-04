import React from "react";
import styles from "./AboutMe.style.css";

export const AboutMe: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>{"Обо мне"}</div>
            <div className={styles.text}>
                {
                    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
                }
            </div>
        </div>
    );
};
