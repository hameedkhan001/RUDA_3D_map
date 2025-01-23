// import * as L from 'leaflet';

// // Initialize Leaflet map with OpenStreetMap layer
// const leafletMap = L.map('map').setView([33.66989682637919, 73.00063340562973], 13);

// const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(leafletMap);

// // Load WFS Layer
// async function loadWFSLayer() {
//     const url = 'https://localhost:8080/geoserver/ruda/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ruda%3Aruda_plots&maxFeatures=50&outputFormat=application%2Fjson';
//     const response = await fetch(url);
//     const geojsonData = await response.json();

//     // Add WFS data to Leaflet map
//     L.geoJSON(geojsonData, {
//         style: {
//             color: '#FF5733',
//             weight: 2,
//             opacity: 1
//         }
//     }).addTo(leafletMap);
// }

// // Call the function to load the WFS layer
// loadWFSLayer();
