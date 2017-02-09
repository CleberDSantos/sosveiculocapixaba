declare module L {

    export function heatLayer(points: any, options?: any): any;

    export var Tooltip: any;

    export var Google: any;

    export function geodesicPolyline(latLngs: any, options: any) : any;

    export var GeometryUtil: any;

    export interface GeometryUtil {

        readableDistance(area, metric, feet?): string;

    }

}