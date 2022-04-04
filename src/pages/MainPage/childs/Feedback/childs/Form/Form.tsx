import React from "react";
import styles from "./Form.style.css";

export const Form: React.FC = () => {
    const onClick = () => {
        console.log("onClick");
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerInput}>
                <input className={styles.input} placeholder={"Ваше имя"} />
                <input className={styles.input} placeholder={"Ваш e-mail"} style={{ gridColumnStart: "3" }} />
            </div>
            <div className={styles.containerTextarea}>
                <textarea className={styles.textarea} placeholder={"Сообщение"} />
            </div>
            <div className={styles.containerButton}>
                <button onClick={onClick} className={styles.button}>
                    {"Отправить"}
                </button>
            </div>
        </div>
    );
};
