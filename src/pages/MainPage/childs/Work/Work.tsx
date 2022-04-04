import React from "react";
import styles from "./Work.style.css";
import ReactPlayer from "react-player";

export const Work: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>{"Как я работаю"}</div>
            <div className={styles.text}>
                {
                    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
                }
            </div>
            <div className={styles.videoContainer}>
                <ReactPlayer url={"https://youtu.be/_ITiwPMUzho"} style={{ margin: "auto" }} />
            </div>
        </div>
    );
};
