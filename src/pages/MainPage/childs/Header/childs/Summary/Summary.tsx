import React from "react";
import styles from "./Summary.style.css";

export const Summary: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>{"Дизайн и верстка"}</div>
            <div className={styles.text}>
                {
                    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
                }
            </div>
            <div className={styles.containerButton}>
                <button onClick={onClick} className={styles.button}>
                    {"Написать мне"}
                </button>
            </div>
        </div>
    );
};
