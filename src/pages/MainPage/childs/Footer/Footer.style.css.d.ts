declare namespace FooterStyleCssNamespace {
    export interface IFooterStyleCss {
        container: string;
        containerImages: string;
        containerText: string;
        image: string;
        text: string;
        textAuthor: string;
    }
}

declare const FooterStyleCssModule: FooterStyleCssNamespace.IFooterStyleCss;

export = FooterStyleCssModule;
