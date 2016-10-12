$( document ).ready(function() {
  $('#locateUser').click(initiateMap);
});

function initiateMap(){
  var lat1 = $("#lat1").val();
  var lng1 = $("#lng1").val();
  console.log("here are the variables: " + lat1 + " " + lng1);
  var userLatLng = new google.maps.LatLng(lat1, lng1);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });

}
//google maps functions
function locateUser() {
  // If the browser supports the Geolocation API
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}
