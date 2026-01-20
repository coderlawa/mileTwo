// flight form request
var flightForm = document.querySelector("#flight-form-div form");
if (flightForm) {
  const submitBtn = document.getElementById("find-flights");
  const resetBtn = document.getElementById("reset-form");

  // Function to fully reset the form
  function resetFlightForm() {
    flightForm.reset();

    // Reset radio buttons to defaults
    document.getElementById("round-trip").checked = true;
    document.getElementById("premium").checked = true;

    // Ensure all required fields are cleared
    document.getElementById("departure").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("departure-date").value = "";
    document.getElementById("return-date").value = "";
    document.getElementById("passengers").value = "one";

    // Show return date group (for round-trip default)
    const returnDateGroup = document.getElementById("returnDateGroup");
    if (returnDateGroup) {
      returnDateGroup.classList.remove("hide");
    }
  }

  // Add click handler to reset button
  if (resetBtn) {
    resetBtn.addEventListener("click", function (event) {
      event.preventDefault();
      resetFlightForm();
    });
  }

  flightForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Prevent double submits
    if (submitBtn) submitBtn.disabled = true;

    // Get individual input values
    const departureEl = document.getElementById("departure");
    const destinationEl = document.getElementById("destination");
    const departureDateEl = document.getElementById("departure-date");
    const returnDateEl = document.getElementById("return-date");
    const passengersEl = document.getElementById("passengers");

    const departure = departureEl ? departureEl.value : "";
    const destination = destinationEl ? destinationEl.value : "";
    const departureDate = departureDateEl ? departureDateEl.value : "";
    const returnDate = returnDateEl ? returnDateEl.value : "";
    const passengers = passengersEl ? passengersEl.value : "";

    // Get selected flight type radio button
    const flightTypeEl = document.querySelector(
      'input[name="flight-type"]:checked'
    );
    const flightType = flightTypeEl ? flightTypeEl.id : null;

    // Get selected flight grade radio button
    const flightGradeEl = document.querySelector(
      'input[name="flight-grade"]:checked'
    );
    const flightGrade = flightGradeEl ? flightGradeEl.id : null;

    console.log({
      departure,
      departureDate,
      destination,
      flightGrade,
      flightType,
      passengers,
      returnDate,
    });

    // Basic validation
    if (
      !departure ||
      !destination ||
      !departureDate ||
      !passengers ||
      !flightType ||
      !flightGrade
    ) {
      alert("Please fill in all required fields.");

      // Hide modal if it's open
      if (typeof bootstrap !== "undefined") {
        const flightsModalInst = bootstrap.Modal.getInstance(
          document.getElementById("flightsModal")
        );
        if (flightsModalInst) flightsModalInst.hide();
      }

      // Re-enable submit button
      if (submitBtn) submitBtn.disabled = false;

      return;
    }

    // Prepare data to send
    var requestData = {
      departure: departure,
      departureDate: departureDate,
      destination: destination,
      flightGrade: flightGrade,
      flightType: flightType,
      passengers: passengers,
      returnDate: returnDate,
      api_key: "ACTUAL_API_KEY GOES HERE", // NOTTE: Replace with your actual API key
    };

    // Send data to the server
    // NOTTE: Replace the URL with your actual endpoint
    fetch("curl https://serpapi.com/search?engine=google_flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Convert data to URL parameters
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log("Success: ", data);

        // Show modal programmatically AFTER successful submission
        const flightsModalEl = document.getElementById("flightsModal");
        if (flightsModalEl && typeof bootstrap !== "undefined") {
          const flightsModal = new bootstrap.Modal(flightsModalEl);
          flightsModal.show();
        }

        flightForm.reset();

        // Re-enable submit button
        if (submitBtn) submitBtn.disabled = false;
      })
      .catch((error) => {
        console.error("Error: ", error);
        alert("Service unavailable - currently under development. Please try again later.");
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}
