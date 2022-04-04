declare namespace AchievementStyleCssNamespace {
    export interface IAchievementStyleCss {
        container: string;
        number: string;
        text: string;
    }
}

declare const AchievementStyleCssModule: AchievementStyleCssNamespace.IAchievementStyleCss;

export = AchievementStyleCssModule;
