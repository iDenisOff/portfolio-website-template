import React from "react";
import styles from "./Menu.style.css";
import { mainMenuItems } from "../../../../../../common/consts";
import { styler } from "../../../../../../utils/styler";
import { useLocation } from "react-router-dom";

export const Menu: React.FC = () => {
    const currentPathname = useLocation().pathname;

    return (
        <ul className={styles.container}>
            {mainMenuItems.map(({ name, route }) => (
                <li key={route} className={styles.menuItem}>
                    <span className={styler(styles.menuItemText, [route === currentPathname, styles.menuItemTextActive])}>{name}</span>
                </li>
            ))}
        </ul>
    );
};
