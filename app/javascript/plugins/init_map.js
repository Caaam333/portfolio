const initMap = () => {

  mapboxgl.accessToken = '<your access token here>';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
  });
}

//     // const map;

//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 46.5269159, lng: 6.9010895 },
//       zoom: 8,
//     });

export { initMap };