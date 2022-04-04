import React from "react";
import styles from "./Feedback.style.css";
import { Form } from "./childs/Form";

export const Feedback: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerFeedback}>
                <div className={styles.header}>{"Хотите веб-сайт?"}</div>
                <div className={styles.text}>
                    {
                        'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
                    }
                </div>
                <Form />
            </div>
        </div>
    );
};
