// $(document).ready(function() {
 

    //initialize();
// });

function initialize(){
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(42.358691, -71.053929);
    var mapOptions = {
        zoom: 4,
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

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: '40 Broad Street, Boston, MA'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

// function initialize(){
//     geocoder = new google.maps.Geocoder();
//     var latlng = new google.maps.LatLng(14.004030, -34.283390);
//     var mapOptions = {
//         zoom: 2,
//         center: latlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         styles: mapColors,
//         disableDefaultUI: false,
//         scrollwheel: false,
//         navigationControl: true,
//         mapTypeControl: false,
//         scaleControl: true,
//         draggable: true,
//     }
//     map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
// }


// //MAPS BELOW
// var geocoder;
// var map;
// var location1;
// var location2;
// var markers = [];


// $(document).ready(function(){
//     initialize();  
//     setTimeout(function(){
//         var address = []
//         var infowindow = new google.maps.InfoWindow();        

//         $.each(latLngLocations, function(index, bizLocation) {

//             // for (var latLng in address){
//                 var markerLatLng = new google.maps.LatLng(bizLocation.latitude.j, (school.latLngLocations[i].C)+getRandomArbitrary(low,high));
//                 // var markerLatLng = new google.maps.LatLng(address[latLng].j, address[latLng].C);
//                 var marker = new google.maps.Marker({
//                     position: markerLatLng,
//                     map: map,
//                     title:school.campName, 
//                     icon: '/images/programmingIconSize3.png'        
//                 });

//                 var bounds = new google.maps.LatLngBounds();
//                 bounds.extend(markerLatLng);

//             }
//         })


//     },750);     

//     // setTimeout(function(){
//     //     $.each(schoolDetails, function(index, school) {
//     //         for (var i in school.Locations) {
//     //             if (school.Locations[i] !== "N/A") {
//     //                 console.log(school.Locations[i])
//     //                 createLine(school.Locations[i])
//     //             }
//     //         }
//     //     })
//     // },100);       

//     // $("#autocomplete").on('keydown',function(event){
//     //     if (event.keyCode == 13 ) {
//     //         createLine();
//     //         var locationSearchVal = $("#autocomplete").val();
//     //         $('#locationsDiv').append('<i class="location-fa fa fa-globe fa-lg">'+locationSearchVal+'</i>');
//     //     }
//     // });
// })

// function plotMap(location1){
//     var location1 = new google.maps.LatLng(location1[0],location1[1]);
//     var marker = new google.maps.Marker({
//         position: location1,
//         map: map,
//         //title: 'Hello World!'
//     });

//     markers.push(marker);
// }

// // Sets the map on all markers in the array.
// function setAllMap(map) {
//   for (var i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//   }
// }

// function setZoom(){
//     google.maps.event.addListener(map, 'zoom_changed', function() {
//     zoomChangeBoundsListener = 
//         google.maps.event.addListener(map, 'bounds_changed', function(event) {
//             if (this.getZoom() > 15 && this.initialZoom == true) {
//                 // Change max/min zoom here
//                 this.setZoom(15);
//                 this.initialZoom = false;
//             }
//             google.maps.event.removeListener(zoomChangeBoundsListener);
//         });
//     });
//     map.initialZoom = true;
// }

