declare namespace WorkStyleCssNamespace {
    export interface IWorkStyleCss {
        container: string;
        header: string;
        text: string;
        videoContainer: string;
    }
}

declare const WorkStyleCssModule: WorkStyleCssNamespace.IWorkStyleCss;

export = WorkStyleCssModule;
