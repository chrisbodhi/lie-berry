// var map;
// function initialize() {
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(-34.397, 150.644)
//   };
//   map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

$('button').on('click', function () {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      alert("You were last spotted at (" + position.coords.latitude + "," + position.coords.longitude + ")");
      var lat1 = position.coords.latitude;//.toString().replace('.', 'x');
      var long1 = position.coords.longitude;//.toString().replace('.', 'x');
      codes = [lat1, long1];
      console.log(codes);
      initialize();
      return codes;
  });
});