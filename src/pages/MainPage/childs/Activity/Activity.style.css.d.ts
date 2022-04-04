declare namespace ActivityStyleCssNamespace {
    export interface IActivityStyleCss {
        container: string;
        containerRow: string;
        image: string;
        imageContainer: string;
    }
}

declare const ActivityStyleCssModule: ActivityStyleCssNamespace.IActivityStyleCss;

export = ActivityStyleCssModule;
