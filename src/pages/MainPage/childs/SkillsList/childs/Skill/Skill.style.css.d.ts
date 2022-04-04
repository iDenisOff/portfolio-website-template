declare namespace SkillStyleCssNamespace {
    export interface ISkillStyleCss {
        container: string;
        progress: string;
        progressbarContainer: string;
        text: string;
    }
}

declare const SkillStyleCssModule: SkillStyleCssNamespace.ISkillStyleCss;

export = SkillStyleCssModule;
