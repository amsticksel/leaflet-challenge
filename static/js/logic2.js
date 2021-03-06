// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

var runMarkers = [];

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";


// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {
    // Once we get a response, send the data.features object to the createFeatures function
        for (var i = 0; i < data.features.length; i++) {
            console.log(data.features[i].properties.sig);
        // var  earthquakeData = data[i];
            if (data.features[i].properties.mag > -1 && data.features[i].properties.mag <= 1){
                runMarkers.push(L.circle([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {
                    stroke: false,
                    fillColor: "purple",
                    fillOpacity: 0.75,
                    radius: (data.features[i].properties.sig * 1000)
                }).bindPopup(
                    "<i>" + data.features[i].properties.place + "</i><hr>" +
                    "<b>Magnitude</b>: " + data.features[i].properties.mag + "<br>" +
                    "<b>Signficance</b>: " + data.features[i].properties.sig + "<br>" +
                    "<b>Lat Lng</b>: " + data.features[i].geometry.coordinates[1] + "," + data.features[i].geometry.coordinates[0] + "<br>" +
                    "<b>Depth</b>: " + data.features[i].geometry.coordinates[2] + " Kilometers<br>"));
                continue;
            }
            else if (data.features[i].properties.mag > 1 && data.features[i].properties.mag <= 2) {
                runMarkers.push(L.circle([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {
                    stroke: false,
                    fillColor: "blue",
                    fillOpacity: 0.75,
                    radius: (data.features[i].properties.sig * 1000)
                }).bindPopup(
                    "<i>" + data.features[i].properties.place + "</i><hr>" +
                    "<b>Magnitude</b>: " + data.features[i].properties.mag + "<br>" +
                    "<b>Signficance</b>: " + data.features[i].properties.sig + "<br>" +
                    "<b>Lat Lng</b>: " + data.features[i].geometry.coordinates[1] + "," + data.features[i].geometry.coordinates[0] + "<br>" +
                    "<b>Depth</b>: " + data.features[i].geometry.coordinates[2] + " Kilometers<br>"));
                continue;
            }
            else if (data.features[i].properties.mag > 2 && data.features[i].properties.mag <= 3) {
                runMarkers.push(L.circle([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {
                    stroke: false,
                    fillColor: "green",
                    fillOpacity: 0.75,
                    radius: (data.features[i].properties.sig * 1000)
                }).bindPopup(
                    "<i>" + data.features[i].properties.place + "</i><hr>" +
                    "<b>Magnitude</b>: " + data.features[i].properties.mag + "<br>" +
                    "<b>Signficance</b>: " + data.features[i].properties.sig + "<br>" +
                    "<b>Lat Lng</b>: " + data.features[i].geometry.coordinates[1] + "," + data.features[i].geometry.coordinates[0] + "<br>" +
                    "<b>Depth</b>: " + data.features[i].geometry.coordinates[2] + " Kilometers<br>"));
                continue;
            }
            else if (data.features[i].properties.mag > 3 && data.features[i].properties.mag <= 4) {
                runMarkers.push(L.circle([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {
                    stroke: false,
                    fillColor: "yellow",
                    fillOpacity: 0.75,
                    radius: (data.features[i].properties.sig * 1000)
                }).bindPopup(
                    "<i>" + data.features[i].properties.place + "</i><hr>" +
                    "<b>Magnitude</b>: " + data.features[i].properties.mag + "<br>" +
                    "<b>Signficance</b>: " + data.features[i].properties.sig + "<br>" +
                    "<b>Lat Lng</b>: " + data.features[i].geometry.coordinates[1] + "," + data.features[i].geometry.coordinates[0] + "<br>" +
                    "<b>Depth</b>: " + data.features[i].geometry.coordinates[2] + " Kilometers<br>"));
                continue;
            }
            else if (data.features[i].properties.mag > 4 && data.features[i].properties.mag <= 5) {
                runMarkers.push(L.circle([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {
                    stroke: false,
                    fillColor: "orange",
                    fillOpacity: 0.75,
                    radius: (data.features[i].properties.sig * 1000)
                }).bindPopup(
                    "<i>" + data.features[i].properties.place + "</i><hr>" +
                    "<b>Magnitude</b>: " + data.features[i].properties.mag + "<br>" +
                    "<b>Signficance</b>: " + data.features[i].properties.sig + "<br>" +
                    "<b>Lat Lng</b>: " + data.features[i].geometry.coordinates[1] + "," + data.features[i].geometry.coordinates[0] + "<br>" +
                    "<b>Depth</b>: " + data.features[i].geometry.coordinates[2] + " Kilometers<br>"));
                continue;
            }
            else{
                runMarkers.push(L.circle([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {
                    stroke: false,
                    fillColor: "red",
                    fillOpacity: 0.75,
                    radius: (data.features[i].properties.sig * 1000)
                }).bindPopup(
                    "<i>" + data.features[i].properties.place + "</i><hr>" +
                    "<b>Magnitude</b>: " + data.features[i].properties.mag + "<br>" +
                    "<b>Signficance</b>: " + data.features[i].properties.sig + "<br>" +
                    "<b>Lat Lng</b>: " + data.features[i].geometry.coordinates[1] + "," + data.features[i].geometry.coordinates[0] + "<br>" +
                    "<b>Depth</b>: " + data.features[i].geometry.coordinates[2] + " Kilometers<br>"));
                continue;
            }};


    



    var runLayer = L.layerGroup(runMarkers);





    var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        maxZoom: 18,
        minZoom:1,
        id: "mapbox.satellite",
        accessToken: API_KEY
    });

    var street = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        maxZoom: 18,
        minZoom:1,
        id: "mapbox.street",
        accessToken: API_KEY
    });


    var myMap = L.map("map", {
        center: [40.782, -73.964],
        zoom: 2,
        layers: [satellite, runLayer]
    });



    // Overlays that may be toggled on or off
    var overlayMaps = {
        "Earthquakes": runLayer,
    };

    var baseMaps = {
        "Satellite": satellite,
        "Street": street
    };
    // Add a tile layer (the background map image) to our map
    // We use the addTo method to add objects to our map
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);

    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'legend'),
            mags = ["-1 to 1", "1 to 2", "2-3", "3-4", "4-5", "5+"]
            colors = ["purple", "blue", "green", "yellow","orange","red"];
        div.id = "legend";
        div.innerHTML = "<strong>Magnitude Colors</strong><br><br>";
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < mags.length; i++) {
            div.innerHTML +=
                 "<div class='color-"+colors[i]+"'></div>"+"<div class='info'>&nbsp;&nbsp;"+mags[i]+"</div><br>";
        }

        return div;
    };

    legend.addTo(myMap);

});

