'use strict';

var MAP_KEY = 'user-location';
var gUserLocation;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(saveLocation);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

function saveLocation(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  gUserLocation = {
    lat,
    lng,
  };
  saveToStorage(MAP_KEY, gUserLocation);
  initMap(position.coords.latitude, position.coords.longitude);
}

function initMap(lat, lng) {
  if (!lat || !lng) {
    lat = 29.5577;
    lng = 34.9519;
  }

  var elMap = document.querySelector('#map');
  var options = {
    center: { lat, lng },
    zoom: 15,
  };

  var map = new google.maps.Map(elMap, options);

  var marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title: 'Hello World!',
  });

  document.getElementById('search-btn').addEventListener('click', () => {});
}
