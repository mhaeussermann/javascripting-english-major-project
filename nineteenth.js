// Define and assign a Markdown-it renderer.
let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
// Define map
let map, tileLayer;
map = L.map("nineteenth-map").setView([52.520008, 13.404954], 3);
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);

// Define the features array.
$.getJSON("https://raw.githubusercontent.com/mhaeussermann/mapping-19th-lit/master/19th_places_counted.geojson", function(data){
  // Define the Leaflet layer.
  let nineteenthFeatures, nineteenthLayer;
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
    popupContent += feature.name + " is mentioned " + feature.mentions + " times in the corpus.<br/>";
    popupContent += "Read about " + feature.name + " on <a href='"+ feature.wikipedia + "'>Wikipedia</a>.";
    return L.marker(feature.latLng).bindPopup(popupContent);
    })
  );
  // Add the layer to the map.
  nineteenthLayer.addTo(map);
  // These two functions rely on nineteenthFeatures, and they
  // are defined below.
  loadList(nineteenthFeatures);
  loadNavTabs(nineteenthFeatures);
  // Redraw the map so that all the markers are visible.
  map.fitBounds(nineteenthLayer.getBounds());
  // Zoom out one level to give some padding.
  map.zoomOut(1);
});

// Functions that get called in the GeoJSON callback function

let loadList, loadNavTabs;
loadList = function(featuresArray){
  $.ajax({
    url: "https://raw.githubusercontent.com/mhaeussermann/mapping-19th-lit/master/citylist.md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      $("#citylist").html(html);
      featuresArray.forEach(function(feature){
        $("#citylist").html(function(_, oldHtml){
          let regex, newHtml;
          regex = RegExp(feature.html, "g");
          newHtml = "<a href='#' data-tab='" +
            feature.tab + 
            "' data-lat='" +
            feature.latLng.lat +
            "' data-lng='" +
            feature.latLng.lng +
            "'>" + feature.html + "</a>";
          return oldHtml.replace(regex, newHtml);
        });
        // While looping, make the navigation tabs also cause panning.
        $("#nav-tabs a[href='#" + feature.tab + "']").click(function(){
          map.panTo(feature.latLng);  
        });
      });
      $("#citylist").click(function(){
        let tab, lat, lng;
        tab = $( this ).data("tab");
        $("#nav-tabs a[href='#" + tab + "']").tab("show");
        lat = $( this ).data("lat");
        lng = $( this ).data("lng");
        map.panTo([lat, lng]);
      });
    }
  });
};

loadNavTabs = function(featuresArray){
  // Create an array using the tab properties of every object in
  // nineteenthFeatures, then add "introduction" to the end of that
  // array.
  featuresArray.map(function(feature){
    return feature.tab;
  }).concat(["introduction"]).forEach(function(tab){
    // Loop through the new array of tab names and "introduction".
      $.ajax({
        url: "https://raw.githubusercontent.com/mhaeussermann/mapping-19th-lit/master/" + tab + ".md",
        success: function(markdown){
          let html;
          html = md.render(markdown);
          $("#" + tab).html(html);
        }
      });
  });
};