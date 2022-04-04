import React from "react";
import styles from "./Activity.style.css";
import notes from "./images/notes.png";
import work from "./images/work.png";

export const Activity: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerRow}>
                <div className={styles.imageContainer}>
                    <img src={notes} alt={"notes"} className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={work} alt={"work"} className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={notes} alt={"notes"} className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={work} alt={"work"} className={styles.image} />
                </div>
            </div>
            <div className={styles.containerRow}>
                <div className={styles.imageContainer}>
                    <img src={work} alt={"work"} className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={notes} alt={"notes"} className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={work} alt={"work"} className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={notes} alt={"notes"} className={styles.image} />
                </div>
            </div>
        </div>
    );
};
