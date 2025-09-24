var map;
var marker;

function initMap() {
  var defaultLocation = { lat: 51.5285582, lng: -0.24168145 }; // LONDON

  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 9,
  });

  // Reset map and marker when form is reset
  var flightForm = document.querySelector("#flight-form form");
  if (flightForm) {
    flightForm.addEventListener("reset", function () {
      map.setCenter(defaultLocation);
      map.setZoom(9);
      if (marker !== undefined && marker !== null) {
        marker.setMap(null);
        marker = null;
      }
    });
  }

  // Autocomplete for Departure
  var departureInput = document.getElementById("departure");
  if (departureInput) {
    var departureAutocomplete = new google.maps.places.Autocomplete(
      departureInput,
      { types: ["(cities)"] }
    );
    // No event listener for departure
  }

  // Autocomplete for Destination
  var destinationInput = document.getElementById("destination");
  if (destinationInput) {
    var destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput,
      { types: ["(cities)"] }
    );

    destinationAutocomplete.addListener("place_changed", function () {
      var place = destinationAutocomplete.getPlace();
      if (place.geometry) {
        if (place.geometry.location) {
          map.setCenter(place.geometry.location);
          map.setZoom(12);
          if (marker !== undefined && marker !== null) {
            marker.setMap(null);
          }
          marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
          });
        }
      }
    });

    // Fallback for manual input
    destinationInput.addEventListener("change", function () {
      var city = destinationInput.value;
      if (city && city.length > 0) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: city }, function (results, status) {
          if (status === "OK") {
            if (results[0]) {
              map.setCenter(results[0].geometry.location);
              map.setZoom(12);
              if (marker !== undefined && marker !== null) {
                marker.setMap(null);
              }
              marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: city,
              });
            }
          }
          // else: do nothing
        });
      }
    });
  }
}

// Initialize the map when the window loads
window.onload = initMap;