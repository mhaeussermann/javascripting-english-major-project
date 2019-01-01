let firstMap;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
// Set view on Germany
firstMap.setView([51.165, 10.455278], 6);

// Define Faserland places
Sylt = L.latLng(54.915833, 8.330833);
Hamburg = L.latLng(53.550556, 9.993333);
FrankfurtaM = L.latLng(50.110556, 8.682222);
Heidelberg = L.latLng(49.412222, 8.71);
Muenchen = L.latLng(48.137222, 11.575556);
Meersburg = L.latLng(47.695833, 9.270833);
Zuerich = L.latLng(47.37174, 8.54226);
Faserland = [Sylt, Hamburg, FrankfurtaM, Heidelberg, Muenchen, Meersburg, Zuerich];

// Set Faserland pointers
Faserland.forEach(function(element) {
    L.marker(element).addTo(firstMap);
  });

// Draw Faserland line
polyline = L.polyline(Faserland, {color: 'black'}).addTo(firstMap);

// Define Wintermaerchen places
Aachen = L.latLng(50.776667, 6.083611);
Koeln = L.latLng(50.938056, 6.956944);
Muelheim = L.latLng(51.433056, 6.883056);
Hagen = L.latLng(51.359444, 7.475);
Unna = L.latLng(51.534722, 7.688889);
Paderborn = L.latLng(51.719444, 8.757222);
Minden = L.latLng(52.283333, 8.916667);
Hannover = L.latLng(52.374444, 9.738611);
Wintermaerchen = [Aachen, Koeln, Muelheim, Hagen, Unna, Paderborn, Minden, Hannover, Hamburg];

// Set Wintermaerchen pointers
Wintermaerchen.forEach(function(element) {
    L.marker(element).addTo(firstMap);
  });

// Draw Wintermaerchen line
polyline = L.polyline(Wintermaerchen, {color: 'red'}).addTo(firstMap);

// Define Wintermaerchen (actual) places
Bruessel = L.latLng(50.843333, 4.363056);
Muenster = L.latLng(51.962944, 7.628694);
Osnabrueck = L.latLng(52.278889, 8.043056);
Bremen = L.latLng(53.075878, 8.807311);
actWintermaerchen = [Bruessel, Muenster, Osnabrueck, Bremen, Hamburg];

// Set Wintermaerchen (actual) pointers
actWintermaerchen.forEach(function(element) {
  L.marker(element).addTo(firstMap);
});

// Draw Wintermaerchen (actual) line
polyline = L.polyline(actWintermaerchen, {color: 'green'}).addTo(firstMap);
