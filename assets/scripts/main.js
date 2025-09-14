// API KEY
import Config from "./config.js";

// DOM Elements
const flightForm = document.getElementById('flight-form');
const departureInput = document.getElementById('departure');
const destinationInput = document.getElementById('destination');
const dateInput = document.getElementById('date');
const passengersInput = document.getElementById('passengers');
const flightGradeInputs = document.getElementsByName('flight-grade');
const resultsContainer = document.getElementById('results-container');
const loadingSpinner = document.getElementById('loading-spinner');
const errorMessage = document.getElementById('error-message');

