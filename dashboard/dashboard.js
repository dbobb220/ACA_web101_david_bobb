/// Code for GeoLocator

var myLongitude = document.getElementById('my_longitude');
var myLatitude = document.getElementById('my_latitude');

var getLocation = function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayPosition);
    } else {
        myLocation.innerHTML = "Location not available";
    }
}

function displayPosition(position) {
    myLongitude.innerHTML = "Longitude: " + position.coords.longitude;
    myLatitude.innerHTML = "Latitude: " + position.coords.latitude;
}