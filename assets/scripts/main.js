var map;
var marker;

function initMap() {
  var defaultLocation = { lat: 51.5285582, lng: -0.24168145 }; // LONDON

  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 9,
  });

  // RESET BOOKING FORM & MAP
  var flightForm = document.querySelector("#flight-form-div form");
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
      departureInput
    );
    // No event listener for departure
  }

  // Autocomplete for Destination
  var destinationInput = document.getElementById("destination");
  if (destinationInput) {
    var destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput
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

  // CLICK ON MAP TO SELECT DESTINATION
  google.maps.event.addListener(map, "click", function (event) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: event.latLng }, function (results, status) {
      if (status === "OK" && results[0]) {
        let city = "";
        let elements = results[0].address_components;
        for (let e of elements) {
          if (e.types.includes("locality")) {
            city = e.long_name;
            break;
          }
        }
        if (!city) {
          for (let e of elements) {
            if (e.types.includes("postal_town")) {
              city = e.long_name;
              break;
            }
          }
        }
        if (!city) {
          for (let e of elements) {
            if (
              e.types.includes("administrative_area_level_1") ||
              e.types.includes("administrative_area_level_2")
            ) {
              city = e.long_name;
              break;
            }
          }
        }
        if (city) {
          var destinationInput = document.getElementById("destination");
          if (destinationInput) {
            destinationInput.value = city;
          }
          // Zoom in to the clicked location
          map.setCenter(event.latLng);
          map.setZoom(12);
          if (marker !== undefined && marker !== null) {
            marker.setMap(null);
          }
          marker = new google.maps.Marker({
            map: map,
            position: event.latLng,
            title: city,
          });
        } else {
          alert("City not found at this location.");
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // HIDES RETURN DATE IF ONE-WAY IS SELECTED
  const oneWayRadio = document.getElementById("one-way");
  const roundTripRadio = document.getElementById("round-trip");
  const returnDateGroup = document.getElementById("returnDateGroup");
  if (oneWayRadio && returnDateGroup) {
    oneWayRadio.addEventListener("change", function () {
      if (this.checked) {
        returnDateGroup.classList.add("hide");
        const returnDateInput = document.getElementById("return-date");
        if (returnDateInput) {
          returnDateInput.value = "";
        }
      }
    });
  }

  // SHOWS RETURN DATE IF ROUND-TRIP IS SELECTED
  if (roundTripRadio && returnDateGroup) {
    roundTripRadio.addEventListener("change", function () {
      if (this.checked) {
        returnDateGroup.classList.remove("hide");
      }
    });
  }

  // RESETS CONTACT US FORM
  const contactForm = document.querySelector("#contact form");
  const sendBtn = contactForm.querySelector('[data-bs-target="#messageModal"]');
  if (contactForm && sendBtn) {
    sendBtn.addEventListener("click", function () {
      contactForm.reset();
    });
  }
});

// Initialize the map when the window loads
window.onload = initMap;
