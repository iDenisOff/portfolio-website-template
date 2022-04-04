declare namespace FeedbackStyleCssNamespace {
    export interface IFeedbackStyleCss {
        container: string;
        containerFeedback: string;
        header: string;
        text: string;
    }
}

declare const FeedbackStyleCssModule: FeedbackStyleCssNamespace.IFeedbackStyleCss;

export = FeedbackStyleCssModule;
