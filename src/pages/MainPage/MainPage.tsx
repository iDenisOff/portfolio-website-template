import React from "react";
import styles from "./MainPage.style.css";
import { TopBar } from "./childs/TopBar";
import { Header } from "./childs/Header";
import { AboutMe } from "./childs/AboutMe";
import { AchievementsList } from "./childs/AchievementsList";
import { SkillsList } from "./childs/SkillsList";
import { Work } from "./childs/Work";
import { StackList } from "./childs/StackList";
import { Feedback } from "./childs/Feedback";
import { Footer } from "./childs/Footer";
import { Activity } from "./childs/Activity";

export const MainPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <TopBar />
            <Header />
            <AboutMe />
            <AchievementsList />
            <SkillsList />
            <Work />
            <Activity />
            <StackList />
            <Feedback />
            <Footer />
        </div>
    );
};
