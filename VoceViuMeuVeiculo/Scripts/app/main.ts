/// <reference path="../typings/index.d.ts" />
namespace app {

    export class Main {

        constructor() {

            var map = new L.Map('map', { center: new L.LatLng(-20.346545, -40.360107), zoom: 9 });
            var googleLayer = new L.Google('ROADMAP');
            map.addLayer(googleLayer);

            map.locate({ setView: true, maxZoom: 16 });

            var drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);

            var drawControl = new L.Control.Draw({
                position: 'topleft',
                draw: {
                    polyline:false,
                    polygon: false,
                    circle: {
                        shapeOptions: {
                            color: '#662d91'
                        }
                    },
                    marker: false,
                    rectangle:false
                },
                edit: {
                    featureGroup: drawnItems,
                    remove: true
                }
            });

            map.addControl(drawControl);

            map.on('draw:created', (e : any) => {
                var type = e.layerType,
                    layer = e.layer;

                drawnItems.addLayer(layer);
            });
        }
    }

    new Main();
}
