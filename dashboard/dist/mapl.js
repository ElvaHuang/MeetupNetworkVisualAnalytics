$(function () {

var NewYork=new google.maps.LatLng(40.663971,-74.009400);
function initialize()
{
var mapProp = {
  center:NewYork,
  zoom:7,
  mapTypeId:google.maps.MapTypeId.ROADMAP
      
  };
  
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var myCity = new google.maps.Circle({
  center:NewYork,
  radius:10000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });

myCity.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


});