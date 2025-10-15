// flight form request
var flightForm = document.querySelector("#flight-form-div form");
if (flightForm) {
  flightForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get individual input values
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const passengers = document.getElementById("passengers").value;

    // Get selected flight type radio button
    const flightType = document.querySelector(
      'input[name="flight-type"]:checked'
    ).id;

    // Get selected flight grade radio button
    const flightGrade = document.querySelector(
      'input[name="flight-grade"]:checked'
    ).id;

    console.log({
      flightType,
      departure,
      destination,
      departureDate,
      returnDate,
      flightGrade,
      passengers,
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
      const flightsModal = bootstrap.Modal.getInstance(
        document.getElementById("flightsModal")
      );
      if (flightsModal) {
        flightsModal.hide();
      }
      return;
    }

    // Prepare data to send
    var requestData = {
      departure: departure,
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      passengers: passengers,
      flightType: flightType,
      flightGrade: flightGrade,
    };

    // Send data to the server
    fetch("/api/flights", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log("Success:", data);
        alert("Flight search submitted successfully!");
        flightForm.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting the flight search.");
      });
  });
}
