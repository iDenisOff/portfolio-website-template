declare namespace FormStyleCssNamespace {
    export interface IFormStyleCss {
        button: string;
        container: string;
        containerButton: string;
        containerInput: string;
        containerTextarea: string;
        input: string;
        textarea: string;
    }
}

declare const FormStyleCssModule: FormStyleCssNamespace.IFormStyleCss;

export = FormStyleCssModule;
