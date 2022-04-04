import React from "react";
import styles from "./StackList.style.css";
import img from "./images/Microsoft.png";

export const StackList: React.FC = () => {
    const repeat = 3;

    return (
        <div className={styles.container}>
            <img src={img} alt={"Microsoft"} style={{ gridColumnStart: 2 }} />
            {[...Array(repeat)].map((e, i) => (
                <img src={img} alt={"Microsoft"} key={i} />
            ))}
        </div>
    );
};
