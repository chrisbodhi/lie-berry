// // 
// // BUILDING A GOOGLE MAP
// //

// // Note: This example requires that you consent to location sharing when prompted by your browser. If you see a blank space instead of the map, this is probably because you have denied permission for location sharing.

// var map;

// function initialize() {
//   var mapOptions = {
//     zoom: 11
//   };
//   map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);

//   // Try HTML5 geolocation
//   if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = new google.maps.LatLng(position.coords.latitude,
//                                        position.coords.longitude);

//       // Adds a white banner on the map
//       // var infowindow = new google.maps.InfoWindow({
//       //   map: map,
//       //   position: pos,
//       //   content: 'Location found using HTML5.'
//       // });

//       // Adds a typical red marker on the map
//       var marker = new google.maps.Marker({
//       position: pos,
//       map: map,
//       title: 'Hello World!'
//   });

//       map.setCenter(pos);
//     }, function() {
//       handleNoGeolocation(true);
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleNoGeolocation(false);
//   }
// }

// function handleNoGeolocation(errorFlag) {
//   if (errorFlag) {
//     var content = 'Error: The Geolocation service failed.';
//   } else {
//     var content = 'Error: Your browser doesn\'t support geolocation.';
//   }

//   var options = {
//     map: map,
//     position: new google.maps.LatLng(60, 105),
//     content: content
//   };

//   var infowindow = new google.maps.InfoWindow(options);
//   map.setCenter(options.position);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

/////////////////////////////////
//
// USING GOOGLE PLACES TO CONDUCT A RADAR SEARCH
//
/////////////////////////////////

var map;
var service;
var pos;

function initialize() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(pos.d, pos.e),
    zoom: 15
  });

  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);

  google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);
  
  // Adds a white banner on the map
  var infowindow = new google.maps.InfoWindow({
    map: map,
    position: pos,
    content: 'Location found using HTML5.'
  });

})}};

function performSearch() {
  var request = {
    bounds: map.getBounds(),
    keyword: 'county public library'
  };
  service.radarSearch(request, callback);
}

function callback(results, status) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    alert(status);
    return;
  }
  for (var i = 0, result; result = results[i]; i++) {
    var marker = new google.maps.Marker({
      map: map,
      position: result.geometry.location
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

// // Code that returns the coordinates based on button click
// // May be unnecessary due to built-in functionality of GMap code
// $('button').on('click', function () {
//   navigator.geolocation.getCurrentPosition(
//     function(position) {
//       alert("You were last spotted at (" + position.coords.latitude + "," + position.coords.longitude + ")");
//       var lat1 = position.coords.latitude;//.toString().replace('.', 'x');
//       var long1 = position.coords.longitude;//.toString().replace('.', 'x');
//       codes = [lat1, long1];
//       console.log(codes);
//       initialize();
//       return codes;
//   });
// });
