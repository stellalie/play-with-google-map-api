function HelloMarker(map, ltdLng) {
    this.init(map, ltdLng);
}

HelloMarker.prototype = Object.create(google.maps.Marker.prototype);

HelloMarker.prototype.init = function(map, ltdLng) {
    google.maps.Marker.call(this, {
        map: map,
        position: ltdLng
    });
}