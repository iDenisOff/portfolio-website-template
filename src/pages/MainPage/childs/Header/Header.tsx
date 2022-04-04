import React from "react";
import styles from "./Header.style.css";
import { LaptopIcon } from "../../../../components/Icons/LaptopIcon";
import { Summary } from "./childs/Summary";

export const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <LaptopIcon />
            </div>
            <Summary />
        </div>
    );
};
