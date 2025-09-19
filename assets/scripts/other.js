
// API KEY
import Config from "./config.js";

// DOM Elements
const flightForm = document.getElementById('flight-form');
const departure = document.getElementById('departure');
const destination = document.getElementById('destination');
const date = document.getElementById('date');
const passengers = document.getElementById('passengers');
const flightGrade = document.getElementsByName('flight-grade');
const resultsContainer = document.getElementById('results-container');
const loadingSpinner = document.getElementById('loading-spinner');
const errorMessage = document.getElementById('error-message');

// Google Maps Variables
let map;
let directionsService;
let directionsRenderer;
let placesService; 
let infoWindow;
let markers = [];

// Initialize Google Map
function initMap() {
    map = new google.maps.Map(document.getElementById('travel-map'), {
        center: { lat: 20.0, lng: 0.0 },
        zoom: 2
    });
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    placesService = new google.maps.places.PlacesService(map);
    infoWindow = new google.maps.InfoWindow();
}
window.initMap = initMap; // Make initMap globally accessible

// Show loading spinner
function showLoading() {
    loadingSpinner.classList.remove('hide');
    resultsContainer.classList.add('hide');
    errorMessage.classList.add('hide');
}
// Hide loading spinner
function hideLoading() {
    loadingSpinner.classList.add('hide');
    resultsContainer.classList.remove('hide');
    errorMessage.classList.add('hide');
}
// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hide');
    resultsContainer.classList.add('hide');
    loadingSpinner.classList.add('hide');
}
// Clear previous markers from the map
function clearMarkers() {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
}
// Add marker to the map
function addMarker(location, title) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: title
    });
    markers.push(marker);
    marker.addListener('click', () => {
        infoWindow.setContent(title);
        infoWindow.open(map, marker);
    });
}