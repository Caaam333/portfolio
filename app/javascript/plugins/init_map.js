import mapboxgl from '!mapbox-gl';

// const initMap = () => {

//   // mapboxgl.accessToken = '<your access token here>';
//   const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
//   });
// }

//     // const map;

//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 46.5269159, lng: 6.9010895 },
//       zoom: 8,
//     });

const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.info_window);
    
    new mapboxgl.Marker()
    .setLngLat([ marker.lng, marker.lat ])
    .setPopup(popup)
    .addTo(map);
  });
};

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
};

const initMap = () => {
  const mapElement = document.getElementById('map');
  if (mapElement) {
    mapboxgl.accessToken = ENV['MAPBOX_API_KEY'];

    const map = new mapboxgl.Map({
      container: mapElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v10', // style URL
      // center: [2.3200410217200766, 48.8588897], // starting position [lng, lat]
      // zoom: 15 // starting zoom
    });
    
    const markers = JSON.parse(mapElement.dataset.markers);
    // map.resize();
    global.map = map;
    addMarkersToMap(map, markers);
    fitMapToMarkers(map, markers);
  };

};

export { initMap };

{/* <script>
    mapboxgl.accessToken = "<%= ENV['MAPBOX_API_KEY'] %>";
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [6.9010895, 46.5269159], // starting position [lng, lat]
    zoom: 10 // starting zoom
  });
  </script> */}