import React from "react";
import styles from "./AchievementsList.style.css";
import { Achievement } from "./childs/Achievement";

export const AchievementsList: React.FC = () => {
    const repeat = 5;

    return (
        <div className={styles.container}>
            <Achievement style={{ gridColumnStart: 2 }} />
            {[...Array(repeat)].map((e, i) => (
                <Achievement key={i} />
            ))}
        </div>
    );
};
