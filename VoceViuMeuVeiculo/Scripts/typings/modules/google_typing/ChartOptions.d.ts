


declare module EpeInnovations.Google {

    module Charts.Option {

        export interface Animation {
            duration?: number;
            easing?: string;
            startup?: boolean;


        }

        export interface Annotation {
            datum?: any;
            domain?: Datum;
            boxStyle?: any;
            highContrast?: boolean;
            stem?: any;
            style?: string;
            textStyle?: TextStyle;
            alwaysOutside?: boolean;
        }

        export interface TextStyle {
            fontName?: string;
            fontSize?: number;
            bold?: boolean;
            italic?: boolean;
            // The color of the text.
            color?: string;
            // The color of the text outline.
            auraColor?: string;
            // The transparency of the text.
            opacity?: number;
        }

        export interface Datum {

        }

        export interface BackgroundColor {
            stroke?: string;
            strokeWidth?: number;
            fill?: string;

        }

        export interface Bar {
            groupWidth?: any;
        }

        export interface Legend {
            position?: string;
            alignment?: string;
            textStyle?: TextStyle;
            reverseCategories?: boolean;

        }

        export interface TrendLine {
            color?: string;
            degree?: number;
            labelInLegend?: string;
            lineWidth?: number;
            opacity?: number;
            pointSize?: number;
            pointsVisible?: boolean;
            showR2?: boolean;
            type?: string;
            visibleInLegend?: boolean;
        }

        export interface Tooltip {
            ignoreBounds?: boolean;
            isHtml?: boolean;
            showColorCode?: boolean;
            textStyle?: TextStyle;
            trigger?: string;
            trendLines?: Array<TrendLine>;

        }

        export interface Table {
            sortAscending?: boolean;
            sortColumn?: number;


        }

        export interface Focused {
            color?: string;
            opacity?: string;
        }

        export interface CrossHair {
            color?: string;
            focused?: Focused;
            opacity?: number;
            orientation?: string;
            selected?: Focused;
            trigger: string;


        }

        interface ColorAxis {
            minValue?: number;
            maxVaue?: number;
            values?: Array<number>;
            colors?: Array<string>;
            legend?: Legend;
            enableInteractivity?: boolean;

        }

        export interface ChartOptions {

            //#region  Annotation Chart
            allowHtml?: boolean;
            allValuesSuffix?: string;
            annotationsWidth?: number;
            dateFormat?: string;
            displayAnnotations?: boolean;
            displayAnnotationsFilter?: boolean;
            displayDateBarSeparator?: boolean;
            displayExactValues?: boolean;
            displayLegendDots?: boolean;
            displayLegendValues?: boolean;
            displayRangeSelector?: boolean;
            displayZoomButtons?: boolean;
            fill?: number;
            legendPosition?: string;
            max?: number;
            min?: number;
            numberFormats?: string;
            scaleColumns?: Array<number>;
            scaleFormat?: string;
            scaleType?: string;
            table?: Table;
            thickness?: number;
            zoomEndTime?: Date;
            zoomStartTime?: Date;
            //#endregion

            //#region Area Chart
            aggregationTarget?: string;
            areaOpacity?: number;
            axisTitlesPosition?: string;
            crosshair?: CrossHair;
            interpolateNulls?: boolean;
            lineDashStyle?: Array<number>;
            lineWidth?: number;
            pointShape?: string;
            pointSize?: number;
            pointsVisible?: boolean;
            reverseCategories?: boolean;
            selectionMode?: string;
            vAxes?: Array<Axis>;
            
            //#endregion

            //#region Bar Chart Options
            animation?: Animation;
            annotation?: Annotation;
            textStyle?: TextStyle;
            axysTitlesPosition?: string;
            backgroundColor?: BackgroundColor;
            bar?: Bar;
            bars?: string;
            chartArea?: ChartArea;
            height?: number;
            isStacked?: boolean;
            legend?: Legend;
            orientation?: string;
            series?: Array<any>;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: TextStyle;
            tooltip?: Tooltip;
            chart?: Chart;
            colors?: Array<string>;
            dataOpacity?: number;
            enableInteractivity?: boolean;
            explorer?: Explorer;
            focusTarget?: string;
            fontName?: string;
            forceIFrame?: boolean;
            hAxes?: Array<Axis>;
            hAxis?: Axis;
            vAxis?: Axis;
            width?: number;
            //#endregion

            //#region Bubble Chart
            bubble?: Bubble;
            colorAxis?: ColorAxis;
            //#endregion
        }

        export interface Bubble {
            opacity?: number;
            stroke?: string;
            textStyle?: TextStyle;
        }

        export interface Chart {
            title?: string;
            subtitle?: string;


        }

        export interface Explorer {
            actions?: Array<string>;
            axis?: string;
            keepInBounds?: boolean;
            maxZoomIn?: number;
            maxZoomOut?: number;
            zoomDelta?: number;

        }

        export interface Year {
            format?: string;
        }

        export interface Month {
            format?: string;
        }

        export interface Day {
            format?: string;
        }

        export interface Hour {
            format?: string;
        }

        export interface Minute {
            format?: string;
        }

        export interface Second {
            format?: string;
        }

        export interface Milisecond {
            format?: string;
        }

        export interface Unit {
            years?: Year;
            months?: Month;
            days?: Day;
            hours?: Hour;
            minutes?: Minute;
            seconds?: Second;
            milliseconds?: Milisecond;
        }

        export interface GridLines {
            color?: string;
            count?: number;
            units?: Unit;
        }

        export interface ViewWindow {
            max?: number;
            min?: number;
        }

        export interface MinorGridlines extends GridLines {

            logScale?: boolean;
            scaleType?: string;
            textStyle?: TextStyle;
            textPosition?: string;
            ticks?: Array<any>;
            title?: string;
            titleTextStyle?: TextStyle;
            maxValue?: number;
            minValue?: number;
            viewWindowMode?: string;
            viewWindow?: ViewWindow;
        }

        export interface Axis {
            baseline?: number;
            baselineColor?: number;
            direction?: number;
            format?: string;
            gridLines?: GridLines;
            minorGridlines?: MinorGridlines;
            logScale?: boolean;
            scaleType?: string;
            textPosition?: string;
            textStyle?: TextStyle;
            ticks?: string;
            title?: string;
            titleTextStyle?: TextStyle;
            allowContainerBoundaryTextCufoff?: boolean;
            slantedText?: boolean;
            slantedTextAngle?: number;
            maxAlternation?: number;
            maxTextLines?: number;
            minTextSpacing?: number;
            showTextEvery?: number;
            maxValue?: number;
            minValue?: number;
            viewWindowMode?: string;
            viewWindow: ViewWindow;


        }

        export interface ChartArea {
            backgroundColor?: string;
            left?: any;
            top?: any;
            width?: any;
            height?: any;

        }

    }
}
