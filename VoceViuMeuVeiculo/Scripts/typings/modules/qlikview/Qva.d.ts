declare module Qlikview {

    export interface IQva {

        LoadScript(scriptPath: string, delegate: () => void): void;
        AddExtension(name: string, extensionPaint: () => void): void;
        LoadCSS(scriptPath: string, delegate: () => void): void;
        Remote: string;
        Mgr: any;

    }

    export interface IQv {

        AddExtension(name: string, extensionPaint: () => void): void;
        GetAllDocuments(callbackFn: (object: Array<any>) => void): void;
        GetCurrentDocument(): IDocument;
        GetDocument(): IDocument;
        InitWorkBench(config: IConfig): void;
        LoadExtensionScripts(filesArray: Array<string>, callbackFn: () => void): void;

    }

    export interface IConfig {
        Anonymous: boolean;
        BodyOnLoadFunctionNames: any; //Can be a string or an Array of strings
        Bookmark: string;
        CustomIcons: ICustomIcons;
        Host: string;
        InitialSearch: Array<string>;
        InitialSelections: Array<string>;
        InlineStyle: boolean;
        Password: string;
        QvAjaxZfcPatch: string;
        Ticket: string;
        UserId: string;
        View: string;
        Xpassword: string;
        XuserId: string;
    }

    export interface ICustomIcons {
        CD: string;
        CO: string;
        LOC: string;
        PR: string;
        SA: string;
        SE: string;
        SEARCH: string;
        SP: string;
        ULC: string;
        XL: string;
    }

    export interface IDocument {
        AddBoomarkPaint(bookmarksSubscriber: IBookmarkPainter): void;
        Back(): void;
        BookMarks(): IBookmarks;
        Clear(): void;
        CloseSession(): void;
        Forward(): void;
        GetAllObjects(callbackFn: (array: Array<any>) => void): void;
        GetVariables(callbackFn: (variables: Array<any>) => void): void;
        GetCurrentSelections(currentSelectionOptions: ISelectionOptions): void;
        GetObject(objectName: string): IObject;
        LockSelections(): void;
        Redo(): void;
        SetBackgroundPaint(backgroundpaintFn: () => void): void;
        SetOnUpdateComplete(onupdatecomplete: () => void): void;
        SetTabrowPaint(tabrowPaintFn: () => void): void;
        SetToolbarPaint(toolbarPaintFn: () => void): void;
        SetVariable(oldName: string, newName: string): void;
        Undo(): void;
        UnlockSelections(): void;
    }

    export interface IBookmarks {
        DeleteBookmark(id: string): void;
        NewBookmark(name: string, additive: boolean, share: boolean, exclueselections: boolean, layoutstate: boolean, hide: boolean, showpopupinfo: boolean, infomsg: string, inputfilevaluesflag: boolean): void;
        SelectBookmark(id: string): void;
    }

    export interface IObject {
        Data: IData;
        DocumentMgr: any;
        Element: HTMLElement;
        Layout: ILayout;
        Name: string;
        ObjectMgr: any;
        PageBinder: any;
        Type: string;
        Click(): void;
        GetHeight(): number;
        GetText(): string;
        GetVariable(row): any;
        GetWidth(): number;
        IsInvalid(): void;
        SetOnUpdateComplete(onupdateComplete: () => void): void;
        SetVariable(text: string, row: number): void;
    }

    export interface IData {
        CellBorderStyles: IStyle;
        CellStyles: IStyle;
        HeaderRows: Array<Array<IHeaderCell>>
        Name: string;
        NewOffset: IDataPage;
        PageOffset: IDataPage;
        PageSize: IDataPage;
        Rows: Array<Array<IDataCell>>;
        Styles: IStyle;
        TotalSize: IDataPage;
        Type: string;
        ClearAllButThis(): void;
        ClearSelections(): void;
        Cycle(steps, colNo): void;
        DrillUp(steps, colNo): void;
        GetEnabled(): Array<any>;
        GetSelected(): Array<any>;
        Lock(): void;
        PageObject(owner: any, size: number, start: number): void;
        Search(text: string, toggle: boolean): void;
        SearchColumn(colNo: number, searchString: string, toggle: boolean): void;
        SelectAll(): void;
        SelectExcluded(): void;
        SelectPossible(): void;
        SelectRow(rowNo: number): void;
        SelectTexts(recordsToSelect: Array<string>): void;
        SelectTextsInColumn(column: number, toggle: boolean, recordsToSelect: Array<string>): void;
        SelectTextsInColumn(column: number, toggle: boolean, recordsToSelect: string);
        SelectValues(values: Array<number>, toggle: boolean): void;
        SelectValues(value: number, toogle: boolean): void;
        SelectValuesInColumn(colNo: number, values: Array<string>, isFinal: boolean): void;
        SetOffset(pageOffset: number): void;
        SetPagesize(pageSize: number): void;
        SetPagesizeX(val: number): void;
        SetPagesizeY(val: number): void;
        Unlock(): void;
    }

    export interface IDataPageObject {
        Count: number;
        Current: number;
        StartItem: number;
        Next(): void;
        Prev(): void;
        Set(page: number): void;
    }

    export interface ILayout {
        Axis: IAxis;
        Background: IBackground;
        Body: any;    //TODO: need to find out infor about Object class
        Caption: any; //TODO: need to find out infor about Object class
        Graph: any;   //TODO: need to find out infor about Object class
        ObjectId: string;
        Style: IStyle;
        Title: any;
        Value: any;
        SetProperty(name: string, value?: string, isfinal?: boolean): void;
    }

    export interface IDataPage {
        x: number;
        y: number;
    }

    export interface IDataCell {
        color: string;
        selecttype: string;
        state: string;
        text: string;
        value: string;
        data: number;
    }

    export interface IHeaderCell {
        style: number;
        text: string;
    }

    export interface IAxis {
        enabled: boolean;
        visible: boolean;
    }

    export interface IBackground {
        enabled: boolean;
        stamp: string;
        visible: boolean;
    }

    export interface IStyle {
        activeBorderColor: string;
        bordercolor: string;
        borderstyle: string;
        borderwidth: number;
        fontfamily: string;
        fontsize: number;
        fontstyle: string;
        fontweight: number;
        radiusbottomleft: number;
        radiusbottomright: number;
        radiustopleft: number;
        radisutopright: number;
        textdecoration: string;
    }

    export interface IFieldOptions {
        name: string;
        offset: number;
        size: number;
        state: string;
    }

    export interface ISelectionOptions {
        fields: Array<IFieldOptions>;
        onChange: (any) => void;
    }

    export interface IBookmarkPainter {
        Paint(): void;
    }

}
