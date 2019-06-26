// Markdown-it renderer
let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);

["america", "asia",
  "europe", "nineteenth-intro",
  "africa"].forEach(function(tab){
  // Create a variable tab that has the name as a string.
  $.ajax({
    // tab + ".md" yields, for example, "rampart.md".
    url: "https://raw.githubusercontent.com/mhaeussermann/javascripting-english-major-project/master/" + tab + ".md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      // "#rampart", for example.
      $("#" + tab).html(html);
    }
  });
});

// Load the list of cities / places
$.ajax({
  url: "https://raw.githubusercontent.com/mhaeussermann/javascripting-english-major-project/master/citylist.md",
  success: function(markdown){
    let html;
    html = md.render(markdown);
    $("#citylist").html(html);
  }
});

// Define map
let map, tileLayer;
map = L.map("nineteenth-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
map.setView([52.520008, 13.404954], 3);

// Define the features array.
let nineteenthFeatures;
$.getJSON("https://raw.githubusercontent.com/mhaeussermann/javascripting-english-major-project/master/19th_places_counted.geojson", function(data){
  // Define the Leaflet layer.
  let nineteenthLayer;
  // Iterate over the .features property of the GeoJSON object to
  // create an array of objects (features), with every object’s
  // properties as noted.
  nineteenthFeatures = data.features.map(function(feature){
    // This return returns an object.
    return {
      name: feature.properties.name,
      html: feature.properties.html,
      tab: feature.properties.tab,
      mentions: feature.properties.mentions,
      lines: feature.properties.lines,
      wikipedia: feature.properties.wikipedia,
      // Create an L.latLng object out of the GeoJSON coordinates.
      // Remember that in GeoJSON, the coordinates are reversed
      // (longitude, then latitude).
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  // Now create a Leaflet feature group made up of markers for each
  // object in nineteenthFeatures.
  nineteenthLayer = L.featureGroup(nineteenthFeatures.map(function(feature){
    let popupContent;
    popupContent = "<h4>" + feature.name + "</h4>";
    popupContent += "This place was mentioned <b>" + feature.mentions + "</b> times in the corpus.<br/>";
    popupContent += "Read about " + feature.name + " on <a href='"+ feature.wikipedia + "'>Wikipedia</a>.";
    return L.marker(feature.latLng).bindPopup(popupContent);
    })
  )
  // Add the layer to the map.
  nineteenthLayer.addTo(map);
  // Redraw the map so that all the markers are visible.
  map.fitBounds(nineteenthLayer.getBounds());
  // Zoom out one level to give some padding.
  map.zoomOut(1);
});