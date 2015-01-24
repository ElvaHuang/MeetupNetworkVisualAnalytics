$(function () {

var NewYork=new google.maps.LatLng(40.663971,-74.009400);
function initialize()
{
var mapProp = {
  center:NewYork,
  zoom:10,
  mapTypeId:google.maps.MapTypeId.ROADMAP
      
  };
  
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
$.getJSON(apiUrl + "api/v0/analytics/getEventLocationByTag?topics=" + encodeURIComponent($(".group-tags").val())+"&api_key=special-key&neo4j=true",function (data) {
    $.each(data,function(key,val){
    var cent = new google.maps.LatLng(val.lat,val.lon);
    var myCity = new google.maps.Circle({
       center:cent,
       radius:500,
       strokeColor:"#0000FF",
       strokeOpacity:0.8,
       strokeWeight:2,
       fillColor:"#0000FF",
       fillOpacity:0.4
      });
    myCity.setMap(map);
    });
  
});
}
   $(" .group-tags").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            initialize();
        }
   });

google.maps.event.addDomListener(window, 'load', initialize);

});


