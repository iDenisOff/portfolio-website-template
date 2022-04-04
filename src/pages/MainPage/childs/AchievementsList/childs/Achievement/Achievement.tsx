import React from "react";
import styles from "./Achievement.style.css";
import { AchievementIcon } from "../../../../../../components/Icons/AchievementIcon";

export const Achievement: React.FC<{ style?: React.CSSProperties }> = (props) => {
    return (
        <div className={styles.container} style={props.style}>
            <AchievementIcon />
            <span>
                <p className={styles.number}>{"40+"}</p>
                <p className={styles.text}>{"проектов"}</p>
            </span>
        </div>
    );
};
