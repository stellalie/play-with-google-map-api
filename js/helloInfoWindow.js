function HelloInfoWindow(html) {
    this.init(html);
}

HelloInfoWindow.prototype = Object.create(google.maps.InfoWindow.prototype);

HelloInfoWindow.prototype.init = function(html) {
    google.maps.InfoWindow.call(this, {
        content: html
    });
}

HelloInfoWindow.prototype.updateContent = function(map, marker, html) {
    this.close();
    this.init(html);
    this.open(map, marker);
};