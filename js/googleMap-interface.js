

$( document ).ready(function() {
  $('#locateUser').click(initiateMap);
  $('#timberlineLodge').click(timberline);
  $('#thirdBeach').click(trailHead);
  $('#oregonzoo').click(oregonZoo);
  $('#test').click(initMap);
});

function initMap() {
       // Create a map object and specify the DOM element for display.
       var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         scrollwheel: false,
         zoom: 8
       });
     }




// Here is the info for Oregon Zoo
function oregonZoo(){
  var lat1 = 45.5100455;
  var lng1 = -122.7180955;

  var userLatLng = new google.maps.LatLng(lat1, lng1);

  var myOptions = {
    zoom : 15,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });

}

// Here is the info for third Beach Trailhead
function trailHead(){


  var lat1 = 47.8839336;
  var lng1 = -124.6008238;

  var userLatLng = new google.maps.LatLng(lat1, lng1);

  var myOptions = {
    zoom : 12,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

// Here is the info for timberline lodge
function timberline(){
  var lat1 = 45.3312;
  var lng1 = -121.7112;

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

// Here is the info for user inputs
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
