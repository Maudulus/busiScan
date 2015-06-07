$(document).ready(function() {
    initialize();

});
function initialize(){
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(14.004030, -34.283390);
    var mapOptions = {
        zoom: 2,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: mapColors,
        disableDefaultUI: false,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: true,
        draggable: true,
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
