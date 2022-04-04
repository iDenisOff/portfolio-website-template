declare namespace SummaryStyleCssNamespace {
    export interface ISummaryStyleCss {
        button: string;
        container: string;
        containerButton: string;
        header: string;
        text: string;
    }
}

declare const SummaryStyleCssModule: SummaryStyleCssNamespace.ISummaryStyleCss;

export = SummaryStyleCssModule;
