import React from "react";
import styles from "./Footer.style.css";
import img from "./images/vk.png";

export const Footer: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerText}>
                <p className={styles.textAuthor}>{"Иванов Иван"}</p>
                <p className={styles.text}>{"(с) 2022. Все права защищены."}</p>
            </div>
            <div className={styles.containerImages}>
                <img src={img} alt={"vk"} className={styles.image} style={{ gridColumnStart: "2" }} onClick={onClick} />
                <img src={img} alt={"vk"} className={styles.image} onClick={onClick} />
                <img src={img} alt={"vk"} className={styles.image} onClick={onClick} />
            </div>
        </div>
    );
};
