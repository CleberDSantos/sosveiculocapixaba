/// <reference path="leaflet.d.ts" />

declare namespace L {

     namespace control {
        /**
          * Creates an attribution control.
          */
         export function autolayers(config: any, map: Map): Control;

         export function setupWgs84Projection():any;
             
         }

    }