var map;
var marker;

// Main initialization function
function initMap() {
  const defaultLocation = { lat: 51.5285582, lng: -0.24168145 }; // LONDON

  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 9,
  });

  setupFormReset();
  setupDepartureAutocomplete();
  setupDestinationAutocomplete();
  setupMapClickHandler();
}

// Form reset handler
function handleFormReset() {
  const defaultLocation = { lat: 51.5285582, lng: -0.24168145 };
  map.setCenter(defaultLocation);
  map.setZoom(9);
  if (marker !== undefined && marker !== null) {
    marker.setMap(null);
    marker = null;
  }
}

// Destination autocomplete handler
function handleDestinationAutocomplete() {
  const destinationInput = document.getElementById("destination");
  if (destinationInput) {
    const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
    
    destinationAutocomplete.addListener("place_changed", function() {
      const place = destinationAutocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        updateMapForLocation(place.geometry.location, place.name);
      }
    });

    destinationInput.addEventListener("change", handleManualDestinationInput);
  }
}

// Manual destination input handler
function handleManualDestinationInput() {
  const destinationInput = document.getElementById("destination");
  const city = destinationInput.value;
  
  if (city && city.length > 0) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: city }, function(results, status) {
      if (status === "OK" && results[0]) {
        updateMapForLocation(results[0].geometry.location, city);
      }
    });
  }
}

// Map click handler
function handleMapClick(event) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ location: event.latLng }, function(results, status) {
    if (status === "OK" && results[0]) {
      const city = extractCityFromAddress(results[0].address_components);
      
      if (city) {
        const destinationInput = document.getElementById("destination");
        if (destinationInput) {
          destinationInput.value = city;
        }
        updateMapForLocation(event.latLng, city);
      } else {
        alert("City not found at this location.");
      }
    }
  });
}

// Geocoder callback helper (extracted from the map click handler)
function extractCityFromAddress(addressComponents) {
  const cityTypes = [
    ["locality"],
    ["postal_town"], 
    ["administrative_area_level_1", "administrative_area_level_2"]
  ];
  
  for (const types of cityTypes) {
    const component = addressComponents.find(e => types.some(type => e.types.includes(type)));
    if (component) return component.long_name;
  }
  
  return "";
}

// Utility function for common map updates
function updateMapForLocation(location, title) {
  map.setCenter(location);
  map.setZoom(12);
  if (marker !== undefined && marker !== null) {
    marker.setMap(null);
  }
  marker = new google.maps.Marker({
    map: map,
    position: location,
    title: title,
  });
}

// Setup functions for event listeners
function setupFormReset() {
  const flightForm = document.querySelector("#flight-form-div form");
  if (flightForm) {
    flightForm.addEventListener("reset", handleFormReset);
  }
}

function setupDepartureAutocomplete() {
  const departureInput = document.getElementById("departure");
  if (departureInput) {
    new google.maps.places.Autocomplete(departureInput);
  }
}

function setupDestinationAutocomplete() {
  handleDestinationAutocomplete();
}

function setupMapClickHandler() {
  google.maps.event.addListener(map, "click", handleMapClick);
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
