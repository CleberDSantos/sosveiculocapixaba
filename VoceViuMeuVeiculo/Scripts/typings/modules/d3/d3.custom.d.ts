declare module d3 {

    export function legend(g: any, selector: string, callback: any, showColor: boolean, showIcon?: boolean): any;

    module svg {
        export function bubbleChart(): any;
        export function transform();

        export interface IBubbleChart {
            getClickedNode(): any;
            getTransition(): any;
            getCentralNode: any;
            getOptions: any;
            randomCirclesPositions(delta: any): any;
            getValues(): any;
            setup(): any;
            getCirclePositions(): any;
            moveToCentral(node: any): void;
            moveToReflection(node, swapped): void;
            reset(node: any): void;
            registerClickEvent(node): void;
            getNodes(): any;
            get(): any;
        }
    }
}

interface Array<T> {
    shuffle: () => any;
}

interface JQueryStatic {
    misc: any;
    microObserver: any;
}

interface Event {
    pageX: any;
    pageY: any;
}