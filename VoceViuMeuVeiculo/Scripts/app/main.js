/// <reference path="../typings/index.d.ts" />
var app;
(function (app) {
    var Main = (function () {
        function Main() {
            var map = new L.Map('map', { center: new L.LatLng(-20.346545, -40.360107), zoom: 9 });
            map.locate({ setView: true, maxZoom: 16 });
            var drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);
            var drawControl = new L.Control.Draw({
                position: 'topleft',
                draw: {
                    polyline: false,
                    polygon: false,
                    circle: {
                        shapeOptions: {
                            color: '#662d91'
                        }
                    },
                    marker: false,
                    rectangle: false
                },
                edit: {
                    featureGroup: drawnItems,
                    remove: true
                }
            });
            var googleLayer = new L.Google('ROADMAP');
            map.addLayer(googleLayer);
            map.addControl(drawControl);
            map.on('draw:created', function (e) {
                var layer = e.layer;
                drawnItems.addLayer(layer);
            });
        }
        return Main;
    }());
    app.Main = Main;
    new Main();
})(app || (app = {}));
