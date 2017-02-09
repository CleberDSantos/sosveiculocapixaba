declare module Qlikview {

    export interface IQlikviewExtensionBase {

        init(scripts: Array<string>, callbackFn: () => void): void;
        //loadCss(css: string, callBackFn: () => void): void;

    }

}