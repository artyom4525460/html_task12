var map, marker, circle;
var latLng = {lat: 43.69, lng: -79.40};

function initMap() {

  var icon = {
    url: './images/red-marker.svg',
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0)
  };

  var icon2 = {
    url: './images/red-marker.svg',
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0)
  };

  map = new google.maps.Map(document.getElementById("map"), {
    center: latLng,
    zoom: 12,
    disableDefaultUI: true,
    scaledSize: new google.maps.Size(10, 10),
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0), // anchor
  });
  marker = new google.maps.Marker({
    position: {lat: 43.68, lng: -79.40},
    map: map,
    icon: './images/marker.png',
  });
  marker1 = new google.maps.Marker({
    position: {lat: 43.71, lng: -79.46},
    map: map,
    icon: icon,
  });
  marker2 = new google.maps.Marker({
    position: {lat: 43.73, lng: -79.34},
    map: map,
    icon: icon,
  });
  marker3 = new google.maps.Marker({
    position: {lat: 43.68, lng: -79.34},
    map: map,
    icon: icon,
  });
  marker4 = new google.maps.Marker({
    position: {lat: 43.73, lng: -79.41},
    map: map,
    icon: icon,
  });
  marker5 = new google.maps.Marker({
    position: {lat: 43.67, lng: -79.31},
    map: map,
    icon: icon2,
  });
  marker6 = new google.maps.Marker({
    position: {lat: 43.665, lng: -79.475},
    map: map,
    icon: icon,
  });

  marker1.addListener("click", () => {
    alert('Current Location is working');
  });
  marker2.addListener("click", () => {
    alert('Mark Location is working');
  });
  marker3.addListener("click", () => {
    alert('Mark Location is working');
  });
  marker4.addListener("click", () => {
    alert('Mark Location is working');
  });
  marker5.addListener("click", () => {
    alert('Mark Location is working');
  });
  marker6.addListener("click", () => {
    alert('Mark Location is working');
  });
}