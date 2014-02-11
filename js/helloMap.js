$(document).ready(function() {
    var ltdLng = new google.maps.LatLng(-34.397, 150.644);
    var map;

    initialize();
    placeMarker();

    function initialize() {
        var options = {
            center: ltdLng,
            zoom: 8
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), options);
        map.setCenter(ltdLng);
    }

    function placeMarker(location) {
        var marker = new HelloMarker(map, ltdLng);
        var infoWindowDiv = $("#infoWindowContent");
        var infoWindow = new HelloInfoWindow(infoWindowDiv.html());

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        })

        infoWindowDiv.bind("clickOpen", function(event) {
            var target = $(event.target);
            target.find("#hiddenContent").slideToggle('fast', function() {
                infoWindow.updateContent(map, marker, target.html());
            });
        });
    }
});