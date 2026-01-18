// ====================
// GLOBAL VARIABLES
// ====================

var map;
var marker;

// ====================
// 1. MAP INITIALIZATION FUNCTION

/*
This function creates and shows the Google Map on the webpage
Like setting up a digital map on your screen
*/
function initMap() {
  console.log("⚙️ Step 1: Setting up the map...");

  // Default location (London coordinates)
  const defaultLocation = {
    lat: 51.5285582,
    lng: -0.24168145,
  };

  // Create the map and put it in the HTML element with ID "map"
  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 7,
  });

  console.log("✅ Map is ready!");

  // Now set up all the other features
  setupFormReset();
  setupDepartureAutocomplete();
  setupDestinationAutocomplete();
  setupMapClickHandler();
}

// ====================
// 2. FLIGHT FORM RESET FUNCTION

/*
When user clicks "Reset", this function brings the map back to start
*/
function handleFormReset() {
  console.log("🔄 Resetting form and map...");

  // same default location as above
  const defaultLocation = {
    lat: 51.5285582,
    lng: -0.24168145,
  };

  map.setCenter(defaultLocation);
  map.setZoom(7); // Zoom out to city level

  // Remove the marker/pin if it exists
  if (marker !== undefined && marker !== null) {
    marker.setMap(null); // Remove from map
    marker = null; // Clear our memory
  }

  console.log("✅ Map has been reset!");
}

// ====================
// 3. AUTOCOMPLETE DEPARTURE & DESTINATION FUNCTIONS

/*
Google Places Autocomplete helps users type cities faster
by suggesting places as they type
*/

// Set up autocomplete for DEPARTURE city
function setupDepartureAutocomplete() {
  console.log("🔄 Setting up departure autocomplete...");

  const departureInput = document.getElementById("departure");

  if (departureInput) {
    // Connect Google's autocomplete to our departure input
    new google.maps.places.Autocomplete(departureInput);
    console.log("✅ Departure autocomplete ready!");
  }
}

// Set up autocomplete for DESTINATION city
function setupDestinationAutocomplete() {
  console.log("🔄 Setting up destination autocomplete features...");

  const destinationInput = document.getElementById("destination");

  if (destinationInput) {
    // Connect Google's autocomplete to our destination input
    const destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput
    );

    // When user selects a place from dropdown suggestions
    destinationAutocomplete.addListener("place_changed", function () {
      console.log("📍 User selected a place from autocomplete");

      // Get the selected place details
      const place = destinationAutocomplete.getPlace();

      // If the place has location info...
      if (place.geometry && place.geometry.location) {
        // Update the map to show this location
        updateMapForLocation(place.geometry.location, place.name);
      }
    });

    // Also handle manual typing
    destinationInput.addEventListener("change", handleManualDestinationInput);

    console.log("✅ Destination autocomplete features are ready!");
  }
}

// ====================
// 4. MANUAL INPUT HANDLING FUNCTION

/*
If user types a city name manually (not using autocomplete),
this function finds that city on the map
*/
function handleManualDestinationInput() {
  console.log("⌨️ User typed destination manually");

  const destinationInput = document.getElementById("destination");
  const city = destinationInput.value;

  // Only search if user actually typed something
  if (city && city.length > 0) {
    console.log(`🔍 Searching for: ${city}`);

    // Google's geocoder turns city names into map coordinates
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: city }, function (results, status) {
      // If search was successful...
      if (status === "OK" && results[0]) {
        console.log(`✅ Found ${city} on map!`);
        // Update map to show this city
        updateMapForLocation(results[0].geometry.location, city);
      } else {
        console.log("❌ Could not find that city");
      }
    });
  }
}

// ====================
// 5. MAP CLICK HANDLER FUNCTION

/*
When user clicks anywhere on the map, this function figures out
what city they clicked on and sets it as destination
*/
function handleMapClick(event) {
  console.log("🗺️ User clicked on the map");

  // Google's geocoder turns coordinates into address information
  const geocoder = new google.maps.Geocoder();

  // event.latLng contains the coordinates where user clicked
  geocoder.geocode({ location: event.latLng }, function (results, status) {
    // If we found address info for those coordinates...
    if (status === "OK" && results[0]) {
      console.log("🔍 Finding city name for clicked location...");

      // Extract the city name from the address details
      const city = extractCityFromAddress(results[0].address_components);

      if (city) {
        console.log(`✅ Found city: ${city}`);

        // Put the city name in the destination input
        const destinationInput = document.getElementById("destination");
        if (destinationInput) {
          destinationInput.value = city;
        }

        // Update map to show this location
        updateMapForLocation(event.latLng, city);
      } else {
        console.log("❌ Could not identify city at this location");
        alert("City not found at this location.");
      }
    }
  });
}

// ====================
// 6. CITY EXTRACTION HELPER FUNCTION

/*
This is like a detective that looks through address information
and finds the city name from different possible locations in the data
*/
function extractCityFromAddress(addressComponents) {
  console.log("🕵️ Looking for city name in address data...");

  // Different places where city name might be stored
  const cityTypes = [
    ["locality"], // Usually the city name
    ["postal_town"], // Sometimes in postal info
    ["administrative_area_level_1", "administrative_area_level_2"], // Or in region info
  ];

  // Look through each possible location type
  for (const types of cityTypes) {
    // Find the first component that matches any of our types
    const component = addressComponents.find((element) =>
      types.some((type) => element.types.includes(type))
    );

    // If we found a matching component, return its name
    if (component) {
      console.log(`✅ Found city in: ${types.join(" or ")}`);
      return component.long_name;
    }
  }

  // If we didn't find anything
  console.log("❌ No city found in address data");
  return "";
}

// ====================
// 7. MAP UPDATE FUNCTION

/*
This is the most reused function - it updates the map whenever
we want to show a new location
*/
function updateMapForLocation(location, title) {
  console.log(`🎯 Updating map to show: ${title}`);

  // Move map to center on the new location
  map.setCenter(location);
  map.setZoom(12); // Zoom in to street level

  // If there's already a marker, remove it first
  if (marker !== undefined && marker !== null) {
    console.log("🗑️ Removing old marker");
    marker.setMap(null);
  }

  // Create a new marker/pin at the location
  console.log("📌 Adding new marker to map");
  marker = new google.maps.Marker({
    map: map, // Which map to put it on
    position: location, // Where to put it
    title: title, // What to show when hovering
  });

  console.log("✅ Map updated successfully!");
}

// ====================
// 8. SETUP FUNCTIONS

/*
These functions connect our code to the actual HTML page
They're like "wiring" that connects buttons to actions
*/

// Connect the reset button to our reset function
function setupFormReset() {
  console.log("🔄 Setting up form reset...");

  const flightForm = document.querySelector("#flight-form-div form");
  if (flightForm) {
    flightForm.addEventListener("reset", handleFormReset);
    console.log("✅ Reset button is connected!");
    flightForm.reset(); // Ensure form is reset on load
  }
}

// Make the map clickable
function setupMapClickHandler() {
  console.log("🔄 Making map clickable...");
  google.maps.event.addListener(map, "click", handleMapClick);
  console.log("✅ Map is now clickable!");
}

// ====================
// 9. FLIGHT TYPE TOGGLE FUNCTION

/*
This handles showing/hiding the return date field based on
whether user selects one-way or round-trip
*/

// This runs when the webpage finishes loading
document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 Webpage loaded, setting up flight type toggle...");

  const oneWayRadio = document.getElementById("one-way");
  const roundTripRadio = document.getElementById("round-trip");
  const returnDateGroup = document.getElementById("returnDateGroup");
  const returnDateInput = document.getElementById("return-date");
  const departureDateInput = document.getElementById("departure-date");

  // Only proceed if all flight/date elements exist on the page
  if (oneWayRadio && roundTripRadio && returnDateGroup && returnDateInput && departureDateInput) {
    // Function to show/hide return date
    function toggleReturnDate() {
      if (oneWayRadio.checked) {
        console.log("✈️ One-way trip selected");

        returnDateGroup.classList.add("hide");
        returnDateInput.removeAttribute("required");
        returnDateInput.value = ""; // Clear the value
      } else {
        returnDateGroup.classList.remove("hide");
        returnDateInput.setAttribute("required", "required");
        console.log("🔄 Round-trip selected");
      }
    }

    // Initial setup
    toggleReturnDate();

    // FLIGHT TYPE TOGGLE EVENT LISTENERS
    oneWayRadio.addEventListener("change", toggleReturnDate);
    roundTripRadio.addEventListener("change", toggleReturnDate);
    console.log("✅ Flight type toggle is ready!");
    
    // DISABLE PAST DATES FOR DEPARTURE & RETURN DATE INPUTS
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    departureDateInput.min = today;
    returnDateInput.min = today;

    // Update return date min when departure date changes
    departureDateInput.addEventListener("change", function () {
      if (departureDateInput.value) {
        returnDateInput.min = departureDateInput.value;
      }
    });
    console.log("✅ Date inputs are set up!");
  } else {
    console.log("⚠️ Flight/date inputs not found — skipping flight toggle and date setup.");
  }

  // DISABLE SUBMIT BUTTON UNTIL REQUIRED FIELDS IN CONTACT FORM ARE FILLED IN
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");

    function toggleSendButton() {
      if (!nameInput || !emailInput || !messageInput) return;

      const isValid =
        !!nameInput.value.trim() &&
        !!emailInput.value.trim() &&
        !!messageInput.value.trim();

      // FORM USES BROWSER'S BUILT-IN VALIDATION
      console.log(`🔍 Contact form valid: ${isValid ? "yes" : "no"}`);
    }

    // Initial check
    toggleSendButton();

    // Add event listeners to inputs
    [nameInput, emailInput, messageInput].forEach(el =>
      el.addEventListener("input", toggleSendButton)
    );

    // Handle form submission
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("📧 Contact form submitted!");

      // Let the browser perform validation UI; if invalid, show it and stop
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Simulate async submission delay
      setTimeout(() => {
        try {
          // Reset the form and update the button state (for logging)
          contactForm.reset();
          toggleSendButton();

          // Show modal programmatically AFTER successful submission
          const modalEl = document.getElementById('messageModal');
          if (modalEl && typeof bootstrap !== 'undefined') {
            const messageModal = new bootstrap.Modal(modalEl);
            messageModal.show();
          }

          console.log('✅ Contact form submission handled successfully.');
        } catch (err) {
          console.error('❌ Error handling contact submission:', err);
        }
      }, 100);
    });

    console.log("✅ Contact form validation is set up!");
  } else {
    console.log("⚠️ Contact form not found on this page.");
  }

  console.log("✅ All interactive features are ready!");
});

// ====================
// 10. START THE APPLICATION
// ====================

/*
When the browser window finishes loading everything,
start our application by initializing the map
*/
window.onload = function () {
  console.log("🚀 Starting Travel Planner Application...");

  // Initialize map only if Google Maps is available and a map element exists
  if (typeof google !== 'undefined' && document.getElementById('map')) {
    initMap();
  } else {
    console.log("⚠️ Google Maps not loaded or #map element not present — skipping map initialization.");
  }
};

// =============================================
// HOW IT ALL WORKS TOGETHER:
// =============================================

/*
1. Browser loads webpage → window.onload runs → initMap() starts
2. Map appears on screen → All setup functions connect buttons to code
3. User can now:
   - Type in departure/destination with autocomplete help
   - Click on map to select destination
   - See markers appear on map
   - Toggle between one-way/round-trip
   - Reset everything with reset button

EVERY ACTION SHOWS CONSOLE MESSAGES SO YOU CAN FOLLOW ALONG!
*/
