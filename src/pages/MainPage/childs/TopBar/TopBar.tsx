import React from "react";
import styles from "./TopBar.style.css";
import { Logo } from "./childs/Logo";
import { Menu } from "./childs/Menu";

export const TopBar: React.FC = () => {
    return (
        <div className={styles.container}>
            <Logo />
            <Menu />
        </div>
    );
};
